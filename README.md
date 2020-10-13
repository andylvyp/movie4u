# Movie4U
This is a project that provides movie recommendations for the users. The frontend is developed with *React.js*. Instead of using microservices, we use *json local server* to simulate the database.

## Get started
Use ```npm install``` for project dependencies. Use ```npx json-server --port 3001 --watch movieDB.json``` to run the local json server. Use ```npm start``` to run the project on local machine.

## End point
http://localhost:3001/movie returns the data of movie list </br>
http://localhost:3001/actor returns the data of actor list

#### What kind of architecture would you use to achieve this?
I use *React.js* for the frontend development. Also, to build the database with json, I use *json local server*.

#### How would you design the application for testability?
Now the project is simple. So I don't use *Redux*. But if the application is further developed with massive functions, *Redux* could be introduced forthe testability. The code should be reorganized and isolated for reuse and teast.

#### There is no need to implement persistence, but how would you take that into account in the design?
In my opinion, *file system* can be used to maintain the persistence. That is, the data is stored in local files. The website can also call the value from local machine.

#### If you later decided to migrate to a microservices architecture, what kind of patterns would you use for this? No implementation needed.
Right now, I am not familiar with teh microservices, but I am willing to learn more about it.

## Demo
![Screenshot](https://github.com/andylvyp/movie4u/blob/master/Demo.png)
