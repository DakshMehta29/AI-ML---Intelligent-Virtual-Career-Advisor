const express = require("express");
const {userRouter} = require("./routes/user.js");

const app = express();
const cors = require("cors");
app.use(cors()); // Replace with your frontend's URL

app.use(express.json());

app.use("/api/v1/user",userRouter);
    



app.listen(3001);