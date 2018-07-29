#  🚀 Humans in Space &middot; ![](https://img.shields.io/badge/stability-stable-green.svg) ![](https://img.shields.io/uptimerobot/ratio/m780765392-da182792b433b6871ee87dbe.svg)

An example micro-site used in [ES6 workshop](https://slides.com/schalkventer/what-the-es6) to show how ES6 can be used in production.

## Overview

### Endpoint
- Consumes [custom endpoint](https://8p6o1pcool.execute-api.us-east-1.amazonaws.com/default/people-in-space) on the client-side.
- Endpoint uses AWS Lambda behind the scenes to repurpose `https://www.howmanypeopleareinspacerightnow.com/` into a simpler format that is publicly accesible (by strippping CORS and authentication).

### Branches
- There are two branches in the repository: `master` and `tranpilation`.
- `master` serves as an example of how native ES modules can be used in production without transpilation.
- `transpilation` serves as an example how [ParcelJS](https://parceljs.org/) can be used to transpile and deploy ES6 code [to Netlify](https://humans-in-space.netlify.com/).

## Getting started
1. Install [NodeJS](https://nodejs.org/en/download/).
2. Fork project on Github.
3. Clone project via Git: `git clone https://github.com/schalkventer/react-html-connector.git`
4. Run `npm install & npm start` in the root of the repository.
