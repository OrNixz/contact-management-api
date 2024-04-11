# Contact API Spec

## Create Contact API

Endpoint: POST /api/contacts

Headers:

- Authorization: token

Request Body:

```
{
    "first_name": "Afif",
    "last_name": "Ramadhan",
    "email": "ramadhanafif172@gmail.com",
    "phone": "081209876543"
}
```

Response Body Success:

```
{
    "data": {
        "id": 1,
        "first_name": "Afif",
        "last_name": "Ramadhan",
        "email": "ramadhanafif172@gmail.com",
        "phone": "081209876543"
    }
}
```

Response Body Error:

```
{
    "errors": "Invalid email format"
}
```

## Update Contact API

Endpoint: PUT /api/contacts/:id

Headers:

- Authorization: token

Request Body:

```
{
    "first_name": "Kurosaki",
    "last_name": "Ichigo",
    "email": "ichigoo@gmail.com",
    "phone": "081212345678"
}
```

Response Body Success:

```
{
    "data": {
        "id": 1,
        "first_name": "Kurosaki",
        "last_name": "Ichigo",
        "email": "ichigoo@gmail.com",
        "phone": "081212345678"
    }
}
```

Response Body Error:

```
{
    "errors": "Invalid email format"
}
```

## Get Contact API

Endpoint: GET /api/contacts/:id

Headers:

- Authorization: token

Response Body Success:

```
{
    "data": {
        "id": 1,
        "first_name": "Afif",
        "last_name": "Ramadhan",
        "email": "ramadhanafif172@gmail.com",
        "phone": "081209876543"
    }
}
```

Response Body Error:

```
{
    "errors": "Contact is not found"
}
```

## Search Contact API

Endpoint: GET /api/contacts

Headers:

- Authorization: token

Query Params:

- name: Search by first_name or last_name, using like, // optional
- email: Search by email using like, // optional
- phone: Search by phone using like, // optional
- page: number of page, default 1
- size: size per page, default 10

Response Body Success:

```
{
    "data": [
        {
            "id": 1,
            "first_name": "Afif",
            "last_name": "Ramadhan",
            "email": "ramadhanafif172@gmail.com",
            "phone": "081209876543"
        },
        {
            "id": 2,
            "first_name": "Kurosaki",
            "last_name": "Ichigo",
            "email": "ichigoo@gmail.com",
            "phone": "081212345678"
        }
    ],
    "paging": {
        "page": 1,
        "total_page": 3,
        "total_items": 30
    }
}
```

Response Body Error:

## Remove Contact API

Endpoint: DELETE /api/contacts/:id

Headers:

- Authorization: token

Response Body Success:

```
{
    "data": "The contact has been successfully deleted"
}
```

Response Body Error:

```
{
    "errors": "Contact is not found"
}
```
