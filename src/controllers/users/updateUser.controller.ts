import {Request, Response  } from "express";
import { IUserUpdate } from "../../interfaces/users";
import updateUserService from "../../services/users/updateUser.service";
import { instanceToPlain } from "class-transformer";

const updateUserController = async (req: Request, res: Response) => {
    
    try {
        const user: IUserUpdate = req.body
        const id: string = req.params.id 
        console.log(req.body)
        console.log(req)

        const userUpdate = await updateUserService(user, id)

        return res.status(200).json(instanceToPlain(userUpdate))
    } catch (error) {
        if(error instanceof Error) {
            return res.status(403).json({
                error: error.name,
                message: error.message
            })
        }
    }
}

export default updateUserController;