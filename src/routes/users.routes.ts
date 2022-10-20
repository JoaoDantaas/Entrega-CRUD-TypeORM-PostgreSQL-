import { Router } from "express";

import authToken from "../middlewares/authToken.middlewares";
import isAdmMiddleware from "../middlewares/isAdm.middlewares";

import createUserController from "../controllers/users/createUser.controller";
import userLoginController from "../controllers/sessions/userLogin.controller";
import listUsersController from "../controllers/users/listUsers.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import updateUserMiddlewares from "../middlewares/updateUser.middlewares";
import deleteUserController from "../controllers/users/deleteUser.controller";
import deleteUserMiddlewares from "../middlewares/deleteUser.middlewares";

const router = Router()

router.post("/login", userLoginController)
router.post("/users", createUserController)
router.get("/users", authToken, isAdmMiddleware, listUsersController)
router.patch("/users/:id", authToken, updateUserMiddlewares, updateUserController)
router.delete("/users/:id", authToken, isAdmMiddleware, deleteUserMiddlewares, deleteUserController)

export default router