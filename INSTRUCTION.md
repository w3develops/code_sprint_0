# Instruction for collaborator

## Tools you need

At first you need installed Node.js if you do not have it install 
from [NodeJS Site](https://nodejs.org) use LTS version 8

After that install `npm`

If you want to build front-end part install `gulp` globally

```
npm install -g gulp@4.0.0
```

## Init

1) Clone repo

```
git clone --branch dev https://github.com/w3develops/code_sprint_0
```

2) Go to project folder and run

```
cd code_sprint_0
git pull
```

3) Install project dependencies

```
npm i
```

## Start dev proccess

Goto development branch and fetch latest changes  

```
git checkout dev
git pull
```

Choose task you want to do and create task branch

```
git checkout -b {name for task branch}
```
for example `git checkout -b task-doc-instruction`

Make changes

Start server

```
node server.js
```

If you working on 'FRONT:' or 'MODULE:' task. In other console start gulp

```
gulp
```

In browser open `localhost:3000`.

Make another changes and check it by reload browser page (we do not have browser sinc behaviour yet).

Be sure you commit your changes

```
git add {files}
git checkout -m "{Commit description}"
```

After you end task push it on repo

```
git push -u origin {task-name}
```

example `git push origin task-doc-instructions`

After that go to github and create pull request use _dev_ branch as base


## Task types

Project tasks you can see at [github projects](https://github.com/w3develops/code_sprint_0/projects/1)

Task types:

- BACK - Node.js / Express part

- DATA - fill js object with data using simple template

- DOC - previously simple html or Markdown documents

- FRONT - html/css/js (react) part

- MODULE - modules foe using both on front-end and back-end part

## Front-end dev

All your file in `src/front`

Use gulp to build.

Use _rigger_ comments to add common used chunks of code

Use CDN for font, react and other external library. (Do not use jQuery based)

## Back-end dev

All your files in `lib` folder. Add pages and enndpoint in `router.js`.
Require your handler in `router.js`.

Use `require` not ES6+ `import`.

## Data dev

Your files on `data` folder

## Doc dev

Your html files are in `src/front/` folder. Rules the sane as front-end dev

Markdown files in root

## Module dev

Module sources are in `src/module`.

Use **gulp** to build them.

