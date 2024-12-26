# Ride Management API

   ## Overview
   This is a simple API for managing users and rides. The API includes endpoints for:
   - Registering users
   - Listing rides
   - Fetching ride details

   ## Tech Stack
   - Node.js
   - Express.js
   - MongoDB
   - Mongoose

   ## Setup Instructions

   ### Prerequisites
   - Node.js and npm installed on your system.
   - MongoDB (local or cloud).

   ### Steps
   1. Clone the repository:
      ```bash
      git clone https://github.com/Kimforee/FeryAPI
      cd FeryAPI
      ```
   2. Install dependencies:
      ```bash
      npm install
      npm install mongoose
      ```
   3. Set up the `.env` file:
      - Create a `.env` file in the root directory.
      - Add the following variables:
        ```
        MONGO_URI=mongodb://localhost:27017/rides
        PORT=5000
        ```
   4. Start the server:
      ```bash
      npm run dev
      ```
      **Response:**
      ```bash
      > ride-api@1.0.0 dev
      > nodemon server.js 
      [nodemon] 3.1.9
      [nodemon] to restart at any time, enter `rs`  
      [nodemon] watching path(s): *.*
      [nodemon] watching extensions: js,mjs,cjs,json
      [nodemon] starting `node server.js`
      Server running on port 5000
      MongoDB Connected: ride-shard-00-01.chhcg.mongodb.net
      ```

   ## API Endpoints

   ### 1. Register User
   **Endpoint:** `POST /api/users/register`  
   **Request Body:**  
   ```json
   {
       "username": "testuser2",
       "password": "securepassword"
   }
   ```  
   **Response:**  
   ![image](https://github.com/user-attachments/assets/a791cea3-3ab8-43ee-85d3-71cab5b9990c)

   ### 2. List Rides
   **Endpoint:** `GET /api/rides` 
   **Response:**
   
   ![image](https://github.com/user-attachments/assets/925b9696-a4f7-4965-8691-963114f07e68)

   ### 3. Ride Details
   **Endpoint:** `GET /api/rides/:id`  
   **Response (Valid ID):**  
   ![image](https://github.com/user-attachments/assets/670fca7e-7664-484f-bfa3-3d66b62af428)
   
   **Response (Invalid ID):**
   
   ![image](https://github.com/user-attachments/assets/479c0fbb-f5f3-4eab-85fe-ab859f31a74b)


   ## Testing
   - Use **Postman** or **cURL** to test the endpoints.
   - Ensure MongoDB is running before testing.

   ## Directory Structure
   ```
   ├── controllers/
   │   ├── rideController.js
   │   ├── userController.js
   ├── models/
   │   └── User.js
   ├── routes/
   │   ├── rideRoutes.js
   │   ├── userRoutes.js
   ├── utils/
   │   └── mockRides.js
   ├── server.js
   ├── package.json
   ├── .env
   ├── README.md
   ```
