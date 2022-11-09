import { Router } from "express";
import { netflixController } from "../controller";

const router: Router = Router();

router.get("/:netflixId", netflixController.getnetflixMovieById);

// 영화 생성
router.post("/", netflixController.createnetflixMovie);

// 전체 영화 조회
router.get("/", netflixController.getAllnetflixMovie);

export default router;
