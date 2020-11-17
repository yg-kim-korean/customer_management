# Management System
React 활용 유튜브 강의를 통해 만든 고객관리 시스템
https://www.youtube.com/channel/UChflhu32f5EUHlY7_SetNWw

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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# node.js 서버 설치시 node_module이 정상적으로 설치 되지 않았다. (7강) 해결방법. 
package.json 을 먼저 작성한 이유는 클라이언트와 서버를 동시가동하는 코드가 들어갑니다.
express를 다뤄보신분들은 아시겠지만 pm2나 nodemon은 필수이기에(서버가 죽더라도 스스로 부활함)
npm install nodemon -g <-g 는 글로벌하게 설치 -s --save 등은 해당 패키지에만 저장
yarn 을 설치하셨다면 
yarn add nodemon
만약 지금 처음으로 node.js를 배우시는 분이라면
이과정을 보시기전에 node.js 설치할때 필요한 기본적인 모듈과 vscode에서 사용할확장기능등을 조금만 섭렵하고 오셔도 늦지 않으실거에요.
vscode 추천확장기능
vscode-icons
ES7 React/Redux/GraphQL/React-Native snippets
VSCode Highlight Matching Tag
Auto Rename Tag
Auto Close Tag
Auto Import
...
npm 추천 설치
npm install -g yarn
npm install -g nodemon
을 진행한이후
root 폴더(폴더명은 프로젝트 이름 이뿌게)에서
npm init 엔터 연타!다다다다!
그리고 3:25에서 설명하는걸 입력하시고
npx create-react-app client
md server
root폴더에서
yarn add concurrently
package.json파일
"server": "cd server && yarn start",
