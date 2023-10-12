# productwebapp
This is a static web app, all the js/jsx code is executed on the client side.
The Reactjs web app uses a bundle.js file found in the "dist" directory.
To create this directory execute one of the following two commands:
npx webpack --config webpack.dev.js --watch
or npx webpack --config webpack.prod.js
The first command will execute until you press ctrl+c and will watch for changes in the js or jsx files that cause a webpack to build the bundle.js file.
# staticwebapp.config.json
This file is used to configure access to the URLs for the website.
You can specify the "route" which the URL to a directory or a specific page.
With the route defined you can specify who can access it "allowedRoles".
Whether to "redirect" or "rewrite" to a different page.
You can also specify the fallback "navigationFallback" for a JavaScript client app.
You can specify what should happen when an error occurs.
See https://learn.microsoft.com/en-us/azure/static-web-apps/configuration#file-location
# Invite users to access the SWA
If a user has to be "authenticated" to use a route, then they must be invited via the Azure portal.
This is required even for people with Azure AD rights, since you also have to provide the Authentication Provider e.g. Azure Active Directory. If you are the "owner" this appears to be unnecessary.

