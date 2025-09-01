import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://scannserve:121411@cluster0.joiznfu.mongodb.net/ScanNServe')
    }