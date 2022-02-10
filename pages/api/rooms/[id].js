import nc from "next-connect";

import {
  getOneRoom,
  updateRoom,
  deleteRoom,
} from "../../../api/controllers/room";
import { dbConnect } from "../../../api/config/db";
import { onError } from "../../../api/middlewares/errors";
import { AsyncError } from "../../../api/middlewares/catchAsyncError";

dbConnect();

const handler = nc({ onError });

handler.get(AsyncError(getOneRoom));
handler.put(AsyncError(updateRoom));
handler.delete(AsyncError(deleteRoom));

export default handler;
