# github-repo-viewer

This is a GitHub repository viewer built using Ember.js. It allows users to view public and private repositories for a
GitHub organization by fetching data from the GitHub API. The app enables filtering repositories by programming language
and toggling the display of private and public repositories.

A working demo of this project is deployed via GitHub Pages and can be accessed here:
[GitHub Repo Viewer Demo](https://pleszkowicz.github.io/github-repo-viewer).

You can generate a personal GitHub access token for testing at https://github.com/settings/tokens.
Choose the `repo` scope.

The app should work properly with recent major browsers. The app was developed in Chrome v128.

## Features

- Enter a GitHub organization name to fetch its repositories.
- Display repository details, including:
  - Name
  - Link to the repository
  - Programming language
  - Whether it's private or public
  - Number of branches (on expand button click)
- Filter repositories by programming language.
- Toggle between showing private and public repositories.
- Handles authentication via a manually entered GitHub token, stored securely.
- The app state keeps token, organization, and private/public filter toggles

## Security Considerations

- The GitHub access token is stored in local storage and persists for long-term sessions, including page reloads.
- A basic input validation for the GitHub organization name ensures that the input is properly formatted according to
  GitHub's naming conventions (alphanumeric, and hyphen, but no leading/trailing hyphens).

Possible enhancements:

- CSP
- Ideally, the authentication token should be stored eg. as http-only cookie

## Architecture

### Component-Based Architecture

The application is built using Ember's component-based architecture, where each part of the UI is broken down into
reusable components. This ensures that each component has a single responsibility, which improves maintainability and
modularity.

### Service-Oriented Design

The app utilizes Ember’s service layer to handle state management, interactions with GitHub’s API, and token storage.
This approach abstracts the business logic from the UI components, resulting in a more maintainable and testable
codebase.

#### GithubService:

- Centralized logic for fetching repositories and branches from the GitHub API.
- Manages state related to repositories and programming languages.

#### AuthService:

- Handles authentication by verifying the GitHub token and storing it in local storage.
- Provides session management functions such as authenticate and invalidate.

### Routing

An `index` route handles initial redirection based on user auth (token) state.

### Data fetching

The simplest way would be to use a regular `fetch`. However, to demonstrate Ember Data possibilities, I decided to
utilize this module too.

### UI

This is the part that I'm the least proud of, because I focused on recalling Ember utilities after longer
break with Ember development and the app architecture was the main priority.
I decided to use pure HTML and CSS. To enhance it further, it would be great to incorporate Flexbox / CSS Grid or use
some UI library which handles it out of the box, including Design System.

### Tests

Included basic functionality test in component integration test files.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Volta](https://volta.sh) - follow the instructions on https://docs.volta.sh/guide/getting-started
- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)
- [Ember CLI](https://cli.emberjs.com/release/)
- [Google Chrome](https://google.com/chrome/)

Volta ensures pnpm / node compatibility with project settings. See `package.json`.

## Installation

- `git clone <repository-url>` this repository
- `cd github-repo-viewer`
- `pnpm install`

## Running / Development

- `pnpm start`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

- `pnpm test`
- `pnpm test:ember --server`

### Linting

`lint-staged` handles all linting logic in the pre-commit hook triggered by `husky`.

- `pnpm lint`
- `pnpm lint:fix`

### Building

- `pnpm ember build` (development)
- `pnpm build` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://cli.emberjs.com/release/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
