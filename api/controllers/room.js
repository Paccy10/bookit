import Room from "../models/room";
import ErrorHandler from "../utils/errorHandler";
import APIFeatures from "../utils/apiFeature";

export const getAllRooms = async (req, res) => {
  const limit = 4;
  const roomsCount = await Room.countDocuments();

  const apiFeatures = new APIFeatures(Room.find(), req.query).search().filter();

  let rooms = await apiFeatures.query;
  let filteredRoomsCount = rooms.length;

  apiFeatures.paginate(limit);
  rooms = await apiFeatures.query.clone();

  res.status(200).json({
    success: true,
    roomsCount,
    limit,
    filteredRoomsCount,
    rooms,
  });
};

export const createRoom = async (req, res) => {
  const room = await Room.create(req.body);

  res.status(201).json({
    success: true,
    room,
  });
};

export const getOneRoom = async (req, res, next) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler("Room not found", 404));
  }

  res.status(200).json({
    success: true,
    room,
  });
};

export const updateRoom = async (req, res, next) => {
  let room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler("Room not found", 404));
  }

  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    room,
  });
};

export const deleteRoom = async (req, res, next) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler("Room not found", 404));
  }

  await room.remove();

  res.status(200).json({
    success: true,
    message: "Room deleted successfully",
  });
};
