import mongoose from "mongoose";

// Define the schema for the User collection
const userSchema = mongoose.Schema(
  {
    _id: { type: String, require: true }, // Unique identifier for the user
    username: { type: String, require: true }, // User's display name
    email: { type: String, require: true }, // User's email address
    image: { type: String, require: true }, // URL or path to the user's profile image
    role: { type: String, enum: ["user", "hotelOwner"], default: "user" }, // Role can only be 'user' or 'hotelOwner' Default role is 'user'
    recentSearchedCities: [{ type: String, require: true }], // Array of city names the user recently searched
  },
  { timestamps: true }
); // Automatically adds createdAt and updatedAt timestamps

// Create the User model using the schema
const User = mongoose.model("User", userSchema);

export default User;
