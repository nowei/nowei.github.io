# Editing

# VSCode LaTeX extensions

- LaTeX Workshop: https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop

```
{
  "recommendations": [
    "james-yu.latex-workshop",
    "tomoki1207.pdf",
    "ms-vscode.remote-explorer",
    "ms-vscode-remote.vscode-remote-extensionpack",
    "ms-vscode-remote.remote-ssh",
    "ms-vscode.remote-server",
    "ms-vscode-remote.remote-containers",
    "ms-vscode-remote.remote-wsl",
    "esbenp.prettier-vscode"
  ]
}

```

## Dependencies

```bash
sudo apt install texlive texlive-lang-german texlive-latex-extra texlive-science
```

```bash
export MANPATH="/usr/local/texlive/2023/texmf-dist/doc/man:$MANPATH"
export INFOPATH="/usr/local/texlive/2023/texmf-dist/doc/info:$INFOPATH"
export PATH="/usr/local/texlive/2023/bin/x86_64-linux:$PATH"
```

## Install old Windows emojis path:

Hack to allow for windows 10 emojis in windows 11 because they look better 😎
https://www.techpowerup.com/forums/threads/change-windows-11-emoji-set.291051/

```latex
\setemojifont{seguiemj_0.ttf}[Path=/mnt/c/Windows/Fonts/]
```

then put it in the fonts and reference it in the LaTeX file
e.g.

```bash
/mnt/c/Users/andre/AppData/Local/Microsoft/Windows/Fonts/
```
