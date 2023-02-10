# Introduction to storybook

This repository contains all the materials that are used in the TampereJS March 2023 meetup

## Prerequisites

Node.js installed, tested on v18.12.1

## Storybook installation and usage

You need to run following steps to run Storybook on this project:

- `npm install`
- `npm run storybook`
- Navigate to <http://localhost:6006/>

and we're good to go :)

## Components

Components are located in `src/components`. Each component and their related files are located there.

## View components

View components are located in `src/views`

## Stories

Component stories are written as Component story format (CFD). Stories are located at component folders. E.g. `src/components/Button/Button.stories.tsx`

## Test your components on react app

- `npm start`
- Navigate to <http://localhost:3000/>
