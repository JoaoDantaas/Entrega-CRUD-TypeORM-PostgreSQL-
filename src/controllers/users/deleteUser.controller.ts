import {Request, Response  } from "express";
import deleteUserService from "../../services/users/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id

        const userDeleted = await deleteUserService(id)

        return res.status(204).json(userDeleted)
    } catch (error) {
        if(error instanceof Error) {
            return res.status(404).json({
                error: error.name,
                message: error.message
            })
        }
    }
}

export default deleteUserController;