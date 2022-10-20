import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken"

export const authToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]

        jwt.verify(
          token as string, 
          process.env.SECRET_KEY as string,
          (err: any, decoded: any) => {
            
            req.user = {
                isAdm: decoded.isAdm,
                id: decoded.id
            }

           return next()
        })

    } catch (error) {
        return res.status(401).json({message: "Invalid Token"})
    }
}

export default authToken