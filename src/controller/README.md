# Controllers

Controllers are used to create the endpoints of your API.

## Example

```
@Controller()
export default class UserController {
    @Inject() private userRepository: UserRepository;

    @Get("/users")
    getAllUsers() {
        return this.userRepository.getUsers();
    }

    @Get('/users/:id')
    getUserById(@Param("id") id: string) {
        return this.userRepository.getById(id);
    }
}
```
