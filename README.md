# Node Starter

This is a 'template repository.' Just click that big green button to start using it.

---

Use of this starter template assumes that you have a 'complete dev environment' setup - a terminal, Node, VS Code, at least. If not, you may want to [start here.](https://www.notion.so/codefinity/Setting-up-a-Local-Dev-Environment-for-JS-02a4e9f4a30043d3a8e7d109be3448f4)

---

## What's Included

- [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
- [![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript). I have adjusted this slightly as per [this `commit`](https://github.com/manavm1990/node-starter/commit/ff1ed419d3ed411683b404b1cc6e221c859b0d33). More may be forthcoming as *feedback and [PRs](https://github.com/swic-cis-177/mt-project-studentloganbutler/pulls) trickle in.*
- [`husky`](https://www.npmjs.com/package/husky) is also there to help check over code quality with the linters b4 there is a successful `commit`.
- [`webpack`](https://www.npmjs.com/package/webpack) to allow the use of modern [EcmaScript Modules](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
- Various VS Code 'settings' and 'extensions.' Look in the bottom right when you open this up in VS Code to install them.
- [Kite 🪁](https://www.kite.com/javascript/) is also included. I personally recommend it, but it's certainly not compulsory to set this up.
- Probably some other stuff I'm 4getting about for now 🤷🏽‍♂️

## How To Use

Run `npm i` to get all the things installed.

Ideally, you'll run this from 2 different terminal instances.

In one terminal, you do: `npm run watch`. This will watch the files in [src](/src). This is where you would do your coding.

In the other terminal: `npm run serve`. This will execute the `dist/main.js` that webpack builds for you.

Essentially, you just code and if you've set all the things up correctly, you will get alerted whenever there is something 'bad' in your code based on some industry-standard best practices 🦄.

## 🎶

- For fonts, I set ['Victor Mono'](https://rubjo.github.io/victor-mono/) by default. You might also install: ['Inconsolata'](https://fonts.google.com/specimen/Inconsolata) or ['Source Code Pro'](https://fonts.google.com/specimen/Source+Code+Pro) - or completely change that in [.vscode/settings.json](/.vscode/settings.json), _if you know what you are doing! ⚠️_
- As you get more comfortable, of course you can modify all the things as you C fit.

### Questions/Issues

Reach me on [Twitter](https://twitter.com/GoCodeFinity) for ❓s or discussion.

If it's an actual issue... [open 1.](https://github.com/manavm1990/node-starter/issues)
