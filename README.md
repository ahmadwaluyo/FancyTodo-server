# FancyTodo-server
- baseurl: localhost://3000

## Create TODO
Add TODO list and return its value from JSON

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
        { id : 12, title : Buy Coffee, description: I'm thirsty, status:false, due_date: 2020-03-15T00:00:00.000Z, updatedAt: 2020-03-02T09:01:21.377Z, createdAt: 2020-03-02T09:01:21.377Z }

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
Add TODO list and return its value from JSON

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
        { id : 12, title : Buy Coffee, description: I'm thirsty, status:false, due_date: 2020-03-15T00:00:00.000Z, updatedAt: 2020-03-02T09:01:21.377Z, createdAt: 2020-03-02T09:01:21.377Z }

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