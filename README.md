# Class Manager

### The technologies used in creating this project are:
Node.js, ExpressJs, Sequelize ORM, and PostgreSQL

### :rocket: How to get started
- Make sure to have Git and Node.js installed on your computer
- Clone the project by running: `git clone https://https://github.com/devcareer/class-manager`
- cd into the project and run `npm install`
- create a `config.js` file in the root folder and copy the content in the config.example.js`into it.
- run `sequelize db:migrate` to migrate to the database.
- run `npm start` to start the project.
 
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
| /         | `GET`   |  Api home page                   |
| /messages   | `GET`   | Get all messages                 |
| /messages   | `POST`   | Create a message                 |
| /messages/id | `GET`   | Get a message by id              |
| /messages/id | `PUT`   | Update message|
| /messages/id | `DELETE`   | Delete message                |
| /students  | `GET`   | Get all students                 |
| /students   | `POST`   | Create a student                 |
| /students/id | `GET`   | Get a student by id              |
| /students/id | `PUT`   | Update student             |
| /students/id | `DELETE`   | Delete student                |
| /teacher   | `GET`   | Get all teachers                 |
| /teacher   | `POST`   | Create a teacher                 |
| /teacher/id | `GET`   | Get a teacher by id              |
| /teacher/id | `PUT`   | Update teacher              |
| /teacher/id | `DELETE`   | Delete teacher                |
| /assignment  | `GET`   | Get all assignment                 |
| /assignment/id | `GET`   | Get a assignment with id              |
| /assignment/id | `PUT`   | Update assignment              |
| /assignment/id | `DELETE`   | Delete assignment               |

<hr>


👤 **Authors**:

| Github  | Linkedin |
| ------------- | ------------- |
| [@bellogo](https://github.com/bellogo)  | [Ufuoma Ogodo](https://ng.linkedin.com/in/ufuoma-ogodo)  |
| [@judyseyram](https://github.com/JudySeyram)  | [Judith Amegbe](https://gh.linkedin.com/in/amegbe-judith-5b881811a)  |
| [@hazeem01](https://github.com/Hazeem01) | [Adenekan Abdulhazeem](https://www.linkedin.com/in/abdulhazeem-adenekan) |
| [@talktonok](https://github.com/talktonok) | [Mansur Ibrahim Nok](https://www.linkedin.com/in/mansuribrahimnok) |
| [@TijanAyo](https://github.com/TijanAyo) | [Tijani Ayomide](https://www.linkedin.com/in/tijanayo) |
| [@Ekemiben](https://github.com/ekemiben) | [Ekemini Ben](https://www.linkedin.com/in/ekemini-ben) |