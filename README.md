Node.js API for User Authentication
This repository contains a Node.js API for user authentication built using Express.js and MySQL. The API provides endpoints for user registration and login, employing bcrypt for password hashing and JWT for secure authentication.

Features
•	User Registration: Register new users by providing a unique username, email, and password.
•	User Login: Authenticate users with their username and password, providing access to protected resources.
•	Password Hashing: Securely hash user passwords using bcrypt to ensure confidentiality.
•	Error Handling: Implement robust error handling for database operations and user authentication.
•	Database Connectivity: Connect the API to a MySQL database for storing user data securely.

Setup
•	Clone the Repository: Clone this repository to your local machine using git clone.
•	Install Dependencies: Navigate to the project directory and install dependencies using npm install.
•	Database Configuration: Configure your MySQL database connection details in the db.js file.
•	Start the Server: Run the server using npm start or node app.js.

API Endpoints
•	POST /api/register: Register a new user by providing a JSON object with username, email, and password fields.
•	POST /api/login: Authenticate a user by providing a JSON object with username and password fields.

Technologies Used
•	Node.js: A JavaScript runtime for building server-side applications.
•	Express.js: A web application framework for Node.js, used for building the API endpoints.
•	MySQL: A relational database management system used for storing user data.
•	bcrypt: A library for hashing passwords securely.
•	jsonwebtoken (JWT): A library for creating JSON Web Tokens for user authentication.

Contributing
•	Contributions are welcome! If you'd like to contribute to this project, please fork the repository, make your changes, and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.
