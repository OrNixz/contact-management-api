# Address API Spec

## Create Address API

Endpoint: POST /api/contacts/:contactId/addresses

Headers:

- Authorization: token

Request Body:

```
{
    "street": "2 Chome-1-1 Nishiikebukuro",
    "city": "Toshima",
    "province": "Tokyo",
    "country": "Japan",
    "postal_code": "171-8507"
}
```

Response Body Success:

```
{
    "data": {
        "id": 1,
        "street": "2 Chome-1-1 Nishiikebukuro",
        "city": "Toshima",
        "province": "Tokyo",
        "country": "Japan",
        "postal_code": "171-8507"
    }
}
```

Response Body Error:

```
{
    "errors": "Country field is required"
}
```

## Update Address API

Endpoint: PUT /api/contacts/:contactId/addresses/:addressId

Headers:

- Authorization: token

Request Body:

```
{
    "street": "1 Chome-1-1 Yurakucho",
    "city": "Chiyoda",
    "province": "Tokyo",
    "country": "Japan",
    "postal_code": "100-0006"
}
```

Response Body Success:

```
{
    "data": {
        "id": 1,
        "street": "1 Chome-1-1 Yurakucho",
        "city": "Chiyoda",
        "province": "Tokyo",
        "country": "Japan",
        "postal_code": "100-0006"
    }
}
```

Response Body Error:

```
{
    "errors": "Country field is required"
}
```

## Get Address API

Endpoint: GET /api/contacts/:contactId/addresses/:addressId

Headers:

- Authorization: token

Response Body Success:

```
{
    "data": {
        "id": 1,
        "street": "2 Chome-1-1 Nishiikebukuro",
        "city": "Toshima",
        "province": "Tokyo",
        "country": "Japan",
        "postal_code": "171-8507"
    }
}
```

Response Body Error:

```
{
    "errors": "Contact is not found"
}
```

## List Addresses API

Endpoint: GET /api/contacts/:contactId/addresses

Headers:

- Authorization: token

Response Body Success:

```
{
    "data": [
        {
            "id": 1,
            "street": "2 Chome-1-1 Nishiikebukuro",
            "city": "Toshima",
            "province": "Tokyo",
            "country": "Japan",
            "postal_code": "171-8507"
        },
        {
            "id": 1,
            "street": "1 Chome-1-1 Yurakucho",
            "city": "Chiyoda",
            "province": "Tokyo",
            "country": "Japan",
            "postal_code": "100-0006"
        }
    ]
}
```

Response Body Error:

```
{
    "errors": "Contact is not found"
}
```

## Remove Address API

Endpoint: DELETE /api/contacts/:contactId/addresses/:addressId

Headers:

- Authorization: token

Response Body Success:

```
{
    "data": "The address has been successfully deleted"
}
```

Response Body Error:

```
{
    "errors": "Address is not found"
}
```
