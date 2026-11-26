"use client";

import { Link } from "react-router-dom";

const IMAGE_W = 1584;
const IMAGE_H = 672;

type Spot = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

type Glow = Spot & {
  src: string;
};

type Zone = Spot & {
  label: string;
  href: string;
  kind: "internal" | "anchor";
};

function box(x: number, y: number, w: number, h: number) {
  return {
    x: (x / IMAGE_W) * 100,
    y: (y / IMAGE_H) * 100,
    w: (w / IMAGE_W) * 100,
    h: (h / IMAGE_H) * 100,
  };
}

const ZONES: Zone[] = [
  { id: "about", label: "About", href: "/about", kind: "internal", ...box(448, 140, 184, 532) },
  { id: "timeline", label: "Timeline", href: "/timeline", kind: "internal", ...box(632, 150, 120, 522) },
  { id: "contact", label: "Contact", href: "#contact-heading", kind: "anchor", ...box(752, 160, 108, 512) },
  { id: "writing", label: "Writing", href: "/writing", kind: "internal", ...box(860, 130, 208, 542) },
  { id: "now", label: "Now", href: "/now", kind: "internal", ...box(1068, 60, 516, 612) },
];

function glow(id: string, src: string, x: number, y: number, w: number, h: number): Glow {
  return { id, src, ...box(x, y, w, h) };
}

const GLOWS: Glow[] = [
  glow("about", "/images/night-street/signs/about.png", 474, 262, 98, 112),
  glow("timeline", "/images/night-street/signs/timeline.png", 656, 325, 87, 23),
  glow("contact", "/images/night-street/signs/contact.png", 759, 312, 67, 20),
  glow("writing", "/images/night-street/signs/writing-alley.png", 877, 322, 116, 34),
  glow("writing", "/images/night-street/signs/writing-shop.png", 973, 232, 81, 48),
  glow("now", "/images/night-street/signs/now-shop.png", 1075, 244, 91, 50),
  glow("now", "/images/night-street/signs/now-arch.png", 1399, 136, 92, 92),
  glow("now", "/images/night-street/signs/now-board.png", 1413, 515, 119, 124),
];

function place(spot: Spot) {
  return {
    left: `${spot.x}%`,
    top: `${spot.y}%`,
    width: `${spot.w}%`,
    height: `${spot.h}%`,
  };
}

export function TaipeiStreet() {
  return (
    <section className="taipei" aria-labelledby="draft-heading">
      <h1 id="draft-heading" className="taipei__title">
        Andrew Wei
      </h1>
      <div className="taipei__frame">
        <img
          src="/images/night-street/taipei-generated.png"
          alt="A rainy night alley. Each shop front leads somewhere on the site."
          width={IMAGE_W}
          height={IMAGE_H}
        />
        <nav className="taipei__zones" aria-label="Alley shops">
          {ZONES.map((zone) => {
            const className = "taipei__zone";
            const style = place(zone);
            if (zone.kind === "internal") {
              return (
                <Link
                  key={zone.id}
                  to={zone.href}
                  className={className}
                  style={style}
                  data-zone={zone.id}
                >
                  <span className="taipei__label">{zone.label}</span>
                </Link>
              );
            }
            return (
              <a
                key={zone.id}
                href={zone.href}
                className={className}
                style={style}
                data-zone={zone.id}
              >
                <span className="taipei__label">{zone.label}</span>
              </a>
            );
          })}
        </nav>
        {GLOWS.map((glow, index) => (
          <span
            key={`${glow.id}-${index}`}
            className="taipei__glow"
            data-for={glow.id}
            style={{
              ...place(glow),
              maskImage: `url(${glow.src})`,
              WebkitMaskImage: `url(${glow.src})`,
            }}
            aria-hidden="true"
          />
        ))}
      </div>
    </section>
  );
}
