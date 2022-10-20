import {Request, Response  } from "express";
import createUserService from "../../services/users/createUser.service";
import { instanceToPlain } from "class-transformer";

const createUserController = async (req: Request, res: Response) => {
    try {
        const {name, email, password, isAdm} = req.body

        const newUser = await createUserService({name, email, password, isAdm})

        return res.status(201).json(instanceToPlain(newUser))
    } catch (error) {
        if(error instanceof Error) {
            return res.status(400).json({
                error: error.name,
                message: error.message
            })
        }
    }
}

export default createUserController;