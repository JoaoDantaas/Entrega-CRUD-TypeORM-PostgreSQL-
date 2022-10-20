import { User } from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/users";
import AppDataSource from "../../data-source"
import bcrypt from "bcrypt"

const createUserService = async ({name, email, password, isAdm }: IUserRequest) => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const emailExists = users.find(user => user.email ===  email)

    if(emailExists) {
        throw new Error("Email Already Exists")
    }

    const user = new User()
    user.name = name
    user.email = email
    user.password = bcrypt.hashSync(password, 10)
    user.isAdm = isAdm
    user.isActive = true
    user.createdAt = new Date()
    user.updatedAt = new Date()
    user.id

    userRepository.create(user)
    await userRepository.save(user)

    return user
}

export default createUserService