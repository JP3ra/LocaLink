import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { ownerRouter } from "./routes/owner.js";
import { restaurantRouter } from "./routes/restaurant.js";
import { fashionRouter } from "./routes/fashion.js";
import { householdRouter } from "./routes/household.js";
import { salonRouter } from "./routes/salon.js";
import { policeRouter } from "./routes/policestation.js";
import { hospitalRouter } from "./routes/hospital.js";


const app = express();

app.use(express.json());
app.use(cors());

// All the api routes


app.use("/", userRouter);
app.use("/", ownerRouter);
app.use("/", restaurantRouter);
app.use("/", fashionRouter);
app.use("/", householdRouter);
app.use("/", salonRouter);
app.use("/", policeRouter);
app.use("/", hospitalRouter);

// Connecting to mongodb
const mongoURI = "mongodb+srv://jp3ra:Geospatial123@cluster0.kctj2oq.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3001, () => {
      console.log("Server started on port 3001");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

