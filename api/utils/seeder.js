const mongoose = require("mongoose");
const Room = require("../models/room");
const rooms = require("../data/rooms");

mongoose
  .connect("mongodb://localhost:27017/bookit", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to local database"));

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("Rooms are deleted.");

    await Room.insertMany(rooms);
    console.log("All rooms are inserted.");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedRooms();
