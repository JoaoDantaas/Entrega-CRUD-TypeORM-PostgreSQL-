import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const deleteUserMiddlewares = async (req: Request, res: Response, next: NextFunction) => {
  
    const id: string = req.params.id

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        id
    })

    if(!user){
        return res.status(404).json({
            message: "User not found"
          })
    }

    if(user!.isActive === false){
    return res.status(400).json({
        message: "User Inativo"
    })
  }
  return next()
};

export default deleteUserMiddlewares;