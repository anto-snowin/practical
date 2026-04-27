# Node.js MVC Login System

A simple user authentication system built with Node.js, Express, and MongoDB using the MVC (Model-View-Controller) architecture.

## Features

- User Registration
- User Login
- MVC Architecture
- Connects to local MongoDB instance (`mvcDB`)

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Middleware:** Body-Parser
- **Frontend:** Basic HTML

## Project Structure

```
├── controller/
│   └── authcontroller.js    # Handles login logic
├── models/
│   └── usermodel.js         # Mongoose User Schema
├── view/
│   └── login.html           # Frontend HTML page
├── app.js                   # Application entry point
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

## Prerequisites

Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (Make sure the MongoDB service is running locally on the default port `27017`)

## Installation

1. **Clone the repository:**
   ```bash
   git clone <your-github-repo-url>
   cd practical
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start MongoDB:**
   Make sure your local MongoDB instance is running. The app will automatically connect to `mongodb://127.0.0.1:27017/mvcDB` and create the `mvcDB` database if it doesn't exist.

## Running the Application

Start the Express server:

```bash
node app.js
```

The server will start on port 3000. You can view the application by navigating to:
`http://localhost:3000`

## API Endpoints

- `GET /` - Renders the login HTML page.
- `POST /register` - Creates a new user. Expects `username` and `password` in the request body.
- `POST /login` - Authenticates a user. Expects `username` and `password` in the request body.
