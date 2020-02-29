# website-expo-2018

How to setup the project?

Commands

1) In your terminal, navigate to the folder.

2) Run command "npm run"

3) Dependencies (Run list of commands to ensure all dependencies are met)
   - node 
   - npm install
   - npm install yarn
   - npm audit fix 
 
 4) If you encountered a missing dependency called "webpack". Perform the actions below :
   To fix the dependency tree, try following the steps below in the exact order:

  1. Delete package-lock.json (not package.json!) and/or yarn.lock in your project folder.
  2. Delete node_modules in your project folder.
  3. Remove "webpack" from dependencies and/or devDependencies in the package.json file in your project folder.
  4. Run npm install or yarn, depending on the package manager you use.
