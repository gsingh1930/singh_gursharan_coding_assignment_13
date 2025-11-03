# Instructions to build a component library with react and typescript.

The project is a react component library with integrated code quality checks using Husky and Github Actions

## Prerequisites

- Node.js
- npm
- Docker Desktop

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# initialize install storybook inside project folder by running the following command
npx storybook init

# run this command for styled componenets
npm install styled-components
npm install --save-dev @types/styled-components

# run this command inside the project folder to install jest testing
npm install --save-dev @testing-library/react @testing-library/jest-dom jest-styled-components

# Then we make components

1. Make folders for each component and make sub tables for tables compoents inside tables folder.
2. Make the following files in each folder componentName.stories.tsx, compoenentName.test.tsx, componentName.tsx, componentName.types.tsx, index.tsx and code each file for compoenents.

# after making components we run the storybook and tests

1. Make Dockerfile inside project folder to run at port 8083 and other details on how to run.
2. run the storybook using the following command - and use it to see the componenets working
- npm run storybook
3. test using the following command
- npm test

# Now we install husky and put on code quality checks
1. npm install --save-dev husky lint-staged prettier eslint
2. npx husky-init && npm install
3. create .prettierrc file by using command 'touch .prettierrc' and add code
4. create eslintrc.json file and add the code
5. npx husky add .husky/pre-commit "npx lint-staged"
6. we will create the folder and file for github workflow using the two following commands.
mkdir -p .github/workflows
touch .github/workflows/ci.yml

# prepare for docker conatinerization
1. docker build command
- docker build -t singh_gursharan_coding_assignment13 .
2. run docker contaienr using the command below
- docker run -d -p 8018:8018 --name singh_gursharan_coding_assignment13 singh_gursharan_coding_assignment13
3. Stop the running container
- docker stop singh_gursharan_coding_assignment13
