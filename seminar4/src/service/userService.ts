import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//* userId로 유저 조회
const getUserById = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};
// 유저 생성
const createUser = async (userName: string, email: string, age: number) => {
  const user = await prisma.user.create({
    data: {
      userName,
      age,
      email,
    },
  });
  return user;
};
// 유저 전체 조회
const getAllUser = async () => {
  const user = await prisma.user.findMany();
  return user;
};
// 우저 정보 업데이트
const updateUser = async (userId: number, name: string) => {
  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      userName: name,
    },
  });
  return user;
};
// 유저 삭제
const deleteUser = async (userId: number) => {
  const user = await prisma.user.delete({
    where: {
      id: userId,
    },
  });
  return user;
};

const userService = {
  getUserById,
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
};

export default userService;
