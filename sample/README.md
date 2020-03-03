#Node.js Applications
##Hello World
1) lambda.js
    1. defines a web app using the Express.js framework
2) package.json
    1. describes your app and its dependencies
	2. With your new package.json file, run npm install. If you are using npm version 5 or later, this will generate a package-lock.json file which will be copied to your Docker image
3) .dockerignore
	1. This will prevent your local modules and debug logs from being copied onto your Docker image and possibly overwriting modules installed within your image.
