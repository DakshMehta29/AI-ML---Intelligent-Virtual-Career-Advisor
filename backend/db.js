const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
require('dotenv').config();
const mongoURI = process.env.mongoURI;

const connectDB = async () => {
    try {

        await mongoose.connect(mongoURI
        );
        console.log("Connected to DB");

    } catch (err) {
        console.log('connection failed', err);
    }
};
connectDB();



const userSchema = new Schema({
    username: { type: String, unique: true },
    password: String,
    userId: ObjectId 
    // firstName: String,
    // lastName: String,
});
const adminSchema = new Schema({
    username: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
});
const productSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageURL: String,
    sellerId: ObjectId,
});
const purchaseSchema = new Schema({
    userId: ObjectId,
    productId: ObjectId,
});

const userModal = mongoose.model("user", userSchema);
const adminModal = mongoose.model("admin", adminSchema);
const productModal = mongoose.model("product", productSchema);
const purchaseModal = mongoose.model("purchase", purchaseSchema);


module.exports = {
    userModal,
    adminModal,
    productModal,
    purchaseModal
};