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
// 영화 전체 조회
const getAllnetflixMovie = async () => {
  const movie = await prisma.netflixMovie.findMany();
  return movie;
};
// 영화 정보 업데이트
const updatenetflixMovie = async (movieId: number, title: string) => {
  const movie = await prisma.netflixMovie.update({
    where: {
      id: movieId,
    },
    data: {
      title: title,
    },
  });
  return movie;
};
// 영화 삭제
const deletenetflixMovie = async (movieId: number) => {
  const movie = await prisma.netflixMovie.delete({
    where: {
      id: movieId,
    },
  });
  return movie;
};
const netflixService = {
  getnetflixMovieById,
  createnetflixMovie,
  getAllnetflixMovie,
  updatenetflixMovie,
  deletenetflixMovie,
};

export default netflixService;
