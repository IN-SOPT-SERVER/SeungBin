// src/api/user.ts

import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const members: Object[] = [
    {
      name: "권세훈",
      group: "ob",
    },
    {
      name: "최승빈",
      group: "ob",
    },
    {
      name: "소예원",
      group: "yb",
    },
    {
      name: "조예슬",
      group: "yb",
    },
    {
      name: "김민욱",
      group: "ob",
    },
    {
      name: "김소현",
      group: "ob",
    },
  ];
  return res.status(200).json({
    status: 200,
    message: "멤버 조회 성공",
    data: members,
  });
});

module.exports = router;
