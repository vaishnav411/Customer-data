
import mongoose from "mongoose";
import dns from "node:dns";

// Set DNS servers
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

export default dbconnect;
