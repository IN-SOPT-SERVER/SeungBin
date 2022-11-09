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
};

const netflixController = {
  getnetflixMovieById,
  createnetflixMovie,
};

export default netflixController;