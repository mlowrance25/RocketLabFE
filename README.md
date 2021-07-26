# RocketLabFE

you will want to have the backend application running in order for this application to work
which is located here: https://github.com/mlowrance25/RocketLabBE
#### INSTALL Dependencies

npm install

### Run application

ng serve 

open up browser of chocie and navigate to http://localhost:4200

Only one rocket created.. Type in 'TestRocket' in the input and you should be able 
to see the tree

You can traverse tree

TestRocket
TestRocket/height
TestRocket/mass
TestRocket/stage1
TestRocket/stage1/engine1
TestRocket/stage1/engine1/thrust

###Test application

Make sure FrontEnd app is running

Open new terminal in vsCode or IDE of choice and cd into root directory RocketLabFE
and run command:

npx cypress open

First time running will take a long time for cypress to load


Notes: 
To run test you should have three terminals running. This project which you kicked off with 
the above ng serve command above,BackEnd project which is node application located
here: https://github.com/mlowrance25/RocketLabBE, and this project which you kicked of with npx cypresss open.
