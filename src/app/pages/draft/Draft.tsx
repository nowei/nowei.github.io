"use client";

import { useEffect } from "react";
import { TaipeiStreet } from "../../../components/taipei-street/TaipeiStreet";
import { HomeBody } from "../home/HomeBody";

function Draft() {
  useEffect(() => {
    document.title = "Andrew Wei";
    return () => {
      document.title = "Andrew Wei";
    };
  }, []);

  return (
    <div className="draft-page">
      <TaipeiStreet />
      <div className="page-shell home-flat draft-page__body">
        <HomeBody />
      </div>
    </div>
  );
}

export default Draft;
