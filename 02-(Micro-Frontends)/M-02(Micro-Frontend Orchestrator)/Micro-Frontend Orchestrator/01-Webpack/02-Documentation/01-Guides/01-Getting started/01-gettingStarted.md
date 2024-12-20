# Getting started

Webpack is used to compile JavaScript modules. Let's clearify all doubts regarding _modules_

Modules are nothing but the files which we create while developing an application in which we write some logics for the application and there can be some assets. All of these comes together and treated as a modules. That's it.

In a module there can be :-

- Some HTML files
- Some CSS files
- Some JavaScript files
- Some assets which we have used in the application
  - Can be static
  - Can be dynamic

So, we know that webpack is a bundler and it's job is to combine all these files which are in different-different modules, into a single module/bundle so that our application can load fast and give a better user experience.

Bundler means _It receives lots of things, it dosen't matter what is it and combine them all together by their own specific group. This is what a bundler does._

#### **[_Installation guide_](../02-Installation/installation.md)**

## Insights about webpack or any bundler

**1. Build process**

- Webpack(or any other bundler) takes all our assets (JavaScript, CSS, HTML, Images..etc) and process them based on the configuration which we have defined in its configuration file, _webpack.config.ts_ in this case.

- It bundles, minifies, and optimizes the assets for production, placing the final output in the _dist_ folder.

- The _dist_ folder contains all the optimized assets needs to run our application.

**2. Deployment**

- On deployment stage, we take the _dist_ folder and upload it to the server which we have rented from the hosting provider. Once, it's uploaded, the application can be served to users without Webpack being involved.

- At this point, webpack job is done. It does not _keep working_ on the server. The webpack configuration and tool itself are not part of the deployment.

**3. Why Webpack dosen't continue running**

- Webpack is a _build-time tool_ which job is to prepare our code for production. Once the built folder which is _dist_ (in most of the cases), can be changed, is created there is no longer need to use webpack rest of the task is done by server which is running our application.

- If we want to make our changes in the code we must re-run the webpack command to re-generate the _dist_ folder again and then re-deploy the folder. But if we built a CI/CD pipeline we can directly push the code on the platform, all changes will be replicated after a while.

**_So, to summarize ===> No, webpack does not working once the application is deployed. It work ends after the dist folder is built, as it's meant to prepare our code for production, not handle it on the server._**

## Getting Started

Webpack is used to compile JavaScript modules. Once installed, we can interact with webpack either from it _CLI_ or _API_

[About Webpack CLI](../03-Webpack-CLI/webpackCLI.md)

## Basic Setup

**1. Create a directory**
**2. Initialize NPM**
**3. Install webpack locally**

```bash
$ npm install webpack webpack-cli --save-dev
```

**4. Install webpack CLI(the tool used to run webpack on the command line)**

[Read about basic setup](./basicSetup/learnings.md)

## Modules

- The import and export statements have been standardized in ES2015.
- Behind the scenes, webpack actually "transpiles" the code so that older browsers can also run it.
- Note that webpack will not alter any code other than import and export statements.
- If we are using other _ES2015 features_, we must use a transpiler such as Babel via webpack's loader system.

## Using a configuration

As of version 4, webpack doesn't require any configuration, but most projects will need a more complex setup, which is why webpack supports a configuration file.

This is much more efficient than having to manually type in a lot of commands in the terminal, so lets create a demo project with webpack configuration file

[Demo project with webpack's configuration file](./basicSetupWithConfiguration/learnings.md)

## Conclusion

Now, we have learnt about how to setup webpack in our project. As of now our folder structure is looking like this

```json
- root folder
  - package.json
  - package-lock.json
  - webpack.config.js
  - dist
    - main.js
    - index.html
  - src
    - index.js
  - node_modules
```
