import { Router } from "express";
import userRouter from "./userRouter";
import netflixRouter from "./netflixRouter";

const router: Router = Router();

router.use("/user", userRouter);
router.use("/netflix", netflixRouter);

export default router;
