import nc from "next-connect";

import { createRoom, getAllRooms } from "../../../api/controllers/room";
import { dbConnect } from "../../../api/config/db";
import { onError } from "../../../api/middlewares/errors";
import { AsyncError } from "../../../api/middlewares/catchAsyncError";

dbConnect();

const handler = nc({ onError });

handler.get(AsyncError(getAllRooms));
handler.post(AsyncError(createRoom));

export default handler;
