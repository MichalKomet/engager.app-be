# TODO App (Backend)

This repository contains a simple Node.js/Express application for managing a TODO list. Below is an overview of how to configure, run, and interact with the API.
Frontend repository of this application can be found on [GitHub](https://github.com/MichalKomet/engager.app-fe)

## Initial Setup

1. **Clone or download** this repository
2. **Create a .env file** based on .env.example, providing necessary variables, for example:

```dotenv
SERVER_PORT=7005

PG_USER=myuser
PG_NAME=mydb
PG_PASSWORD=mypassword
```

-	**SERVER_PORT** define where the server will listen.
-	**PG_USER**, **PG_NAME**, and **PG_PASSWORD** are credentials for the **PostgreSQL** database.


3.  **Install dependencies**

    From the project root, run:
```bash
  npm install
```

4.  **Build and Run via Docker** (optional but recommended):


```bash
  docker-compose --env-file .env up
```

Or run directly with Node:
```bash
  npm run start
```

The backend will be available at http://localhost:7005 (or wherever you configured SERVER_PORT).

## Application Overview

The application provides a REST-style API for managing TODO items.
Each **TODO item** has:

-	**name** (string) – required
-	**completionDate** (date, null) – optional
-	**dueDate** (date, null) – optional

•	**Endpoints**:
-	GET /items – retrieve all TODOs

     • By default, both completed and not-completed items may be returned (depending on your front-end logic).
     • You can optionally filter or hide completed items on the client side.

```json
[
  {
    "id": 1,
    "name": "Clean the carpet",
    "dueDate": "2024-04-18",
    "completionDate": null
  },
  {
    "id": 2,
    "name": "Dust the furniture",
    "dueDate": "2024-04-10",
    "completionDate": "2024-05-01"
  }
]
```
-	GET /items/:id – Retrieves a single TODO item by its id

*Response Example*
```json
{
  "id": 2,
  "name": "Dust the furniture",
  "dueDate": "2024-04-10",
  "completionDate": "2024-05-01"
}
```
If the item does not exist, a 404 error is returned in JSON format.

-	POST /items – create a new TODO

*Request Body (JSON) Example*
```json
{
  "name": "Clean windows",
  "dueDate": "2024-06-15"
}
```

*Response Example*
```json
{
  "id": 3,
  "name": "Clean windows",
  "dueDate": "2024-06-15",
  "completionDate": null
}
```

• Returns a 201 status code on success.\
• If required fields are missing or invalid, a 400 status code is returned.

-	PUT /items/:id – update an existing TODO

*Request Body (JSON) Example*
```json
{
  "name": "Clean windows thoroughly",
  "dueDate": "2024-06-30",
  "completionDate": "2024-06-30"
}
```

*Response Example*
```json
{
  "id": 3,
  "name": "Clean windows thoroughly",
  "dueDate": "2024-06-30",
  "completionDate": "2024-06-30"
}
```

• If the item does not exist, a 404 is returned.\
• If the data is invalid, returns a 400 with validation details.

-	DELETE /items/:id – remove a TODO

*Response*
```json
{
  "deletedId": 3
}
```

• If the item does not exist, a 404 is returned.

## Error Handling

If an error occurs (e.g., invalid data, item not found), the server returns a JSON response with an appropriate HTTP status (such as 400 or 404). For example:

```json
{
  "success": false,
  "message": "Item not found"
}
```

For validation errors, the response may include an errors array with more details:
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    { "msg": "Name is required", "param": "name", "location": "body" }
  ]
}
```

## Notes

• All data is persisted in the configured PostgreSQL database.

• If you change variables in .env, ensure you rebuild and restart with:
```bash
  docker-compose --env-file .env up
```

• The base URL defaults to http://localhost:<SERVER_PORT> as specified in your .env file.