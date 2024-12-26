const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;

// const { MongoClient } = require("mongodb");
// require('dotenv').config();

// const connectDB = async () => {
//     const client = new MongoClient(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });

//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
//         console.log("MongoDB Connected");

//         // // Optional: Access a database and collection
//         // const database = client.db("test"); // Replace "test" with your database name
//         // const collection = database.collection("example"); // Replace "example" with your collection name

//         // // Example operation (Optional)
//         // const document = await collection.findOne({});
//         // console.log("Sample Document:", document);

//     } catch (error) {
//         console.error(`Error: ${error.message}`);
//         process.exit(1);
//     } finally {
//         // Close the connection after the operations are complete
//         await client.close();
//     }
// };

// module.exports = connectDB;
