import {Get, JsonController, Param} from 'routing-controllers';
import {Inject} from 'typedi';
import UserRepository from '../../repository/user/UserRepository';

@JsonController('/users')
export default class UserController {
    @Inject() private userRepository: UserRepository;

    @Get("/")
    getAll() {
        return this.userRepository.getUsers();
    }

    @Get('/:id')
    getById(@Param("id") id: string) {
        return this.userRepository.getById(id);
    }
}
