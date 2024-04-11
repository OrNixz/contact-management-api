# User API Spec

## Register User API

Endpoint: POST /api/users

Request Body:

```
{
    "username": "ornixz",
    "password": "rahasia",
    "name": "Afif Ramadhan"
}
```

Response Body Success:

```
{
    "data": {
        "username": "ornixz",
        "name": "Afif Ramadhan"
    },
}
```

Response Body Error:

```
{
    "errors": "The username is already taken"
}
```

## Login User API

Endpoint: POST /api/users/login

Request Body: 
```
{
    "username": "ornixz",
    "password": "rahasia"
}
```

Response Body Success:
```
{
    "data": {
        "token": "unique-token"
    }
}
```

Response Body Error:
```
{
    "errors": "Invalid username or password"
}
```

## Update User API

Endpoint: PATCH /api/users/current

Headers:
- Authorization: token

Request Body:
```
{
    "name": "Kurosaki Ichigo", // optional
    "password": "password" // optional
}
```

Response Body Success:
```
{
    "data": {
        "username": "ornixz",
        "name": "Kurosaki Ichigo"
    }
}
```

Response Body Error:
```
{
    "errors": "The maximum length of a username is 100"
}
```

## Get User API

Endpoint: GET /api/users/current

Header:
- Authorization: token

Response Body Success:
```
{
    "data": {
        "username": "ornixz",
        "name": "Afif Ramadhan"
    }
}
```

Response Body Error:
```
{
    "errors: "Unauthorized access"
}
```

## Logout User API

Endpoint: DELETE /api/users/logout

Header:
- Authorization: token

Response Body Success:
```
{
    "data": "Ok"
}
```

Response Body Error:
```
{
    "errors": "Unauthorized access"
}
```