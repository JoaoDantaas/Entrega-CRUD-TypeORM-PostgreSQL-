import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { hash } from "bcrypt";

const updateUserService = async (userBody:IUserUpdate, id: string) => {
    
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        id
    })
    console.log(user)
    if(!user){
        throw new Error("User not found")
    }
    await userRepository.update(
        id,
        {
            name: userBody.name ? userBody.name : user.name,
            email: userBody.email ? userBody.email : user.email,
            password: userBody.password ? await hash(userBody.password, 10) : user.password,
            updatedAt: new Date()
        }
    )

    const userUpdate = await userRepository.findOneBy({
        id
    })
    return userUpdate
}

export default updateUserService