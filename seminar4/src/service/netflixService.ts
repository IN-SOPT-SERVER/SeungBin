import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//* movieId로 영화 조회
const getnetflixMovieById = async (movieId: number) => {
  const movie = await prisma.netflixMovie.findUnique({
    where: {
      id: movieId,
    },
  });

  return movie;
};
// 영화 생성
const createnetflixMovie = async (
  title: string,
  image: string,
  iconImage: string,
  runningTime: number,
  watchTime: number,
  epiNum: number,
  currentNum: number,
  detail: string,
  character: string[],
  genre: string[],
  seriesDescription: string
) => {
  const movie = await prisma.netflixMovie.create({
    data: {
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
    },
  });
  return movie;
};
const netflixService = {
  getnetflixMovieById,
  createnetflixMovie,
};

export default netflixService;
