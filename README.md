[![Build Status](https://travis-ci.com/ITP-Webdev/final-project-proposal-ebrahimAlhaddad.svg?token=azUiwqdEPn2Uqm2ts3KP&branch=master)](https://travis-ci.com/ITP-Webdev/final-project-proposal-ebrahimAlhaddad)

- Front-End: http://pathetic-coast.surge.sh
- Back-End: https://itp404-crud-final-api.herokuapp.com/api/games/
- Link to Server Repo (Github): https://github.com/ebrahimAlhaddad/itp404-crud-final-api
- Link to Server Repo (Heroku): https://dashboard.heroku.com/apps/itp404-crud-final-api
- Video Link: https://youtu.be/XxBqQKIpgyY
---


## What problem are you trying to solve?
	In my free time, I sometimes enjoy watching gameplay of new video games, which I personally can't afford to buy at the moment. I believe there are many people like me who enjoy doing so as well. I'm not a fan of Twitch and I prefer watching videos on Youtube because it's less hardcore in my view and I'm not a hardcore gamer. It would be great to have a web application that tracks your favorite video games and provide an accessible feed of recent youtube videos of these games.
## Who is the primary audience?
	The primary audience would be people who casually play video games and enjoy watching gameplays instead of purchasing the game. 
## How will the project requirements be fulfilled?
	There will be three main navigation routes. One will provide a search form to look video games. The search form will use the GET method to fetch a list of games from an API like Gamespot's or IGN's. The search form will implement form validation before submitting the GET request. Games will be displayed in custom cards - a custom component I will make to display some information about the game. The user will be able to add games to their favorite list. 

	Another view will display a list of favorite games in cards. Clicking on a game will show further information about it on the side of the view. This is intended to be a fourth route, which will be nested. Users can remove games from their list. 

	Adding and removing games from the list will display notifications at the top of the page. A third page will display game titles from the favorite list with a scrolling section filled with the most popular gameplay videos from Youtube, which the user can watch on the app. 

	I intend to setup a backend and integrate user creation and authentication in order to store favorite lists in the database. I don't have any experience doing so with React and it's possible I will run in many issues. I believe the application without should satisfy all the requirement, so I will attempt to integrate a backend with user authentication if time allows.
## Which libraries do you think you will use and for what?
	I will definitely use Bootsrap for styling. Besides that, I will utilize API from IGN or Gamespot and Youtube to fetch data about games and videos. I will probably resort to using react-youtube for its youtube video component to embed gameplay videos in the feed page. 







This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
