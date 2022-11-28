# subscriber-task

User suscriber Task.

- For the Documentation, go here: https://documenter.getpostman.com/view/14851925/2s8YmULzWy

### The technologies used in creating this project are:

Node.js, ExpressJs, Sequelize ORM, and MySQL

### :rocket: How to get started

- Make sure to have Git and Node.js installed on your computer
- Clone the project by running: `git clone https://github.com/bellogo/subscriber-task.git`
- cd into the project and run `npm install`
- create a `.env` fill in the contents in the `.env.sample` file to it.
- run `npm run migration` to migrate the database.
- run `npm run seeder` to run seeds.
- run `npm run dev` to start the project.

These are the HTTP response codes used in this project:

| Status Codes | Indication                                                                                            |
|   ---        | ---                                                                                                   |
|  `200`       | This `OK` status code indicates that a request has succeeded                                          |
|  `400`       | This `bad request error` status code indicates that the request sent to the server is incorrect       |
|  `500`       | This `internal server error` status code indicates that something has gone wrong on the web server           |

<hr>

The routes featured in this project:

| API routes(url)       | Method   | Description                                         |
| ---                   | ---      | ---                                                 |
| /         | `GET`   |  Personal info                    |
| /users   | `GET`   | Get all users with subscriptions                  |
|  /users/123/friends?order_by=id&order_type=desc       | `GET`   | Get an ordered list of friends                                         |
|  /max-following                   |  `GET`    | Get top 5 users with followings                                                 |
| /not-following         | `GET`   |  Get users with zero followings                    |         |
| /suscribe         | `POST`   |  Subscribe to a user                    |         |




<hr>


👤 **Author**

- Github: 
- Linkedin: 

