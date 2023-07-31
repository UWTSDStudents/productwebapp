# productwebapp
This is a static web app, all the js/jsx code is executed on the client side.
The Reactjs web app uses a bundle.js file found in the "dist" directory.
To create this directory execute one of the following two commands:
npx webpack --mode development --watch
or npx webpack --mode production
The first command will execute until you press ctrl+c and will watch for changes in the js or jsx files that cause a webpack to build the bundle.js file.
