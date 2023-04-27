## Sumamry

This is just a PoC to prove that:


- A package can be built with both CJS and ESM in mind (for possible use by different services)
- Dependecy can take in args upon import so that we don't have to pass these args whenever we call something from within this package


The main purpose of the code is to prove that this will work on a much grander scale, where a big and complex pice of software needs to be ripped out of a monolith and made into a standalone package to be used by multiple different services. It also needs to take in certain arguments like configs and resources, which are normaly imported from other parts of montohlith.


Frontend is a basic vanilla react app (ESM). Simply `cd client && npm start` to run it (uses port `3000`).


Backend is a node (CJS) with express and nodemon (purely for quick testing in development purposes). Execute `cd server && npm run dev` to run it in a dev env (updates upon any changes). Runs on port `5606`. Why that port specifically? My finger slipped. That's it, there's no great mystery here.


Finally we have a standalone package, promptly named ... `standalone`. Yeah I'm not very inovative when it comes to names.


Much like any other package, if you make changes you have to rebuild the package, and then reinstall this pacakge wherever it's used. Since this is not an actual package, I didn't want to bother with publishing to npm or even github, so I just did local install.


Steps to take when working with the package:


- First cd into the package folder `cd standalone`.
- Next, build both CJM & ESM `npm build`. If you want to know more about how we build both ESM and CJM, take a look into `config` folder.
- Finally do `npm pack` which creates an archived version of the package `standalone-1.0.0.tgz`.
- Now we can finally intall the package in another app.
- Simply cd into either app and execute `npm install ../standalone/standalone-1.0.0.tgz`. This will do a localized installation, hence the relative path to the archive.
- And that's it.
- PS. I've also had issues with react not installing latest changes. Might be due to me not updating package version so react is just caching the lib. In this case I had to run `npm cache clean --force` to dump the cache before reinstalling the package again.


You may have noticed that both apps have a `standalone.js` file. It's basically the client singleton for our package where we instatiate the library while passing our custom args (config and console in this basic example). When importing standalone library throuhgout our app(s), we instead import this client and not the actual dependecy.