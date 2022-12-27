import express, { response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/user.model.js";
import jwt from "jsonwebtoken";



import routes from "./routes/routes.js";

dotenv.config();

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(cors());

const URI = process.env.MONGODB_URL;
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(URI, connectionParams)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

app.use("/posts", routes);

app.post("/api/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      const token = jwt.sign(
        {
          email: user.email,
          name: user.name,
        },
        "secret123"
      );
      return res.json({
        status: 200,
        user: token,
        email: user.email,
        name: user.name,
      });
    } else {
      return res.json({ status: 404, user: false });
    }
  } catch (err) {}
});

app.post("/api/register", async (req, res) => {
  // console.log(req.body);
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    await user.save();
    res.json({ status: "Ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server Started on 5000");
});
