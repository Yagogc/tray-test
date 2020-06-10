# FORM TEST

Live app: [form.yago.pw](https://form.yago.pw)

## Getting Started

### Prerequisites

Have installed `nvm` and `yarn`

**Important: When running the project don't use a incognito browser or with extensions that may block service workers.
The projects has been created with a service worker that fake an API endpoint so there's no need for a server.**

### Set up local enviroment

- Run `nvm use` to use the node version\* which this projects uses (defined in `.nvmrc`).
- Run `yarn` to install all the necesary dependencies.

\* Based on the node version that you have already installed you may skip this step

### Quick start

To quickly check the app functionality, after the yarn installation, run `yarn e2e:open:prod`.

This will open a Cypress and run the tests covering some of the functionality of the website against the live app at [form.yago.pw](form.yago.pw)
Cypress has a time machine, so it's poosible to go back into the different steps covered by the tests.

Note: Remember not to use a browser in Incongnito.

### Instructions

When using the application, on the second page of the registry, if you select the second checkbox option the form submission will fail on demand. While that checkbox is uncheck, any other combination will submit successfully. This has been done to be able to try on demand a failed submission.

### Available Scripts

#### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `yarn test`

Launches the test runner in the interactive watch mode.

#### `yarn build`

Builds the app for production to the `build` folder.

#### `yarn e2e:run`

Runs the E2E tests w/ Cypress in headless mode.

#### `yarn e2e:open`

Runs the E2E tests w/ Cypress in 'non-headless' mode .

#### `yarn e2e:run:prod`

Runs the E2E tests w/ Cypress in headless mode against the live website: [form.yago.pw](form.yago.pw)

#### `yarn e2e:open:prod`

Runs the E2E tests w/ Cypress in 'non-headless' mode against the live website: [form.yago.pw](https://form.yago.pw)

## Notes

A few notes from myself regarding a few things

### React

This app has been created with `create react app`, for a quicker start. Personally this days I prefer to use or either Gatsby or Next.

### Testing

For this test to be time bounded, I just created a few unit test and functional test, a lot of things hasn't been tested for this test. The libraries I have used are:

- @testing-libary/react: for react components tests
- Cypress: for functional tests
- jest-styled-components: for styled components tests

Also for static testing, I have automated w/ husky the running of ESLint and Prettier on every pre-commit.

### Styling

I have mostly used Styled-Components for the project. I have a `scss` file mostly to make the point I can use it too if necessary.

### State management

Client State: Given the size of this project I might have choosen to use the Context API of React, but as requested, I used Redux (w/ Redux Toolkit).

Server State: Even that the project is too small to make it worth it, I have use `react-query` to leverage any server state with their side effects, loading states, etc...

### Forms

I have used `react-hook-form` because of the simple API and performance compared to other libs.

### Scaffolding

This one is a big topic, with no right or wrong approaches. In this case I used a `/folder/index` structure in this project because it's the one I'm used to do, but personally I'm not completly sold on it.

### API

I have mocked an API endpoint to `POST` the form data with the library `msw`. Because of it, I can replicate an error flow on demand.

---
