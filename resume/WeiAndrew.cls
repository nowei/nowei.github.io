\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{WeiAndrew}[2022/12/28]
\LoadClass[11pt,letterpaper]{article}

\RequirePackage[margin=1.5cm]{geometry}
\RequirePackage[T1]{fontenc}
\RequirePackage{textcomp}
\RequirePackage{ifthen}
\RequirePackage{xcolor}
\RequirePackage{tikz}
\RequirePackage[misc]{ifsym}
\RequirePackage{bbding}
\RequirePackage{fontawesome}
\RequirePackage{ragged2e}
\pagestyle{empty}

% \titlespacing{\section}{0px}{0px}{0px}
% \titleformat{\section}{\fontsize{16}{20}\usefont{T1}{cmr}{l}{n}}{}{0pt}{}

\newcommand{\discardpages}[1]{% \discardpages{<csv list>}
    \xdef\discard@pages{#1}% Store pages to discard
    \AtBeginShipout{% At shipout, decide whether to discard page/not
        \renewcommand*{\do}[1]{% How to handle each page entry in csv list
            \ifnum\value{page}=##1\relax%
                \AtBeginShipoutDiscard% Discard page/not
                \gdef\do####1{}% Do nothing further
            \fi%
        }%
        \expandafter\docsvlist\expandafter{\discard@pages}% Process list of pages to discard
    }%
}

% \name{<first_name>}{<last_name>}
% Show name at the top. Last name is bolder.
\newcommand{\name}[2]{
    \begin{flushleft}
        {\Huge #1 #2}
    \end{flushleft}
}

\newcommand{\occupation}[1]{
    \begin{flushleft}
        {\Large #1}
    \end{flushleft}
}

\newcommand{\location}[2]{
    \item[{\small\faMapMarker}] #1, #2
}
\newcommand{\email}[1]{
    \item[{\small\footnotesize\Letter}] \href{mailto:#1}{#1}
}
\newcommand{\phonenumber}[1]{
    \item[{\small\footnotesize\Phone}] #1
}
\newcommand{\linkedin}[1]{
    \item[{\small\faLinkedin}] \href{https://#1}{#1}
}
\newcommand{\github}[1]{
    \item[{\small\faGithub}] \href{https://#1}{#1}
}

\newcommand{\contactinfo}{
    \begin{itemize}[align=center, leftmargin=7.5mm]
        \location{Seattle}{WA}
        \email{a.nowei42@gmail.com}
        \phonenumber{206-850-7878}
        \linkedin{linkedin.com/in/nowei}
        \github{github.com/nowei}
    \end{itemize}
}

\newcommand{\nameinfo}{
    \name{Andrew}{Wei}
}

\newcommand{\jobtitle}{
    \occupation{Software Engineer}
}

\newcommand{\programminglanguages}{
    \textbf{\underline{Programming Languages}}
    \begin{itemize}[leftmargin=4mm, rightmargin=20px]
        \item[---] Python, Java    \hfill 5yr
        \item[---] Rust, C/C++     \hfill 1yr
        \item[---] Go, Javascript  \hfill 6mo
        \item[---] C\#, TypeScript \hfill 3mo
    \end{itemize}
}

\newcommand{\hardwaredesclang}{
    \noindent\textbf{\underline{Hardware Description Lang.}}
    \begin{itemize}[leftmargin=4mm, rightmargin=20px]
        \item[---] System Verilog \hfill 1yr
        \item[---] Verilog        \hfill 3mo
    \end{itemize}
}

\newcommand{\technologiesframeworks}{
    \textbf{\underline{Technologies/Frameworks}}\\
    \raggedright MySQL, SQL++, PostgreSQL, BigQuery,
    Spark, Datalog, PyTorch,
    Pandas, AWS, Unity, CUDA,
    Elasticsearch, Logstash,
    Kibana, Flask, Kafka,
    Zookeeper, Selenium,
    BeautifulSoup4, HTML/CSS,
    Android Studio, Protobufs,
    DataDog, GitLab CI, Tilt, GitHub Actions \\
}

\newcommand{\vcdeployment}{
    \textbf{\underline{VC \& Deployment Tools}}\\
    \raggedright git, Docker, Kubernetes \\
}

\newcommand{\hardwaretools}{
    \textbf{\underline{Hardware}}\\
    \raggedright FPGAs, soldering \\
}

\newcommand{\operatingsystems} {
    \textbf{\underline{Operating Systems}}\\
    \raggedright Linux, MacOS, Windows \\
}

\newcommand{\humanlanguages}{
    \textbf{\underline{Other Languages}}\\
    English --- Proficient\\
    Chinese --- Basic\\
    ASL\nobreakspace\nobreakspace\nobreakspace\nobreakspace\nobreakspace --- Basic\\
}
\newcommand{\interests}{
    \textbf{\underline{Interests}} \\
    \begin{itemize}[leftmargin=4mm]
        \item[---] Distributed Systems
        \item[---] Deep/Machine Learning
        \item[---] Algorithms
        \item[---] Tech for Good
    \end{itemize}
}

\newcommand{\hobbies}{
    \textbf{\underline{Hobbies}} \\
    food, volunteering, reading, learning, teaching
}

\newcommand{\experienceheader}{
{\Large\textbf{\underline{Experience}}~{\normalsize\emoji{rocket}}}
}

\newcommand{\octoml}{
    \begin{itemize}[leftmargin=6mm]
        \item[{$\vcenter{\hbox{\includegraphics[width=12px]{helpers/octoml.png}}}$}] \textbf{OctoML},{\small\space}{\color{olive}\textit{Platform/Cloud}}{\footnotesize\space}{\footnotesize\emoji{cloud}} \hfill \textbf{Seattle, WA}
        \item[\footnotesize\emoji{smiling-face-with-sunglasses}] \textbf{Senior Software Engineer}{\footnotesize\space}{\footnotesize\emoji{sailboat}} {\color{gray}\textit{Model Hosting Service}} \hfill 04/2023 - present
    \end{itemize}
    \begin{itemize}[labelindent=0.25em,labelsep=0.8em,leftmargin=*,itemsep=2px,topsep=2px]
        \item[---] Helped set up local dev environments for services with \underline{Tilt}; Improved dev QoL by making local env builds faster for faster iteration
        \item[---] Write and review \underline{Go}/\underline{Python} code and \underline{Kubernetes} configs for services; Discuss product requirements to clarify intent to design, propose, and implement product features/services; Debug things that \underline{Go} wrong
        \item[---] Worked with auth, billing, and telemetry service providers and integrated those services into the platform
    \end{itemize}
    \vspace{4px}
    \begin{itemize}[leftmargin=6mm]
        \item[\footnotesize\emoji{folded-hands-medium-light-skin-tone}] \textbf{Software Engineer}{\footnotesize\space}{\footnotesize\emoji{check-mark-button}} {\color{gray}\textit{Model Acceleration Service}} \hfill 10/2021 - 04/2023
    \end{itemize}
    \begin{itemize}[labelindent=0.25em,labelsep=0.8em,leftmargin=*,itemsep=2px,topsep=2px]
        \item[---] Designed, wrote, reviewed, and shipped \underline{Rust}, \underline{Python}, \underline{Protobufs}, \underline{SQL}, and \underline{Kubernetes} configs for internal use and cost analysis
        \item[---] Wrote code to integrate, test, and internally validate the tuning results of different machine learning models and frameworks
        \item[---] Wrote documentation for tutorials and new features
    \end{itemize}
}

\newcommand{\microsoft}{
    \begin{itemize}[leftmargin=6mm]
        \item[{$\vcenter{\hbox{\includegraphics[width=11px]{helpers/microsoft.png}}}$}] \textbf{Microsoft},{\tiny\space}{\color{olive}\textit{Office of the Chief Economist}} \hfill \textbf{Seattle, WA}
        \item[\footnotesize\emoji{test-tube}] \textbf{Research Intern}{\footnotesize\space}{\footnotesize\emoji{video-game}} {\color{gray}\textit{Data Eng. for Xbox Fin. \& Mktg}} \hfill 06/2021 - 09/2021
    \end{itemize}
    \begin{itemize}[labelindent=0.25em,labelsep=0.8em,leftmargin=*,itemsep=2px,topsep=2px]
        \item[---] Develop \underline{SSIS} data pipeline to crosswalk Xbox Game Pass product usage, cost, and revenue data coming from multiple teams
        \item[---] Integrating \underline{SQL Server} data and \underline{PowerAutomate} flows in a \underline{PowerApp} dashboard to assist in evaluating game title performance
    \end{itemize}
}

\newcommand{\uwcsejob}{
    \begin{itemize}[leftmargin=6mm]
        \item[{$\vcenter{\hbox{\includegraphics[width=11px]{helpers/uw.png}}}$}] \textbf{Paul G. Allen School of Computer Science \& Engineering} \hfill \textbf{Seattle, WA}
        \item[\footnotesize\emoji{laptop}] \textbf{Graduate Teaching Assistant}{\footnotesize\space}{\footnotesize\emoji{game-die}} \hfill 03/2018 - 06/2021
    \end{itemize}
    \begin{itemize}[labelindent=0.25em,labelsep=0.8em,leftmargin=*,itemsep=2px,topsep=2px]
        \item[---] Led sections of \textasciitilde25 students and held office hours, teaching ideas and concepts in Distributed Systems, Machine Learning (for Big Data),
            Databases, Statistics for CS, and Intro to Data Science courses
        \item[---] 4.6/5.0 average section rating
    \end{itemize}
}

\newcommand{\amazon}{
    \begin{itemize}[leftmargin=6mm]
        \item[{$\vcenter{\hbox{\includegraphics[width=11px]{helpers/amazon.png}}}$}] \textbf{Amazon},{\tiny\space}{\color{olive}\textit{Amazon Devices}} \hfill \textbf{Seattle, WA}
        \item[\footnotesize\emoji{raising-hands-medium-skin-tone}] \textbf{SDE Intern}{\footnotesize\space}{\footnotesize\emoji{magnifying-glass-tilted-right}} {\color{gray}\textit{Improved Search Experience}} \hfill 06/2020 - 09/2020
    \end{itemize}
    \begin{itemize}[labelindent=0.25em,labelsep=0.8em,leftmargin=*,itemsep=2px,topsep=2px]
        \item[---] Improved and added features to a promotions management tool using \underline{Java}, \underline{TypeScript} and \underline{React Redux}
        \item[---] Investigated search latency issues, the fix lowered latency from \textasciitilde45s to \textasciitilde2s by reducing search payload size by 4-10000x
    \end{itemize}
}

\newcommand{\letron}{
    \begin{itemize}[leftmargin=6mm]
        \item[] \textbf{LeTron Entertainment Tech} \hfill \textbf{Kaohsiung, Taiwan}
        \item[\footnotesize\emoji{briefcase}] \textbf{Intern}{\footnotesize\space}{\footnotesize\emoji{globe-showing-asia-australia}} {\color{gray}\textit{Website Health Monitoring}}  \hfill 06/2019 - 09/2019
    \end{itemize}
    \begin{itemize}[labelindent=0.25em,labelsep=0.8em,leftmargin=*,itemsep=2px]
        \item[---] Implemented a monitoring agent for RTMP using \underline{Kafka}, \underline{Zookeeper}, \underline{Docker}, \underline{Elasticsearch}, \underline{Logstash}, and \underline{Kibana}
        \item[---] Created APIs to remotely access networking tools using \underline{Flask}
    \end{itemize}
}

\newcommand{\education}{
{\Large\textbf{\underline{Education}}~{\normalsize\emoji{graduation-cap}}}
\vspace{6px}
\begin{itemize}[leftmargin=6mm]
    \item[{$\vcenter{\hbox{\includegraphics[width=11px]{helpers/uw.png}}}$}] \textbf{University of Washington, Seattle} \hfill 2017 - 2021
    \item[\footnotesize\emoji{scroll}] \textbf{MS} in \textbf{Computer Science \& Engineering} - 3.92 GPA \hfill 06/2021
    \item[\footnotesize\emoji{orange-book}] \textbf{BS} in \textbf{Computer Engineering} - Cum Laude, Dean's List \hfill 06/2019
\end{itemize}
}

\newcommand{\awards}{
{\Large\textbf{\underline{Awards}}~{\normalsize\emoji{trophy}}}
\vspace{6px} \\
Bob Bandes Teaching Award \hfill 2021 \\
Dubhacks 2017 - Accessible Design Winner \hfill 2017 \\
President's Volunteer Service Award - Gold \hfill 2016 \\
}
