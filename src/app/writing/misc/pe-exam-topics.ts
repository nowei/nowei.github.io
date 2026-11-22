export type PeExamResourceKind = "book" | "playlist" | "video";

/** Leading note, then a link labeled as a book or playlist (optional custom link text). */
export type PeExamResource = {
  text: string;
  href: string;
  kind: PeExamResourceKind;
  /** Anchor text; defaults to “Book” or “Playlist” or "Video". */
  linkTitle?: string;
};

export type PeExamSubtopic = {
  label: string;
  resources: PeExamResource[];
};

export type PeExamTopic = {
  id: string;
  index: number;
  title: string;
  questions: string;
  /** Resources that span multiple subtopics in this section. */
  resources: PeExamResource[];
  subtopics: PeExamSubtopic[];
};

function sub(label: string, resources: PeExamResource[] = []): PeExamSubtopic {
  return { label, resources };
}

/** NCEES PE Electrical and Computer: Computer Engineering exam specification (question counts per section). */
export const PE_COMPUTER_ENGINEERING_TOPICS: PeExamTopic[] = [
  {
    id: "data-representation",
    index: 1,
    title: "Data Representation",
    questions: "7-11",
    resources: [{
      "href": "https://youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm&si=qGgpFvS0P4hxDhVG",
      "kind": "playlist",
      "text": "Neso Academy Digital Electronics course"
    }],
    subtopics: [
      sub("Number representation"),
      sub("Character representation"),
      sub("Encoding/decoding schemes"),
      sub("Error detection and correction"),
      sub("Data compression and decompression"),
    ],
  },
  {
    id: "computer-architecture",
    index: 2,
    title: "Computer Architecture",
    questions: "12-18",
    resources: [
      {
        "href": "https://youtube.com/playlist?list=PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q&si=KfTvQqIeFa6vRyP0",
        "kind": "playlist",
        "text": "Computer Organization & Architecture (COA) course"
      },
      {
        "href": "https://youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX&si=3bikYpAp7q1kCTEx",
        "kind": "playlist",
        "text": "Gate Smashers Computer Organization and Architecture course"
      },
      {
        "href": "https://www.amazon.com/dp/0471362093",
        "kind": "book",
        "text": "The Architecture of Computer Hardware and System Software by Irv Englander"
      }
    ],
    subtopics: [
      sub(
        "Computer system organization and processor design (e.g., memory, input/output devices, central processing unit, subsystem interfaces, special purpose processors, interrupt interfaces, power management, video, communication subsystem, life safety systems)",
        [
          {
            "href": "https://youtu.be/MUWAbpg1xLo?si=32s0Aaoa0auITw75",
            "kind": "video",
            "text": "ByteByteGo CPU vs GPU vs TPU"
          },
          {
            "href": "https://youtu.be/lnppiYIobq4?si=rJgAx8QFJVY00txn",
            "kind": "video",
            "text": "Bit by Bit Explained processor units video"
          },
          {
            "href": "https://youtu.be/LxvFb63OOs8?si=Ni1QT_k1brxrPQcl",
            "kind": "video",
            "text": "Endianness video"
          },
          {
            "href": "https://youtu.be/2LaiScfoYGQ?si=LUkcYG1e3ztePomh",
            "kind": "video",
            "text": "Hardware Protocols"
          }
        ]
      ),
      sub(
        "Embedded systems (e.g., I/O devices and system peripherals, interfacing and signal conditioning, applications, microprocessors and microcontrollers, fault tolerance/recovery, communication)",
        [
          {
            "href": "https://youtube.com/playlist?list=PLPW8O6W-1chwyTzI3BHwBLbGQoPFxPAPM&si=DgeN8JInLpQn6__8",
            "kind": "playlist",
            "text": "Quantum Leaps Modern Embedded Systems Programming Course"
          },
          {
            "href": "https://youtube.com/playlist?list=PLxfrSxK7P38U6zqC6rCex1-Ej6-0lTrsc&si=QT9P6LLI2cmhV9yO",
            "kind": "playlist",
            "text": "Intermation Embedded System Design course"
          }
        ]
      ),
      sub(
        "System architecture (e.g., power provisioning and management, distributed/parallel processing systems [e.g., cloud, IoT, IIoT, massively parallel processing (MPP)], reliability, availability, and maintainability, large-scale system design)",
        [{
          "href": "https://youtu.be/BxH93LTSOFo?si=_Lj4es6pC2AlICP0",
          "kind": "video",
          "text": "Amdahl's Law"
        },
        {
          "href": "https://youtu.be/EWS_CIxttVw?si=LEADJeSiApGWTUkM",
          "kind": "video",
          "text": "ByteByteGo Scalability video"
        },
        {
          "href": "https://youtube.com/playlist?list=PLoROMvodv4rMp7MTFr4hQsDEcX7Bx6Odp&si=TkelkfELUXm-dWjV",
          "kind": "playlist",
          "text": "Stanford Parallel Computing course"
        }]
      ),
      sub(
        "Memory systems (e.g., cache systems, virtual memory, memory hierarchy, performance metrics, storage systems [e.g., network access storage (NAS), storage area network (SAN), redundant array of independent disks (RAID)], addressing and expansion)",
        [
          {
            "href": "https://youtu.be/1vO9l1idWac?si=V4xkz3pA6CZopw7i",
            "kind": "video",
            "text": "Storage Devices overview"
          },
          {
            "href": "https://youtube.com/playlist?list=PLxfrSxK7P38X7XfG4X8Y9cdOURvC7ObMF&si=2aAQxTJapJ3gh4rr",
            "kind": "playlist",
            "text": "Intermation ep 067 -> ep 077"
          },
          {
            "href": "https://youtu.be/3yZDDr0JKVc?si=XBqwKH-p_GjdZDCK",
            "kind": "video",
            "text": "PowerCert NAS and SAN"
          },
          {
            "href": "https://youtu.be/U-OCdTeZLac?si=eYHV8CYo1h-uJ_GX",
            "kind": "video",
            "text": "PowerCert RAID explanation"
          }
        ]
      ),
      sub(
        "System performance (e.g., cycles per instruction [CPI], core utilization, power, bandwidth, speed-up, benchmarking, tuning and optimization)",
        [{
          "href": "https://youtube.com/playlist?list=PLAwxTw4SYaPmqpjgrmf4-DGlaeV0om4iP&si=WapZzZak3SH1uzNS",
          "kind": "playlist",
          "text": "Georgia Tech High Performance Computer Architecture: Part 1 course"
        }]
      ),
    ],
  },
  {
    id: "systems-software",
    index: 3,
    title: "Systems Software",
    questions: "9-14",
    resources: [],
    subtopics: [
      sub("Operating systems", [{
        "href": "https://youtu.be/vBURTt97EkA?si=z8lFqFHihqNTeCyF",
        "kind": "playlist",
        "text": "Neso Academy Operating Systems course"
      }]),
      sub("Real-time operating systems", [
        {
          "href": "https://youtube.com/playlist?list=PLEBQazB0HUyQ4hAPU1cJED6t3DU0h34bz&si=9o_vAOXyuWEmg7MU",
          "kind": "playlist",
          "text": "DigiKey Intro to RTOS course"
        }
      ]),
      sub(
        "Virtualization and containerization (e.g., microservices, resource-constrained functions)",
        [
          {
            "href": "https://youtu.be/Jz8Gs4UHTO8?si=0r58cylieLDq7fVl",
            "kind": "video",
            "text": "ByteByteGo Bare Metal, Virtual Machines, and Containers"
          },
          {
            "href": "https://youtu.be/eyNBf1sqdBQ?si=ExdohUY9vjjLf9QK",
            "kind": "video",
            "text": "PowerCert Vritual Machines vs Containers"
          }
        ]
      ),
      sub("Interrupts and exception handling", [
        {
          "href": "https://youtu.be/G7bqvpAw7HE?si=WaGFYI_EimMnLSV1",
          "kind": "video",
          "text": "BitLemon interrupts video"
        },
        {
          "href": "https://youtube.com/playlist?list=PLxfrSxK7P38X7XfG4X8Y9cdOURvC7ObMF&si=UfjWlEkxx6_zbaEb",
          "kind": "playlist",
          "text": "Intermation ep 088 -> ep 090"
        }
      ]),
      sub(
        "Firmware (e.g., unified extensible firmware interface [UEFI], basic input-output system [BIOS])",
        [{
          "href": "https://youtu.be/zIYkol851dU?si=-22OVQj31TdgvlyF",
          "kind": "video",
          "text": "BIOS and UEFI"
        },
        {
          "href": "https://youtu.be/LGz0Io_dh_I?si=fDJ_29tHje-385Q6",
          "kind": "video",
          "text": "BIOS, CMOS, and UEFI"
        }
        ]
      ),
    ],
  },
  {
    id: "application-development",
    index: 4,
    title: "Application Development",
    questions: "8-12",
    resources: [{
      "href": "https://youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo&si=rZ7JGfNK3b2lh7Rm",
      "kind": "playlist",
      "text": "CrashCourse Computer Science playlist"
    }],
    subtopics: [
      sub(
        "Software design (e.g., structured programming, design methodologies, state transition diagrams, requirements definition, fault tolerance, safety critical software, model-based systems engineering, development of security operations)",
        [{
          "href": "https://youtu.be/TmtyFcLWXwo?si=gIgymZzuP0LZ8doD",
          "kind": "video",
          "text": "EzEd structured programming video"
        }, {
          "href": "https://youtube.com/playlist?list=PLAwxTw4SYaPm8PAGH7ov2Bj-nG4sXgCtJ&si=rQQWzPQLlXOu3l_u",
          "kind": "playlist",
          "text": "Georgia Tech Software Development Process course"
        }, {
          "href": "https://youtu.be/3Lis4w4_bBc?si=BSoM0Atoo-qGdFyu",
          "kind": "video",
          "text": "ByteByteGo Fault Tolerance video"
        },
        {
          "href": "https://youtu.be/GRJtYwneG2Q?si=k-TmNaLM6TzJoqdW",
          "kind": "video",
          "text": "The Power of Ten: Rules for Safety Critical Coding by Gerard Holzmann"
        }]
      ),
      sub(
        "Quality assurance (e.g., testing, reviews and inspections, safety and security, validation and verification, root cause analysis)",
        [{
          "href": "https://youtube.com/playlist?list=PLAwxTw4SYaPkNAtqsKcFkUGpf4j67NBaz&si=X0KpZ-raelE7GA8y",
          "kind": "playlist",
          "text": "Georgia Tech Software Development Process Part 1 course - just the testing, review, validation+verification videos"
        }]
      ),
      sub(
        "Software fundamentals (e.g., data structures, algorithms, handshaking and synchronization, control flow constructs)",
        [
          {
            "href": "https://youtu.be/RpLnQnurpLY?si=eyeP0I5kYhVb9si2",
            "kind": "video",
            "text": "freeCodeCamp Data Structures crash course"
          }
        ]
      ),
      sub(
        "Development tools (e.g., debuggers, disassemblers and assemblers, trace tools, emulators, static analysis tools, code repositories)",
        [
          {
            "href": "https://www.youtube.com/watch?v=g-wYLY-li9g",
            "kind": "video",
            "text": "Compiler, Assembler, Linker, and Loader"
          },
          {
            "href": "https://youtu.be/m6l3Elk7-Hg?si=BPCZz2NilrcXUvU2",
            "kind": "video",
            "text": "Computerphile Emulation video"
          },
          {
            "href": "https://youtu.be/vYW6TOwFK2M?si=NHsdfSeHul6o-06H",
            "kind": "video",
            "text": "Static Code Analysis example"
          },
          {
            "href": "https://www.youtube.com/watch?v=e9lnsKot_SQ",
            "kind": "video",
            "text": "ByteByteGo Git tutorial"
          }
        ]
      ),
      sub("Machine learning/artificial intelligence", [
        {
          "href": "https://youtu.be/E0Hmnixke2g?si=gx0uUstuacVD-o5c",
          "kind": "video",
          "text": "Infinite Codes Machine Learning crash course"
        }
      ]),
    ],
  },
  {
    id: "digital-devices",
    index: 5,
    title: "Digital Devices",
    questions: "8-12",
    resources: [],
    subtopics: [
      sub("Memory devices", [{
        "href": "https://youtu.be/r787m_IaR1I?si=l5IGuvKw8_Pr0GSU",
        "kind": "video",
        "text": "ALL ABOUT ELECTRONICS SRAM vs. DRAM video"
      },
      {
        "href": "https://youtu.be/CBa7JojXvgk?si=4WpptjFxbV8ATiuH",
        "kind": "video",
        "text": "ROM vs. RAM video"
      }]),
      sub(
        "Standard modular devices (e.g., multiplexers, demultiplexers, encoders, decoders, adders, flip-flops, arithmetic logic units [ALUs] and floating point units [FPUs])",
        [{
          "href": "https://youtube.com/playlist?list=PLBlnK6fEyqRgqGPIXix2qwWm50N_qV250&si=-w-o3QYiYHqCbf7A",
          "kind": "playlist",
          "text": "Neso Academy Combination Circuits course"
        },
        {
          "href": "https://youtube.com/playlist?list=PLBlnK6fEyqRjcL24VVkQXUI_8KLv1zWc8&si=_GOeEiSG8Be2FVpo",
          "kind": "playlist",
          "text": "Neso Academy Flip Flops"
        }]
      ),
      sub(
        "Application-specific integrated circuits (ASICs) and programmable devices (e.g., field-programmable gate array [FPGA], programmable logic devices [PLDs], programmable logic controllers [PLCs])",
        [
          {
            "href": "https://youtube.com/playlist?list=PLEBQazB0HUyT1WmMONxRZn9NmQ_9CIKhb&si=MWEMPsbQ3th0kO2v",
            "kind": "playlist",
            "text": "DigiKey Intro to FPGA"
          },
          {
            "href": "https://youtu.be/YUB-OyGr1oA?si=ryJvY0r7KL4eMIoa",
            "kind": "video",
            "text": "Verilog tutorial"
          },
          {
            "href": "https://youtu.be/jrQ1YYgiOTo?si=N_F6FCNcEIETRYtY",
            "kind": "video",
            "text": "Neso Academy PLAs video"
          },
          {
            "href": "https://youtu.be/_BlXMAKe768?si=eWrscnv0a1hQUSRB",
            "kind": "video",
            "text": "ARM What is an ASIC video"
          }
        ]
      ),
      sub("Combinational and sequential circuits (including tri-state logic)",
        [{
          "href": "https://youtu.be/VKU9ciJb5u4?si=l8NTF7v6biMiaIFy",
          "kind": "video",
          "text": "Tri-state logic",
        },
        {
          "href": "https://youtu.be/AaN72s5WfOM?si=0zmV3zPcHHRpR9tz",
          "kind": "video",
          "text": "Introduction to Sequential Circuits"
        }]
      ),
      sub("Synchronous and asynchronous sequential circuits", [
        {
          "href": "https://youtu.be/L80k-alK58g?si=M9cK4M2rMAsxa0r9",
          "kind": "video",
          "text": "Neso Academy Synchronous and Asynchronous Sequential Circuits video"
        }
      ]),
      sub("Design for testability (DFT) and testing", [
        {
          "href": "https://youtube.com/playlist?list=PLyWAP9QBe16qiSMkBcAnUMxFagLIJzmv1&si=Z8Lg2RNApdfS-w1C",
          "kind": "playlist",
          "text": "Electron Tube Testing & Design for Testability course"
        }
      ]),
      sub("System design", [{
        "href": "https://youtube.com/playlist?list=PLm_MSClsnwm9K-0eKt3I1ZGpfqX109Ryy&si=eCbhDD5guZiLpn-Q",
        "kind": "playlist",
        "text": "Ekeeda Digital System Design course"
      }]),
    ],
  },
  {
    id: "digital-electronics",
    index: 6,
    title: "Digital Electronics",
    questions: "8-12",
    resources: [],
    subtopics: [
      sub("Basic solid-state devices",
        [{
          "href": "https://youtu.be/IAMILllUtRM?si=sct99RZ7gPS0ItkZ",
          "kind": "video",
          "text": "Samsung Solid State Devices video"
        }]
      ),
      sub(
        "Operating parameters (e.g., fan-in, fan-out, loading, timing, noise and electromagnetic compatibility, thermal effects, voltage/current, power and energy management)",
        [{
          "href": "https://youtube.com/playlist?list=PLgwJf8NK-2e645xqSqUBHJCgkrtkCa5AN&si=ZpFjAcdy9IPPiC76",
          "kind": "playlist",
          "text": "Engineering Funda Logic Families"
        },
        ]
      ),
      sub(
        "Data conversion and instrumentation (e.g., ADC, DAC, op amps, sensors and transducers [input], actuators, and indicators [output], signal conditioner)",
        [
          {
            "href": "https://youtube.com/playlist?list=PLgwJf8NK-2e7N3zn75WJsA-66KBP04R-Q&si=1M2B06uye802ejVt",
            "kind": "playlist",
            "text": "Engineering Funda Memory, ADC, and DAC"
          },
          {
            "href": "https://youtu.be/idJEMYhrIfs?si=LyOlWzSHsxpvkZQG",
            "kind": "video",
            "text": "Intro to Operational Amplifier"
          },
          {
            "href": "https://youtu.be/_ZuJgt4NfFI?si=jJ80B4kAlcT81qhl",
            "kind": "video",
            "text": "Operational Amplifier Overview"
          },
        ]
      ),
      sub(
        "Circuit implementation (e.g., static CMOS implementation, logic families, signaling standards [low-voltage differential signaling (LVDS), controller area network (CAN), etc.], current-mode logic)",
        [
          {
            "href": "https://youtu.be/feNNjmqV63w?si=XK4gjNc80O0gvHSW",
            "kind": "video",
            "text": "Power over Ethernet (PoE)"
          },
          {
            "href": "https://youtu.be/bhy7sJkNsK4?si=8fR0rzZG8_GRALdf",
            "kind": "video",
            "text": "Diodes"
          },
          {
            "href": "https://youtu.be/5KQBgmvRHnA?si=tKvRCs_d0nMkfg0Y",
            "kind": "video",
            "text": "Resistor vs Capacitor vs Inductor"
          },
          {
            "href": "https://youtu.be/NuvKeqyEmNg?si=3jN6_Otsqg7w-E5r",
            "kind": "video",
            "text": "Understanding Signal Strength"
          },
          {
            "href": "https://youtu.be/kofi_P9oLNQ?si=Ok35UKmca4vzTOsF",
            "kind": "video",
            "text": "Doing math with decibels"
          }
        ]
      ),
      sub(
        "Timing design and analysis (e.g., metastability, races, hazards, glitches, timing diagrams, clock generation, distribution, recovery, handshaking and synchronization)",
        [{
          "href": "https://youtu.be/WIS9MZ0NqFY?si=I3KkUjBx_CRer_UC",
          "kind": "video",
          "text": "Digital Logic & Programming Timing video"
        },
        {
          "href": "https://youtu.be/dXU1py-Od1g?si=gxCdr_Hp2AuGzjkQ",
          "kind": "video",
          "text": "Metastability and Clock Domain video"
        },
        {
          "href": "https://youtu.be/s8qF3p7bjlI?si=zZxEMc3fILe0t2lt",
          "kind": "video",
          "text": "Static Hazards video"
        }]
      ),
    ],
  },
  {
    id: "networks-cybersecurity",
    index: 7,
    title: "Computer Networks and Cybersecurity",
    questions: "11-17",
    resources: [],
    subtopics: [sub("Network design and testing", [
      {
        "href": "https://youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&si=ITIpMpljt8fWjnRI",
        "kind": "playlist",
        "text": "Neso Academy Computer Networks course"
      },
      {
        "href": "https://youtube.com/playlist?list=PL7zRJGi6nMRzg0LdsR7F3olyLGoBcIvvg&si=g2lO7QjNIjpKload",
        "kind": "playlist",
        "text": "PowerCert Animated Videos networking playlist"
      },
      {
        "href": "https://youtube.com/playlist?list=PL7zRJGi6nMRzHkyXpGZJg3KfRSCrF15Jg&si=49tVA1GCAp1PGmd2",
        "kind": "playlist",
        "text": "PowerCert Animated Networking/OS videos playlist"
      }
    ]), sub("System cybersecurity", [
      {
        "href": "https://youtube.com/playlist?list=PLBlnK6fEyqRgJU3EsOYDTW7m6SUmW6kII&si=MGvigt4qaoO5sIoW",
        "kind": "playlist",
        "text": "Neso Academy Cryptography + Network Security course"
      },
      {
        "href": "https://account.ncees.org/reference-handbooks/",
        "kind": "book",
        "text": "NCEES Handbook (Encryption section)"
      }
    ])],
  },
  {
    id: "quality-processes",
    index: 8,
    title: "Quality Processes",
    questions: "7-11",
    resources: [],
    subtopics: [
      sub("Product/project requirements", [
        {
          "href": "https://youtube.com/playlist?list=PL3C5Ti8MuTIm4cQOyH0dS8En-yYsdPHjB&si=1q6lBHUUPghx1ZZOl",
          "kind": "playlist",
          "text": "Unit 6 Cambridge Technicals - Software Development Methodologies + Feasibililty (relevant up to Feasibility)"
        }
      ]),
      sub("Test program development and process reviews", [
        {
          "href": "https://youtube.com/playlist?list=PL3C5Ti8MuTIm4cQOyH0dS8En-yYsdPHjB&si=1q6lBHUUPghx1ZZOl",
          "kind": "playlist",
          "text": "Unit 6 Cambridge Technicals - Software Development Methodologies + Feasibililty (relevant up to Feasibility)"
        },
        {
          "href": "https://youtu.be/l6Ig9QAF6sw?si=c-0OhnWspKA4FxxF",
          "kind": "video",
          "text": "Software Development Methodologies"
        }
      ]),
      sub("Validation and verification (e.g., assertions, coverage)", [
        {
          "href": "https://youtu.be/gQrSxbfUjug?is=iqnrqIx7NHUbZFe1",
          "kind": "video",
          "text": "Validation vs. Verification"
        }
      ]),
    ],
  },
];