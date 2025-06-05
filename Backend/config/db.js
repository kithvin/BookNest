import mongoose from "mongoose"; // Import mongoose to interact with MongoDB

// Define an async function to connect to the MongoDB database
const connectDB = async ()=> {
  try {

    // Event listener to log when the connection to MongoDB is successful
    mongoose.connection.on('connected', () =>
      console.log("Database Connected")
    );

    // Attempt to connect to MongoDB using the connection URI from the .env file
    // Append '/BookNest' as the database name
    await mongoose.connect(`${process.env.MONGODB_URI}/BookNest`);

  } catch (error) {
    // Log any error that occurs during the connection attempt
    console.log(error.message);
  }
};

export default connectDB;
