# 🚀 Humans in Space

An example micro-site used in ES6 workshop that visualises all humans currently in space.

## Overview

### Endpoint
- Consumes [a custom endpoint](https://8p6o1pcool.execute-api.us-east-1.amazonaws.com/default/people-in-space) on the client-side.
- Endpoint uses a AWS Lambda behind the scenes to repurpose `https://www.howmanypeopleareinspacerightnow.com/` into a simpler format that is publicly accesible (by strippping CORS and authentication).

### Branches
- There are two branches in the repository: `master` and `tranpilation`.
- The form serves as an example in using native ES modules without transpilation.
- The latter is an example in using [ParcelJS](https://parceljs.org/) to transpile ES modules.

## Getting started
1. Install [NodeJS](https://nodejs.org/en/download/).
2. Fork project on Github.
3. Clone project via Git: `git clone https://github.com/schalkventer/react-html-connector.git`
4. Run `npm install & npm start` in the root of the repository.