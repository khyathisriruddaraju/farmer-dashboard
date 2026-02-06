Farmer Dashboard – Full Stack Web Application

The Farmer Dashboard is a full-stack web application designed to provide a secure and user-friendly platform for managing farmer-related data through a modern web interface. 
The system allows users to register, log in, and perform data operations such as creating, viewing, updating, and deleting records, all backed by a reliable database and RESTful API architecture. 
This project demonstrates real-world implementation of frontend-backend integration and secure authentication workflows.

The frontend focuses on simplicity, accessibility, and clean user experience, ensuring smooth navigation between authentication pages and dashboard views. 
The backend is built using Node.js and Express.js, where APIs handle user authentication, data validation, and business logic.
MongoDB Atlas is used as the database for persistent storage, enabling efficient data management and scalability.

Security is handled using encrypted passwords and token-based authentication, ensuring safe user sessions and protected routes.
Environment variables are used to manage sensitive credentials securely.
The project follows modular coding practices with separate layers for routes, controllers, models, and configuration, making the application easy to maintain and extend.

This project strengthened my understanding of full-stack development concepts including REST APIs, database schema design, 
authentication mechanisms, environment configuration, Git version control, and deployment-ready project structuring. 
It reflects a complete end-to-end web application workflow from backend architecture to frontend usability and database integration.

Technologies Used:

Front End:
HTML, CSS, JavaScript.
Back End:
Node.js and Express.js.
Data Base:
MongoDB Atlas.

How to Run the Project:

Clone the repository:

git clone https://github.com/khyathisriruddaraju/farmer-dashboard


Backend setup:

cd backend
npm install
npm run dev


Frontend setup:

cd frontend
npm install
npm start


Make sure to create a .env file in the backend folder with your MongoDB connection string before running the server.

API Endpoints

POST /api/auth/register – Register new user

POST /api/auth/login – Login user

GET /api/users – Fetch all users

POST /api/users – Add new user

PUT /api/users/:id – Update user

DELETE /api/users/:id – Delete user

Database Schema:

User Collection

name

email

password

GitHub Repository:https://github.com/khyathisriruddaraju/farmer-dashboard


