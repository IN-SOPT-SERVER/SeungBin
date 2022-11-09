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

const netflixController = {
  getnetflixMovieById,
};

export default netflixController;
