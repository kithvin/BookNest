import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res) => {
  try {
    // Create a Svix Webhook instance using the Clerk webhook secret from environment variables

    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // Extract Svix-specific headers from the incoming request for verification

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    // Verify the webhook payload using Svix to ensure authenticity and integrity

    await whook.verify(JSON.stringify(req.body), headers);

    // Destructure the 'data' and 'type' properties from the webhook payloa

    const { data, type } = req.body;

    // Prepare user data object to be saved or updated in the database

    const userData = {
      _id: data.id,
      email: data.email_addresses[0].email_address,
      username: data.first_name + "" + data.last_name, // Combine first and last name
      image: data.image_url,
    };

    // Handle different webhook event types using a switch statement

    switch (type) {
      // Create a new user document in the database
      case "user.created": {
        await User.create(userData);
        break;
      }

      case "user.updated": {
        // Update existing user document by ID with new data
        await User.findByIdAndUpdate(data.id, userData);
        break;
      }

      case "user.deleted": {
        // Delete the user document from the database based on ID
        await User.findByIdAndDelete(data.id);
        break;
      }

      default:
        // Ignore any unhandled event types
        break;
    }

    // Send a success response back to the webhook sender
    res.json({ success: true, message: "Webhook Recieved" });
  } catch (error) {
    // Log any errors that occur during processing
    console.log(error.message);
    // Send an error response back to the webhook sender
    res.json({success: false, message: error.message});
  }
}

export default clerkWebhooks;
