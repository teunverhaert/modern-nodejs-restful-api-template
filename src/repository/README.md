# Repository

Repositories are used to store the business logic used in the controllers.

# Example

```
@Service()
export default class UserRepository {
    @Inject('userModel') private userModel: Model<IUser & Document>;

    public getUsers(type?: string) {
        return this.userModel.find().exec();
    }

    public getById(id: string) {
        return this.userModel.findById(id);
    }
}
```
