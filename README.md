![node version](https://img.shields.io/badge/node->=12.0.0-brightgreen.svg)

# 🎉 About this project

<br />

> A RESTFULL API Backend using `Node` - `Express` - `Mongoose` for the Toureasy Project contains practical examples (CRUD).

<br />

## 🏂 **Tours**

| URL                       | HTTP Verb | POST Body   | Authentication | Result                             |
| ------------------------  | --------- | ----------- | -------------- | ---------------------------------- |
| /tours                    | GET       |             |                | Return all tours                   |
| /tours/:id                | GET       |             |                | Return single tour (based on id)   |
| /tours                    | POST      | JSON String | Yes            | Create new tour                    |
| /tours/:id                | PUT       | JSON String | Yes            | Updates an existing tour           |
| /tours/:id                | DELETE    |             | Yes            | Deletes an existing tour           |
| ------------------------  | --------- | ----------- | -------------- | ---------------------------------- |
| /search/getTourBySearch   | GET       |             |                | Return all destinations by search  |
| /search/getFeaturedTours  | GET       |             |                | Return all travel featured         |
| /search/getTourCount      | GET       |             |                | Return all travel count            |

<br />

# 📚 Tech Stacks

- NodeJS
- Express
- MongoDB
- Mongoose

<br />

# 📦 Packages used

## **🔨 Utility Package**

- [x] dotenv
  - Loads environment variables from .env file
- [x] mongoose-id-validator
  - validate that ObjectID references refer to objects that actually exist in the referenced collection
- [x] mongoose-unique-validator
  - adds pre-save validation for unique fields within a Mongoose schema.

<br />

## **🚫 Security Package**

- [x] BcryptJS
  - Optimized bcrypt in plain JavaScript for NodeJS.
- [x] jsonwebtoken
  - JSON Web Token for node.js
- [x] cors
  - Node.js CORS middleware

<br />

# 💓 Show your support

This is just a personal project created for study/demonstration purpose, it may or may not be a good fit for your project(s).

Please ⭐ this repository if you like it or this project helped you!

Feel free to open issues or submit pull-requests to help me improving my work.