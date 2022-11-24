import { Router } from "express";
import { body } from "express-validator";
import { userController } from "../controller";
import { auth } from "../middlwares";

const router: Router = Router();

router.get("/:userId", auth, userController.getUserById);

// 전체 유저 조회
router.get("/", auth, userController.getAllUser);

// 유저 생성
router.post(
  "/",
  [
    body("name").notEmpty(),
    body("email").notEmpty(),
    body("password").isLength({ min: 6 }),
  ],
  userController.createUser
);

// 유저 정보 업데이트
router.patch("/:userId", auth, userController.updateUser);

// 유저 삭제
router.delete("/:userId", auth, userController.deleteUser);

//* 로그인 - POST api/user/signin
router.post(
  "/signin",
  [
    body("email").notEmpty(),
    body("email").isEmail(),
    body("password").notEmpty(),
    body("password").isLength({ min: 6 }),
  ],
  userController.signInUser
);

export default router;
