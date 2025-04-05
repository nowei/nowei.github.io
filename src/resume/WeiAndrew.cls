\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{WeiAndrew}[2022/12/28]
\LoadClass[11pt,letterpaper]{article}

\RequirePackage[margin=1.5cm]{geometry}
\RequirePackage[T1]{fontenc}
\RequirePackage{textcomp}
\RequirePackage{ifthen}
\RequirePackage{xcolor}
\RequirePackage{xstring}
\RequirePackage{tikz}
\RequirePackage[misc]{ifsym}
\RequirePackage{bbding}
\RequirePackage{fontawesome}
\RequirePackage{ragged2e}
\RequirePackage[inline]{enumitem}
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

\def\defaultsectionspacingsize{2px}

% \name{<first_name>}{<last_name>}
% Show name at the top. Last name is bolder.
\newcommand{\name}[2]{
  {\Huge #1 #2}
}

\newcommand{\occupation}[1]{
  {\Large #1}
}

\newcommand{\jobtitle}{
  \occupation{Software Engineer}
}

\newcommand{\namejobdesc}[1]{
  \IfEqCase{#1}{%
    {vertical}{
        \begin{flushleft}
          \name{Andrew}{Wei}
        \end{flushleft}
        \begin{flushleft}
          \jobtitle
        \end{flushleft}
      }%
      {horizontal}{
        \name{Andrew}{Wei} \occupation{Software Engineer}
      }%
  }[\PackageError{tree}{Undefined option to tree: #1}{}]%
}

\newcommand{\location}[2]{
  \item[{\small\faMapMarker}] #1, #2
}
\newcommand{\email}[1]{
  \item[{\small\footnotesize\Letter}] \href{mailto:#1}{#1}
}
\newcommand{\phonenumber}[1]{
  \item[{\footnotesize\Phone}] #1
}
\newcommand{\linkedin}[1]{
  \item[{\small\faLinkedin}] \href{https://#1}{#1}
}
\newcommand{\github}[1]{
  \item[{\small\faGithub}] \href{https://#1}{#1}
}

\newcommand{\contactinfo}[1]{
  \IfEqCase{#1}{%
    {vertical}{
        \begin{minipage}{\linewidth}
          \begin{itemize}[align=center, leftmargin=7.5mm, noitemsep, topsep=2px]
            \location{Seattle}{WA}
            \email{a.nowei42@gmail.com}
            \phonenumber{206-850-7878}
            \linkedin{linkedin.com/in/nowei}
            \github{github.com/nowei}
          \end{itemize}
        \end{minipage}
      }%
      {horizontal}{
        \begin{minipage}{\linewidth}
          \small
          \begin{itemize*}[leftmargin=0mm, rightmargin=0mm, itemjoin=\hspace{10px}, itemsep=0px, topsep=2px, noitemsep]
            \location{Seattle}{WA}
            \email{a.nowei42@gmail.com}
            \phonenumber{206-850-7878}
            \linkedin{linkedin.com/in/nowei}
            \github{github.com/nowei}
          \end{itemize*}
        \end{minipage}
      }%
  }[\PackageError{tree}{Undefined option to tree: #1}{}]%
}

\newcommand{\programminglanguages}[1]{
  \IfEqCase{#1}{%
    {vertical}{
        \begin{minipage}{\linewidth}
          \textbf{\underline{Programming Languages}}

          \vspace{2px}
          \begin{itemize}[leftmargin=4mm, rightmargin=20px, noitemsep, topsep=2px]
            \item[---] Python          \hfill 7yr
            \item[---] Java            \hfill 5yr
            \item[---] Rust, C/C++, Go, Java/TypeScript \hfill 1yr
            \item[---] C\#             \hfill 3mo
          \end{itemize}
        \end{minipage}
      }%
      {horizontal}{
        \begin{minipage}{\linewidth}
          \textbf{\underline{Programming Languages}}

          \vspace{2px}
          \begin{itemize}[leftmargin=11mm, rightmargin=0px, noitemsep, topsep=2px]
            \item[{[7yr]}] Python
            \item[{[5yr]}] Java
            \item[{[1yr]}] Rust, C/C++, Go, JavaScript/TypeScript
            \item[{[3mo]}] C\#
            \item[{[1mo]}] Kotlin
          \end{itemize}
        \end{minipage}
      }%
  }[\PackageError{tree}{Undefined option to tree: #1}{}]%
}

\newcommand{\hardwaredesclang}[1]{
  \IfEqCase{#1}{%
    {vertical}{
        \begin{minipage}{\linewidth}
          \textbf{\underline{Hardware Description Lang.}}

          \vspace{2px}
          \begin{itemize}[leftmargin=4mm, rightmargin=20px, noitemsep, topsep=2px]
            \item[---] System Verilog \hfill 1yr
            \item[---] Verilog        \hfill 3mo
          \end{itemize}
        \end{minipage}
      }%
      {horizontal}{
        \begin{minipage}{\linewidth}
          \textbf{\underline{Hardware Description Lang.}}

          \vspace{2px}
          \begin{itemize}[leftmargin=11mm, rightmargin=0px, noitemsep, topsep=2px]
            \item[{[1yr]}] System Verilog
            \item[{[3mo]}] Verilog
          \end{itemize}
        \end{minipage}
      }%
  }[\PackageError{tree}{Undefined option to tree: #1}{}]%
}

\newcommand{\technologiesframeworks}{
  \begin{minipage}{\linewidth}
    \textbf{\underline{Technologies/Frameworks}}

    \vspace{2px}
    \raggedright MySQL, SQL++, PostgreSQL, BigQuery,
    Spark, Datalog, PyTorch,
    Pandas, AWS, Unity, CUDA,
    Elasticsearch, Logstash,
    Kibana, Flask, Kafka,
    Zookeeper, Selenium,
    BeautifulSoup4, HTML/CSS,
    Android Studio, Protobufs, OpenAPI,
    DataDog, GitLab CI, Tilt, GitHub Actions \\
  \end{minipage}
}

\newcommand{\vcdeployment}{
  \begin{minipage}{\linewidth}
    \textbf{\underline{VC \& Deployment Tools}}

    \vspace{2px}
    \raggedright git, Docker, Kubernetes \\
  \end{minipage}
}

\newcommand{\hardwaretools}{
  \begin{minipage}{\linewidth}
    \textbf{\underline{Hardware}}

    \vspace{2px}
    \raggedright FPGAs, soldering \\
  \end{minipage}
}

\newcommand{\operatingsystems} {
  \begin{minipage}{\linewidth}
    \textbf{\underline{Operating Systems}}

    \vspace{2px}
    \raggedright Linux, MacOS, Windows \\
  \end{minipage}
}

\newcommand{\humanlanguages}{
  \begin{minipage}{\linewidth}
    \textbf{\underline{Other Languages}}

    \vspace{2px}
    English --- Proficient\\
    Chinese --- Basic\\
    ASL\nobreakspace\nobreakspace\nobreakspace\nobreakspace\nobreakspace --- Basic
  \end{minipage}
}
\newcommand{\interests}{
  \begin{minipage}{\linewidth}
    \textbf{\underline{Interests}}
    \begin{itemize}[leftmargin=4mm, noitemsep, topsep=2px]
      \item[---] Distributed Systems
      \item[---] Deep/Machine Learning
      \item[---] Algorithms
      \item[---] Tech for Good
    \end{itemize}
  \end{minipage}
}

\newcommand{\hobbies}{
  \begin{minipage}{\linewidth}
    \textbf{\underline{Hobbies}}

    \vspace{2px}
    food, volunteering, reading, learning new things, teaching, going to the gym
  \end{minipage}
}

\newcommand{\teachingheader}[1]{
  \begin{minipage}{\linewidth}
    {\Large\textbf{\underline{Teaching}}~{\IfEqCase{#1}{{notplain}{\normalsize\emoji{teacher}}{plain}{}}}}
  \end{minipage}
}

\newcommand{\teaching}[1]{
  \begin{minipage}{\linewidth}
    \begin{itemize}[leftmargin=6mm,itemsep=2px,topsep=2px]
      \item[>>\tiny\space]
        \textbf{TEALS} \hfill \textbf{Remote - Seattle, WA}%
      \item[>\tiny\space]
        \textbf{Volunteer Teacher/TA} \hfill 09/2022 --- present%
    \end{itemize}
    \begin{itemize}[labelindent=0.25em,labelsep=0.8em,leftmargin=*,itemsep=2px,topsep=2px]
      \item[---] Taught high school students python using the CMU CS Academy platform that python using a graphics-based framework
    \end{itemize}
  \end{minipage}

  \vspace{\defaultsectionspacingsize}
  \begin{minipage}{\linewidth}
    \begin{itemize}[leftmargin=6mm,itemsep=2px,topsep=2px]
      \item[>>\tiny\space]
        \textbf{Paul G. Allen School of Computer Science and Engineering} \hfill \textbf{Seattle, WA}%
      \item[>\tiny\space]
        \textbf{Graduate Teaching Assistant} \hfill 09/2019 --- 06/2021%
    \end{itemize}
    \begin{itemize}[labelindent=0.25em,labelsep=0.8em,leftmargin=*,itemsep=2px,topsep=2px]
      \item[---] \textbf{Classes}: Distributed Systems, Machine Learning, Machine Learning for Big Data
      \item[---] Hosted \textasciitilde3+ office hours every week + graded projects
      \item[---] 4.6/5 average section rating
    \end{itemize}

    \vspace{\defaultsectionspacingsize}
    \begin{itemize}[leftmargin=6mm,itemsep=2px,topsep=2px]
      \item[>\tiny\space]
        \textbf{Teaching Assistant} \hfill 03/2018 --- 06/2019%
    \end{itemize}
    \begin{itemize}[labelindent=0.25em,labelsep=0.8em,leftmargin=*,itemsep=2px,topsep=2px]
      \item[---] \textbf{Classes}: Statistics for CS, Databases, Intro to Data Science
      \item[---] Helped update projects to use git to teach undergraduate CS students about version control
    \end{itemize}
  \end{minipage}
}

\newcommand{\experienceheader}[1]{
  \begin{minipage}{\linewidth}
    {\Large\textbf{\underline{Experience}}~{\IfEqCase{#1}{{notplain}{\normalsize\emoji{rocket}}{plain}{}}}}
  \end{minipage}
}

\newcommand{\sunrun}[1]{
  \begin{minipage}{\linewidth}
    \begin{itemize}[leftmargin=6mm,itemsep=2px,topsep=2px]
      \item[{\IfEqCase{#1}{{notplain}{$\vcenter{\hbox{\includegraphics[width=12px]{helpers/sunrun.png}}}$}{plain}{>>\tiny\space}}}]
      \textbf{Sunrun}%
      {\IfEqCase{#1}{{notplain}{ --- \color{olive}\textit{AI\&ML Team}}{plain}{ -- AI\&ML - Automation Team}}}%
      {\IfEqCase{#1}{{notplain}{\footnotesize{\space}\footnotesize\emoji{hammer}}{plain}{}}}
      \hfill \textbf{Seattle, WA}
      \item[\IfEqCase{#1}{{notplain}{\footnotesize\emoji{sun}}{plain}{>\tiny\space}}]
        \textbf{Staff Software Engineer}{\IfEqCase{#1}{{notplain}{\footnotesize\space\footnotesize\emoji{clipboard}}{plain}{}}}
        {\IfEqCase{#1}{{notplain}{\color{gray}\textit{}}{plain}{}}} \hfill 01/2024 --- present
    \end{itemize}
    \begin{itemize}[labelindent=0.25em,labelsep=0.8em,leftmargin=*,itemsep=2px,topsep=2px]
      \item[---] Working with stakeholders to scope and execute on high-impact projects to build out internal platforms/tools that result in \strong{millions of dollars of savings per year} through time saved
      \item[---] Managed team resources like permissions, onboarding docs, and service quota requests
      \item[---] Helped troubleshoot/guide team members to resolutions when they ran into issues with \underline{AWS}; \underline{CloudFormation}; various distributed, microservice interactions
      \item[---] Worked on a lot of 0->1 work and refactored existing services to make them easier to run, test, and debug -- making it easier to reproduce and fix errors encountered in production
    \end{itemize}
  \end{minipage}
}

\newcommand{\octoml}[1]{
  \begin{minipage}{\linewidth}
    \begin{itemize}[leftmargin=6mm,itemsep=2px,topsep=2px]
      \item[{\IfEqCase{#1}{{notplain}{$\vcenter{\hbox{\includegraphics[width=12px]{helpers/octoml.png}}}$}{plain}{>>\tiny\space}}}]
      \textbf{OctoML}%
      {\IfEqCase{#1}{{notplain}{ --- \color{olive}\textit{Platform/Cloud}}{plain}{ -- Platform/Cloud}}}%
      {\IfEqCase{#1}{{notplain}{\footnotesize{\space}\footnotesize\emoji{cloud}}{plain}{}}}
      \hfill \textbf{Seattle, WA}
      \item[\IfEqCase{#1}{{notplain}{\footnotesize\emoji{smiling-face-with-sunglasses}}{plain}{>\tiny\space}}]
        \textbf{Sr. Software Engineer}{\IfEqCase{#1}{{notplain}{\footnotesize\space\footnotesize\emoji{sailboat}}{plain}{}}}
        {\IfEqCase{#1}{{notplain}{\color{gray}\textit{Model Hosting Service}}{plain}{-- Model Hosting Service}}} \hfill 04/2023 --- 01/2024
    \end{itemize}
    \begin{itemize}[labelindent=0.25em,labelsep=0.8em,leftmargin=*,itemsep=2px,topsep=2px]
      \item[---] Set up local dev environments for services with \underline{Tilt}; Improved dev QoL by making local env builds faster for faster iteration
      \item[---] Wrote and reviewed \underline{Go}/\underline{Python} code and \underline{Kubernetes} configs for services; Discussed product requirements to inform the design and implementation of new product features and services; Fix things that \underline{Go} wrong
      \item[---] Integrated third-party auth, billing, and telemetry service providers into the platform
    \end{itemize}

    \begin{itemize}[leftmargin=6mm,itemsep=2px,topsep=2px]
      \item[\IfEqCase{#1}{{notplain}{\footnotesize\emoji{folded-hands-medium-light-skin-tone}}{plain}{>\tiny\space}}]
        \textbf{Software Engineer}{\IfEqCase{#1}{{notplain}{\footnotesize{\space}\footnotesize\emoji{check-mark-button}}{plain}{}}}
        {\IfEqCase{#1}{{notplain}{\color{gray}\textit{Model Acceleration Service}}{plain}{-- Model Acceleration Service}}}
        \hfill 10/2021 --- 04/2023
    \end{itemize}
    \begin{itemize}[labelindent=0.25em,labelsep=0.8em,leftmargin=*,itemsep=2px,topsep=2px]
      \item[---] Wrote and reviewed code for the platform using \underline{Rust}, \underline{Python}, \underline{Protobufs}, \underline{SQL}, and \underline{Kubernetes}
      \item[---] Wrote code to integrate, test, and validate the tuning results of different machine learning models and frameworks
      \item[---] Wrote documentation for tutorials and new features
    \end{itemize}
  \end{minipage}
}

\newcommand{\microsoft}[1]{
  \begin{minipage}{\linewidth}
    \begin{itemize}[leftmargin=6mm]
      \item[{\IfEqCase{#1}{{notplain}{$\vcenter{\hbox{\includegraphics[width=11px]{helpers/microsoft.png}}}$}{plain}{>>\tiny\space}}}]
      \textbf{Microsoft}{\IfEqCase{#1}{{notplain}{ --- \color{olive}\textit{Office of the Chief Economist}}{plain}{ -- Office of the Chief Economist}}} \hfill \textbf{Seattle, WA}
      \item[\IfEqCase{#1}{{notplain}{\footnotesize\emoji{test-tube}}{plain}{>\tiny\space}}]
        \textbf{Research Intern}{\footnotesize\space}%
        {\IfEqCase{#1}{{notplain}{\footnotesize\emoji{video-game}\footnotesize{\space}}{plain}{}}}%
        {\IfEqCase{#1}{{notplain}{\color{gray}\textit{Data Eng. for Xbox Fin. \& Mktg}}{plain}{-- Data Eng. for Xbox Fin.}}} \hfill 06/2021 --- 09/2021
    \end{itemize}
    \begin{itemize}[labelindent=0.25em,labelsep=0.8em,leftmargin=*,itemsep=2px,topsep=2px]
      \item[---] Developed \underline{SSIS} data pipeline to crosswalk Xbox Game Pass product usage, cost, and revenue data coming from multiple teams
      \item[---] Integrated \underline{SQL Server} and \underline{PowerAutomate} flows in a \underline{PowerApp} to evaluate title performance
    \end{itemize}
  \end{minipage}
}

\newcommand{\uwcsejob}[1]{
  \begin{minipage}{\linewidth}
    \begin{itemize}[leftmargin=6mm]
      \item[{\IfEqCase{#1}{{notplain}{$\vcenter{\hbox{\includegraphics[width=11px]{helpers/uw.png}}}$}{plain}{>>\tiny\space}}}]
      \textbf{Paul G. Allen School of Computer Science \& Eng.} \hfill \textbf{Seattle, WA}
      \item[\IfEqCase{#1}{{notplain}{\footnotesize\emoji{laptop}}{plain}{>\tiny\space}}]
        \textbf{Graduate Teaching Assistant}{\footnotesize\space}{\IfEqCase{#1}
          {{notplain}{\footnotesize\emoji{game-die}}{plain}{}}} \hfill 03/2018 --- 06/2021
    \end{itemize}
    \begin{itemize}[labelindent=0.25em,labelsep=0.8em,leftmargin=*,itemsep=2px,topsep=2px]
      \item[---] Led sections of \textasciitilde25 students and held office hours for courses like Distributed Systems, Machine Learning (for Big Data),
        Databases, Statistics for CS, and Data Science
      \item[---] 4.6/5.0 average section rating
    \end{itemize}
  \end{minipage}
}

\newcommand{\amazon}[1]{
  \begin{minipage}{\linewidth}
    \begin{itemize}[leftmargin=6mm]
      \item[{\IfEqCase{#1}{{notplain}{$\vcenter{\hbox{\includegraphics[width=11px]{helpers/amazon.png}}}$}{plain}{>>\tiny\space}}}]
      \textbf{Amazon}{\IfEqCase{#1}{{notplain}{ --- \color{olive}\textit{Amazon Devices}}{plain}{ -- Amazon Devices}}} \hfill \textbf{Seattle, WA}
      \item[\IfEqCase{#1}{{notplain}{\footnotesize\emoji{raising-hands-medium-skin-tone}}{plain}{>\tiny\space}}]
        \textbf{SDE Intern}{\footnotesize\space}%
        {\IfEqCase{#1}{{notplain}{\footnotesize\emoji{magnifying-glass-tilted-right}\footnotesize{\space}}{plain}{}}}%
        {\IfEqCase{#1}{{notplain}{\color{gray}\textit{Improved Search Experience}}{plain}{-- Improved Search Experience}}} \hfill 06/2020 --- 09/2020
    \end{itemize}
    \begin{itemize}[labelindent=0.25em,labelsep=0.8em,leftmargin=*,itemsep=2px,topsep=2px]
      \item[---] Improved a promotions management tool built using \underline{Java}, \underline{TypeScript} and \underline{React Redux}
      \item[---] Lowered search latency from \textasciitilde45s to \textasciitilde2s by reducing search payload size by 4-10000x
    \end{itemize}
  \end{minipage}
}

\newcommand{\letron}[1]{
  \begin{minipage}{\linewidth}
    \begin{itemize}[leftmargin=6mm]
      \item[{\IfEqCase{#1}{{notplain}{}{plain}{>>\tiny\space}}}] \textbf{LeTron Entertainment Tech} \hfill \textbf{Kaohsiung, Taiwan}
      \item[\IfEqCase{#1}{{notplain}{\footnotesize\emoji{briefcase}}{plain}{>\tiny\space}}]
        \textbf{Intern}{\footnotesize\space}%
        {\IfEqCase{#1}{{notplain}{\footnotesize\emoji{globe-showing-asia-australia}\footnotesize{\space}}{plain}{}}}%
        {\IfEqCase{#1}{{notplain}{\color{gray}\textit{Website Health Monitoring}}{plain}{-- Website Health Monitoring}}}  \hfill 06/2019 --- 09/2019
    \end{itemize}
    \begin{itemize}[labelindent=0.25em,labelsep=0.8em,leftmargin=*,itemsep=2px,topsep=2px]
      \item[---] Created a monitoring agent for RTMP using \underline{Kafka}, \underline{Zookeeper}, \underline{Docker}, \underline{Elasticsearch}, \underline{Logstash}, and \underline{Kibana}
      \item[---] Defined and created APIs for remotely access networking tools using \underline{Flask}
    \end{itemize}
  \end{minipage}
}

\newcommand{\education}[1]{
  \begin{minipage}{\linewidth}
    {\Large\textbf{\underline{Education}}~{\IfEqCase{#1}{{notplain}{\normalsize\emoji{graduation-cap}}{plain}{}}}}
    \IfEqCase{#1}{{notplain}{\def\value{6mm}}{plain}{\def\value{0mm}}}
    \vspace{2px}
    \begin{itemize}[leftmargin=\value]
      \item[{\IfEqCase{#1}{{notplain}{$\vcenter{\hbox{\includegraphics[width=11px]{helpers/uw.png}}}$}{plain}{}}}] \textbf{University of Washington, Seattle} \hfill 2017 --- 2021
      \item[\IfEqCase{#1}{{notplain}{\footnotesize\emoji{scroll}}{plain}{}}] \textbf{MS} in \textbf{Computer Science \& Engineering} - 3.92 GPA \hfill 06/2021
      \item[\IfEqCase{#1}{{notplain}{\footnotesize\emoji{orange-book}}{plain}{}}] \textbf{BS} in \textbf{Computer Engineering} - Cum Laude, Dean's List \hfill 06/2019
    \end{itemize}
  \end{minipage}
}

\newcommand{\awards}[1]{
  \begin{minipage}{\linewidth}
    {\Large\textbf{\underline{Awards}}~{\IfEqCase{#1}{{notplain}{\normalsize\emoji{trophy}}{plain}{}}}}

    \vspace{2px}
    Bob Bandes Teaching Award \hfill 2021 \\
    Dubhacks --- Accessible Design Winner \hfill 2017 \\
    President's Volunteer Service Award - Gold \hfill 2016
  \end{minipage}
}
