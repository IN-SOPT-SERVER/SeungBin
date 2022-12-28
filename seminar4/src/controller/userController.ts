import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { rm, sc } from "../constants";
import { fail, success } from "../constants/response";
import { UserCreateDTO } from "../interfaces/UserCreateDTO";
import { UserSignInDTO } from "../interfaces/UserSignInDTO";
import jwtHandler from "../modules/jwtHandler";
import { userService } from "../service";

const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const data = await userService.getUserById(+userId);

  if (!data) {
    return res
      .status(sc.BAD_REQUEST)
      .send(fail(sc.BAD_REQUEST, rm.READ_USER_FAIL));
  }

  return res.status(sc.OK).send(success(sc.OK, rm.READ_USER_SUCCESS, data));
};

//유저 생성
const createUser = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res
      .status(sc.BAD_REQUEST)
      .send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
  }

  const userCreateDto: UserCreateDTO = req.body;
  const data = await userService.createUser(userCreateDto);

  if (!data) {
    return res
      .status(sc.BAD_REQUEST)
      .send(fail(sc.BAD_REQUEST, rm.SIGNUP_FAIL));
  }

  // ================== 여기 추가 ========================
  //? 아까 만든 jwtHandler 내 sign 함수를 이용해 accessToken 생성
  const accessToken = jwtHandler.sign(data.id);

  const result = {
    id: data.id,
    name: data.userName,
    accessToken,
  };

  return res
    .status(sc.CREATED)
    .send(success(sc.CREATED, rm.SIGNUP_SUCCESS, result));
};

// 유저 전체 조회
const getAllUser = async (req: Request, res: Response) => {
  const data = await userService.getAllUser();
  if (!data) {
    return res
      .status(sc.BAD_REQUEST)
      .send(fail(sc.BAD_REQUEST, rm.READ_ALL_USERS_FAIL));
  }

  return res
    .status(sc.OK)
    .send(success(sc.OK, rm.READ_ALL_USERS_SUCCESS, data));
};

// 유저 업데이트
const updateUser = async (req: Request, res: Response) => {
  const { name } = req.body;
  const { userId } = req.params;
  if (!name) {
    return res
      .status(sc.BAD_REQUEST)
      .send(fail(sc.BAD_REQUEST, rm.UPDATE_USER_FAIL));
  }

  const updateUser = await userService.updateUser(+userId, name);

  return res
    .status(sc.CREATED)
    .send(success(sc.CREATED, rm.UPDATE_USER_SUCCESS, updateUser));
};

// 유저 삭제
const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const data = await userService.deleteUser(+userId);
  if (!data) {
    return res
      .status(sc.BAD_REQUEST)
      .send(fail(sc.BAD_REQUEST, rm.DELETE_USER_FAIL));
  }

  return res.status(sc.OK).send(success(sc.OK, rm.DELETE_USER_SUCCESS, data));
};

const signInUser = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res
      .status(sc.BAD_REQUEST)
      .send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
  }

  const userSignInDto: UserSignInDTO = req.body;

  try {
    const userId = await userService.signIn(userSignInDto);

    if (!userId)
      return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NOT_FOUND));
    else if (userId === sc.UNAUTHORIZED)
      return res
        .status(sc.UNAUTHORIZED)
        .send(fail(sc.UNAUTHORIZED, rm.INVALID_PASSWORD));

    const accessToken = jwtHandler.sign(userId);

    const result = {
      id: userId,
      accessToken,
    };

    res.status(sc.OK).send(success(sc.OK, rm.SIGNIN_SUCCESS, result));
  } catch (e) {
    console.log(error);
    //? 서버 내부에서 오류 발생
    res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

const userController = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
  signInUser,
};

export default userController;
