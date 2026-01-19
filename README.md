 SecureAuth API

A production ready authentication and authorization API built with Node.js, Express, MongoDB, and JWT, featuring role based access control and admin managed user permissions.

 key Features

User registration and login
Secure password hashing with  bcrypt
JWT based authentication (access & refresh tokens)
Protected user routes
Role based access control (`user`, `admin`)
Admin only endpoints
Admin controlled user role promotion
MongoDB persistence with Mongoose
Clean backend architecture

Tech Stack i used

Node.js
Express.js
MongoDB
Mongoose
JSON Web Token (JWT)
bcrypt
dotenv

to get started
install dependencies - npm install
start mongodb -  enter mongod in terminal
run server - npm run dev 

   expected output should me server runninh on port 5001 and mongodb connected

API ENDPOINTS.
for authentification 
POST   /api/v1/auth/register
POST   /api/v1/auth/login

for the user routes
GET /api/v1/users/me
header required to access is authorization = bearer accesstoken

for the admin routes 
GET    /api/v1/admin/users
PATCH  /api/v1/admin/users/:id/role

for the patch body fro admin to authorise another admin or create another admin 
{
  "role": "admin"
}


to register a user 
POST http://localhost:5001/api/v1/auth/register

to login 
POST http://localhost:5001/api/v1/auth/login

to get already logged users 
GET http://localhost:5001/api/v1/users/me


to promote users to admin 
PATCH http://localhost:5001/api/v1/admin/users/<USER_ID>/role



NOTE:

All protected routes require a valid JWT access token
Tokens must be sent via request headers
Only admin users can access admin routes