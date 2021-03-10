website is hosted at : https://ad8989-node-weather-app.herokuapp.com/ 

heroku code base : https://git.heroku.com/ad8989-node-weather-app.git


pushing code to heroku : 
git push heroku <branch>
git push heroku main




dev dependencies : 

1. are not installed in production environment 

2. dependencies like NODEMON : are installed globally , and are not a part of project dependencies
so if its not added in dev dependencies , any user who want to pull our code and run it locally will face issues 
as nodemon will not be added

