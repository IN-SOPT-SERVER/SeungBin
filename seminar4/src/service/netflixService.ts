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

const netflixService = {
  getnetflixMovieById,
};

export default netflixService;
