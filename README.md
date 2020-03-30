# FancyTodo-server
- baseurl: localhost://3000

## Create TODO
Add TODO list and return its value from data JSON

- ### URL

    /todos
- ### Method

    POST
- ### URL Params

    ### Required:
        none
    ### Optional
        none
- ### Data Params
    id = [integer], title = [string], description = [string], status = [boolean], due_date = [date], createdAt = [date], updatedAt = [date]

- ### Success Response

    - #### Code: 
        201
    - #### Content: 
        {
		"id": 2,
		"title": "Menyapu",
		"description": "Oke",
		"status": false,
		"due_date": "2020-04-02T09:01:21.377Z"
	    }

- ### Error Response:

    - #### Code: 400
        validation Error
    - #### Content: 
        { error : "title must be filled" }
    #### OR

    - #### Code: 500
        Internal Server Error
    - #### Content:
        none


## SHOW TODO list
Return all todos lists from data JSON

- ### URL

    /todos
- ### Method

    GET
- ### URL Params

    ### Required:
        none
    ### Optional
        none
- ### Data Params
    id = [integer], title = [string], description = [string], status = [boolean], due_date = [date], createdAt = [date], updatedAt = [date]

- ### Success Response

    - #### Code: 
        200
    - #### Content: 
        {
        "id": 1,
        "title": "Memancing",
        "description": "Oke Test",
        "status": false,
        "due_date": "2020-04-02T09:01:21.377Z",
        "createdAt": "2020-03-30T11:39:58.936Z",
        "updatedAt": "2020-03-30T12:01:06.745Z"
        },

- ### Error Response:

    - #### Code: 400
        validation Error
    - #### Content: 
        { error : "title must be filled" }
    #### OR

    - #### Code: 500
        Internal Server Error
    - #### Content:
        none

## SHOW Todo by ID
Returns json data by id.

- ## URL

    /todos

- ## Method:

    GET

- ## URL Params

- ### Required:

    - id=[integer]

- ### Data Params

    None

- ### Success Response:

    - #### Code: 200
    - #### Content: 
        { id: 2, title: Buy Coffee, description: I'm thirsty, status: false, due_date: 2020-03-15T00:00:00.000Z, createdAt: 2020-03-02T09:01:21.377Z, updatedAt: 2020-03-02T09:01:21.377Z }

- ### Error Response:

    - #### Code: 404 NOT FOUND
    - #### Content: 
        { error : "not found" }
    #### OR

    - #### Code: 500
        Internal Server Error
    - #### Content:
        none

## UPDATE Todo by ID
Updates a todo by id and returns json data.

- ## URL

    /todos

- ## Method:

    PUT

- ## URL Params

- ### Required:

    - id=[integer]

- ### Data Params

    title=[string], description=[string], status=[boolean], due_date=[date]

- ### Success Response:

    - #### Code: 200
    - #### Content: 
        { id: 2, title: Buy Coffee, description: I'm thirsty, status: false, due_date: 2020-03-15T00:00:00.000Z, createdAt: 2020-03-02T09:01:21.377Z, updatedAt: 2020-03-02T09:01:21.377Z }

- ### Error Response:

    - #### Code: 404 NOT FOUND
    - #### Content: 
        { error : "not found" }
    #### OR

    - #### Code: 500
        Internal Server Error
    - #### Content:
        none

## DELETE Todo by ID
Delete a todo by id and returns json data.

- ## URL

    /todos

- ## Method:

    DELETE

- ## URL Params

- ### Required:

    - id=[integer]

- ### Data Params

    none

- ### Success Response:

    - #### Code: 200
    - #### Content: 
        { id: 2, title: Buy Coffee, description: I'm thirsty, status: false, due_date: 2020-03-15T00:00:00.000Z, createdAt: 2020-03-02T09:01:21.377Z, updatedAt: 2020-03-02T09:01:21.377Z }

- ### Error Response:

    - #### Code: 404 NOT FOUND
    - #### Content: 
        { error : "not found" }
    #### OR

    - #### Code: 500
        Internal Server Error
    - #### Content:
        none
