const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the room name"],
    trim: true,
    maxlength: [100, "Room name can not exceed 100 characters"],
  },
  pricePerNight: {
    type: Number,
    required: [true, "Please enter the room price per night"],
    maxlength: [4, "Room name can not exceed 4 characters"],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Please enter the room description"],
  },
  address: {
    type: String,
    required: [true, "Please enter the room address"],
  },
  guestCapacity: {
    type: Number,
    required: [true, "Please enter the room guest capacity"],
  },
  numOfBeds: {
    type: Number,
    required: [true, "Please enter the room number of beds"],
  },
  internet: {
    type: Boolean,
    default: false,
  },
  breakfast: {
    type: Boolean,
    default: false,
  },
  airConditioned: {
    type: Boolean,
    default: false,
  },
  petsAllowed: {
    type: Boolean,
    default: false,
  },
  roomCleaning: {
    type: Boolean,
    default: false,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter the room category"],
    enum: {
      values: ["King", "Single", "Twins"],
      message: "Please select the correct room category",
    },
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.Room || mongoose.model("Room", roomSchema);
