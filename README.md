
<h1 align="center">Contact Management API (ExpressJS Edition)</h1>

## Project Demo  📷
<table>
  <tr>
    <td>
      <img src="https://github.com/OrNixz/contact-management-api/blob/main/images/Screenshot%20(1).png" alt="1">
    </td>
    <td>
      <img src="https://github.com/OrNixz/contact-management-api/blob/main/images/Screenshot%20(2).png" alt="2">
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/OrNixz/contact-management-api/blob/main/images/Screenshot%20(3).png" alt="3">
    </td>
    <td>
      <img src="https://github.com/OrNixz/contact-management-api/blob/main/images/Screenshot%20(4).png" alt="4">
    </td>
  </tr>
</table>

## Description 📖
Designed for simplicity, this API, which I learned about by watching tutorials on YouTube, enables managing contacts and their related addresses. It grants users the ability to perform basic CRUD operations on both contacts and addresses while ensuring secure user authentication and authorization.

## Features ✨
- User registration, login, and logout
- Create, read, update, and delete contacts
- Create, read, update, and delete addresses for each contact
- Search contacts by name, email, and phone number
- Pagination support for contact search results

## Prerequisites System ⚙️
- Node.js (v14 or later)
- MySQL database (or any other database supported by Prisma)

## Technologies Used 🛠️
- Node.js
- Express.js
- Prisma (ORM)
- bcrypt (for password hashing)
- Joi (for input validation)
- uuid (for generating unique identifiers)
- Winston (for logging)
- Jest (for testing)

## Setup 🚀
1. Clone the repository:
```
git clone https://github.com/OrNixz/contact-management-api.git
```
2. Install dependencies:
```
cd contact-management-api
npm install
```
3. Set up the database:
- Create a MySQL database for the project.
- Rename the `.env.example` file to `.env` and update the `DATABASE_URL` with your database connection details.
4.Run database migrations:
```
npx prisma migrate dev
```
5. Start the server:
```
node src/main.js
```

## API Endpoints 🌐

| Endpoint                                      | Method | Description                                   |
|-----------------------------------------------|--------|-----------------------------------------------|
| /api/users                                    | POST   | Register a new user                           |
| /api/users/login                              | POST   | Login and get an access token                 |
| /api/users/current                            | GET    | Get the current user's information            |
| /api/users/current                            | PATCH  | Update the current user's information         |
| /api/users/logout                             | DELETE | Logout the current user                       |
| /api/contacts                                 | POST   | Create a new contact                          |
| /api/contacts/:contactId                      | GET    | Get a specific contact                        |
| /api/contacts/:contactId                      | PUT    | Update a contact                              |
| /api/contacts/:contactId                      | DELETE | Delete a contact                              |
| /api/contacts                                 | GET    | Search contacts with pagination and filtering |
| /api/contacts/:contactId/addresses            | POST   | Create a new address for a contact            |
| /api/contacts/:contactId/addresses/:addressId | GET    | Get a specific address for a contact          |
| /api/contacts/:contactId/addresses/:addressId | PUT    | Update an address for a contact               |
| /api/contacts/:contactId/addresses/:addressId | DELETE | Delete an address for a contact               |
| /api/contacts/:contactId/addresses/           | GET    | List all addresses for a contact              |

## Testing ✅
This project includes unit tests written using Jest. To run the tests, execute the following command:
```
npm test
```

## Contributors 💻
- [Afif Ramadhan](https://github.com/OrNixz)

## License ⚖️
This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code according to your needs.
