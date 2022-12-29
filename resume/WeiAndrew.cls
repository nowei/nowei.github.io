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
\pagestyle{empty}

% \titlespacing{\section}{0px}{0px}{0px}
% \titleformat{\section}{\fontsize{16}{20}\usefont{T1}{cmr}{l}{n}}{}{0pt}{}

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
