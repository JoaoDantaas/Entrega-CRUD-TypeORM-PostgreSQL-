import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";

const deleteUserService = async (id: string) => {
    
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        id
    })

    await userRepository.update(
        id,
        {
            isActive: user!.isActive ? false : true
        }
    )
        return "User modificado"
}

export default deleteUserService