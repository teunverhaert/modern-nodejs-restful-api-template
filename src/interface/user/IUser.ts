export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: Gender;
    birthDate: Date;
}

export enum Gender {
    M, F
}
