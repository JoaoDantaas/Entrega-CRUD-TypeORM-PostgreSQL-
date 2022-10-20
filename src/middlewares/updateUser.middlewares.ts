import { Request, Response, NextFunction } from "express";

const updateUserMiddlewares = (req: Request, res: Response, next: NextFunction) => {
  
  if(req.user.id !== req.params.id){
    if(!req.user.isAdm){
      return res.status(401).json({
        message: "User is not admin"
      })
    }
  }

  const {id, isAdm, isActive} = req.body

  if(id !== undefined|| isAdm !== undefined|| isActive !== undefined) {
    return res.status(401).json({
      message: "Unauthorized"
    })
  }

  return next()
};

export default updateUserMiddlewares;