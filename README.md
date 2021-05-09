# Flex Timer

## Summary

This project is built with the following tools and frameworks:

- [React](https://reactjs.org/)
- [Storybook](https://storybook.js.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [Cypress](https://www.cypress.io/)

## Installation

Install node dependencies

```bash
npm install
```

Start local storybook app

```bash
npm run storybook
```

This will start a server at http://localhost:6006/?path=/story/components-flextimer--default

This will provide a nice UI playground for experimenting with the component in isolation:

![Storybook Image 1](/assets/img1.png)

## Running Tests

I'm using [Cypress](https://www.cypress.io/) to run full UI tests.

Before running the tests, our local storybook app **MUST** be running.

To run a headed browser test which provides nice visuals, you can run the default testing command:

```bash
npm test
```

Otherwise, if you'd prefer to run headless without a browser:

```bash
npx cypress run
```

## Project Retro

Overall had fun with this project. Would've liked to have spent some more time on it, but didn't want to keep you guys waiting!

I ended up using the traditional setInterval() (yea i know, i'm lame) since it was the easiest to set up, but I would've liked to have experimented with **requestAnimationFrame** because I saw a few examples that argued for its efficiency.

## Author Bio

I am a developer that has worked for many start ups of all sizes across several different industries including digital ads, media, real estate, and market research.

For the last 8 years or so, I've grown with the ever-changing and constantly evolving web, from using traditional fullstack php creating websites using frameworks like wordpress and jquery to more modern single page applications such as NodeJS, NextJS, React and Typescript, utilzing service oriented apis and optimzations such as code splitting and server-side rendering.

I love working with the latest front end technologies and participating in developer sessions, where members take turns mentoring the rest of the team on confusing or trending topics.

For the last year I've also been focused on personal growth, improving my habits and making a conscious effort to improve myself by 1% better each day.

One of my biggest goals over the next few years is to transition into a full blown digital nomad (damn you covid for delaying my dreams!), as I continue to learn and grow with those around me.

Look forward to meeting members of the team and company, but in the event I don't pass the test and get the chance, I'd like to take the time here to thank you guys for giving me the opportunity to learn about you guys and work this fun side project!

Best,

Michael

## Contact

**Name**: Michael Trieu

**Email**: michaelvtrieu@gmail.com

**Linkedin**: [https://www.linkedin.com/in/michaelvtrieu/](https://www.linkedin.com/in/michaelvtrieu/)
