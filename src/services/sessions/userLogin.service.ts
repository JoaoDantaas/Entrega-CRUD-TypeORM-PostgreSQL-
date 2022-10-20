import { IUser, IUserLogin } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userLoginService = async ({email, password}: IUserLogin) => {
    const userRepository  = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const userFind = users.find((user: { email: string }) =>  user.email === email)

    if(!userFind) {
        throw new Error("Wrong email/password")
    }
    if(!bcrypt.compareSync(password, userFind.password)) {
        throw new Error("Wrong email/password")
    }
    const token = jwt.sign({ isAdm: userFind.isAdm, id: userFind.id}, String(process.env.SECRET_KEY),{
        expiresIn: "24h",
    })
    return token
}

export default userLoginService