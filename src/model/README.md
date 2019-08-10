# Models

Models are used by [mongoose](https://github.com/Automattic/mongoose) for using documents in the database.

Make sure to define your models in the [loaders index file](../loader/index.ts) if you want to access the via dependency injection.

## Example

```
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

export default model<IUser & Document>('User', userSchema);
```
