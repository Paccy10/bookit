import nc from "next-connect";

import { register } from "../../../api/controllers/auth";
import { dbConnect } from "../../../api/config/db";
import { onError } from "../../../api/middlewares/errors";
import { AsyncError } from "../../../api/middlewares/catchAsyncError";

dbConnect();

const handler = nc({ onError });

handler.post(AsyncError(register));

export default handler;
