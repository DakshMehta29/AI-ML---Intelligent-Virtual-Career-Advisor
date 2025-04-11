const express = require("express");
const {userRouter} = require("./routes/user.js");
const { quizRouter } = require("./routes/quiz.js")
const app = express();
const cors = require("cors");
app.use(cors()); // Replace with your frontend's URL

app.use(express.json());

app.use("/api/v1/user",userRouter);
app.use("/api/v1/quiz",quizRouter);



app.listen(3001);