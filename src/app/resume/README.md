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

## Dependencies (windows)

```bash
sudo apt install texlive texlive-lang-german texlive-latex-extra texlive-science
```

```bash
export MANPATH="/usr/local/texlive/2023/texmf-dist/doc/man:$MANPATH"
export INFOPATH="/usr/local/texlive/2023/texmf-dist/doc/info:$INFOPATH"
export PATH="/usr/local/texlive/2023/bin/x86_64-linux:$PATH"
```

## Fonts (Windows + macOS)

`resume-fontpaths.tex` picks the first directory that contains the file:

- Ubuntu Mono: WSL user fonts (`UbuntuMono-R.ttf` / `-B` / `-RI` / `-BI`), then `/Library/Fonts/` and `~/Library/Fonts/` with either those names or Homebrew’s (`UbuntuMono-Regular.ttf`, `-Bold`, `-Italic`, `-BoldItalic`)
- Win10 Segoe emoji: `seguiemj_0.ttf` or `seguiemj.ttf` in `/mnt/c/Windows/Fonts/`, `/Library/Fonts/`, `~/Library/Fonts/`, or `~/Downloads/`

Hack to allow for windows 10 emojis in windows 11 because they look better 😎
https://www.techpowerup.com/forums/threads/change-windows-11-emoji-set.291051/

On macOS, copy the Win10 font into `~/Library/Fonts/` (either filename). If it is still in `~/Downloads/seguiemj.ttf`, the resume will pick that up. Ubuntu Mono is installed by `brew install --cask font-ubuntu-mono`.

Ubuntu Mono uses `Renderer=Node`. Segoe emoji uses `Renderer=HarfBuzz` so LuaTeX reads the CBDT color bitmaps; Node only draws the colorless outline glyphs in the same file. If HarfBuzz warns on Apple Color Emoji, confirm the log lists `seguiemj.ttf` and not `Apple Color Emoji.ttc`. `luaotfload-tool --cache=erase` if a stale cache sticks.

## MacOS instructions

```
brew install texlive
brew install --cask basictex

sudo tlmgr update --self
sudo tlmgr install xstring ifsym bbding fontawesome enumitem tabto-ltx
brew install --cask font-ubuntu-mono
```
