import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

interface MediaContent {
  title: string;
  image: string;
  iconImage: string;
  runningTime: number;
  watchTime: number;
  epiNum: number;
  currentNum: number;
  detail: string;
  character: string[];
  genre: string[];
  seriesDescription: string;
}

router.get("/:mediaId", (req: Request, res: Response) => {
  const content: MediaContent = {
    title: "수리남",
    image:
      "https://insopt-bucket-yeseul.s3.ap-northeast-2.amazonaws.com/surinam.jpeg",
    iconImage:
      "https://insopt-bucket-yewon.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2022-10-15+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+4.21.16.png",
    runningTime: 62,
    watchTime: 30,
    epiNum: 6,
    currentNum: 3,
    detail:
      "전요환과 구상만 사이의 파트너십을 중재하는 인구. 요환은 거래에 동의하기에 앞서 철저하게 조사를 진행한다.",
    character: ["황정민", "하정우", "박혜수"],
    genre: ["범죄 시리즈", "한국 드라마", "스릴러 시리즈"],
    seriesDescription: "긴장감 넘치는",
  };
  return res.status(200).json({
    status: 200,
    message: "수리남 조회 성공",
    data: content,
  });
});

module.exports = router;
