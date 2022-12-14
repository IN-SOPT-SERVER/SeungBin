import { Request, Response } from "express";
import { netflixService } from "../service";

const getnetflixMovieById = async (req: Request, res: Response) => {
  const { netflixId } = req.params;

  const data = await netflixService.getnetflixMovieById(+netflixId);

  if (!data) {
    return res.status(404).json({ status: 404, message: "NOT_FOUND" });
  }
  return res.status(200).json({ status: 200, message: "영화 조회 성공", data });
};
//영화 생성
const createnetflixMovie = async (req: Request, res: Response) => {
  const {
    title,
    image,
    iconImage,
    runningTime,
    watchTime,
    epiNum,
    currentNum,
    detail,
    character,
    genre,
    seriesDescription,
  } = req.body;

  if (
    !title ||
    !image ||
    !iconImage ||
    !runningTime ||
    !watchTime ||
    !epiNum ||
    !currentNum ||
    !detail ||
    !character ||
    !genre ||
    !seriesDescription
  ) {
    return res.status(400).json({ status: 404, message: "영화 생성 실패" });
  }

  const data = await netflixService.createnetflixMovie(
    title,
    image,
    iconImage,
    runningTime,
    watchTime,
    epiNum,
    currentNum,
    detail,
    character,
    genre,
    seriesDescription
  );

  if (!data) {
    return res.status(400).json({ status: 404, message: "영화 생성 실패" });
  }
  return res.status(200).json({ status: 200, message: "영화 생성 성공", data });
};
// 영화 전체 조회
const getAllnetflixMovie = async (req: Request, res: Response) => {
  const data = await netflixService.getAllnetflixMovie();
  return res
    .status(200)
    .json({ status: 200, message: "영화 전체 조회 성공", data });
};
// 영화 업데이트
const updatenetflixMovie = async (req: Request, res: Response) => {
  const { title } = req.body;
  const { netflixId } = req.params;
  if (!title) {
    return res.status(400).json({ status: 404, message: "영화 업데이트 실패" });
  }

  const updatenetflixMovie = await netflixService.updatenetflixMovie(
    +netflixId,
    title
  );
  return res
    .status(200)
    .json({ status: 200, message: "영화 업데이트 성공", updatenetflixMovie });
};
// 영화 삭제
const deletenetflixMovie = async (req: Request, res: Response) => {
  const { netflixId } = req.params;

  const data = await netflixService.deletenetflixMovie(+netflixId);
  return res.status(200).json({ status: 200, message: "영화 삭제 성공", data });
};

const netflixController = {
  getnetflixMovieById,
  createnetflixMovie,
  getAllnetflixMovie,
  updatenetflixMovie,
  deletenetflixMovie,
};

export default netflixController;
