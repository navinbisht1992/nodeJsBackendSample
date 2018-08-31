# nodeJsBackendSample

NodeJs sample application for beginners to learn and get familiar with different NPM modules. This project can be used as a basic architecture for any application. The plugin will contain the code required for database queries, maintaining logs and sample API.

### What is the idea behind application?
The sample application is a nice way to help and guide a fresher through various basic NPM modules that are needed in almost every NodeJs application. The idea is not to spoon feed, but to guide and make them familiar with errors that they might come across and why different NPM modules are used for. This is to guide them how to find out an NPM module which better suits to their need. 
This also have a look and feel what an API is and how HTML interacts with NodeJs and Database and with other applications.

### Where to submit Queries/issues ?
Issues related to application can be submitted here https://github.com/navinbisht1992/nodeJsBackendSample/issues

## Before you proceed
 - Install MySql/PostgreySql on your machine. In this sample application will be using MySql.
 - Create a directory for logs:
 ```
 //At root
 mkdir logger
 ```

### What is NPM?
 - npm is the package manager for JavaScript and the world’s largest software registry. Discover packages of reusable code — and assemble them in powerful new ways.
 - To install nodeJs and NPM: https://nodejs.org/en/

### How to maintain different versions of node?
 - Node Version Manager (NVM) is used to maintain different node version in same machine.
 - To install or update nvm, you can use the install script using cURL:
 As a matter of best practice we’ll update our packages:
 ```
  apt-get update
 ```
 The build-essential package should already be installed, however, we’re going still going to include it in our command for installation:
 ```
 apt-get install build-essential libssl-dev
 ```
 Use the following curl command to kick-off the install script:
 ```
 curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
 ```
 After running the above command, you may receive output similar to the following:
 ```
 Close and reopen your terminal to start using nvm
 ```
 Either do as the output suggests, and close and reopen your terminal session, or run the following command:
 ```
 source ~/.profile
 ```
 We can quickly verify that NVM is now installed and working properly with the following command:
 ```
 nvm --version
 ```
 Another very useful command to get you started on node.js management is:
 ```
 nvm help
 ```
 Follow instructions from `nvm help` to install different `node` version.

### Application tree
```
1. config
├─ 1. logger.js
└─ 2. sql.js
2. lib
├─ 1. index.js
└─ 2. db.js
3. logger
└─ 1. logger.log
4. router
├─ 1. index.js
├─ 2. service.js
└─ 3. user.js
5. .gitignore
6. app.js
7. package.lock.json
8. package.json

```

### How to start application?
 - Method 1 using `node`:
 ```
 node app / node app.js
 ```
 - Method 2 using `npm`:
 ```
 npm start
 ```
 - Method 3 using `npm forever` and `npm forever-monitor`:
 ```
 // Install forever
 npm i forever -g
 // Install forever-monitor
 npm i forever-monitor
 forever start app.js
 ```
 
### How to stop application?
 - Started using method 1:
 ```
 ctrl c
 ```
 - Started using method 2 using:
 ```
 ctrl c
 ```
 - Started using method 3:
 ```
 forever stop app.js
 ```
