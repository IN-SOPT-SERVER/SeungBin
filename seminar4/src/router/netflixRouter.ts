import { Router } from "express";
import { netflixController } from "../controller";

const router: Router = Router();

router.get("/:netflixId", netflixController.getnetflixMovieById);

export default router;
