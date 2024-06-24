import mongoose from "mongoose";

const URI = process.env.MONGO_URI;

const connectDB = async () => {
    let cachedDB = null;

    if (cachedDB) {
        return cachedDB;
    } else {
        const newDB = await mongoose.connect(URI);
        cachedDB = newDB;
        return newDB;
    }

};

export default connectDB;