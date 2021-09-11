import {Request, Response} from "express"

export default class UserController{
    public static getUsers(request:Request, response: Response) {
        const users = [
            {
                name: 'Saurabh',
                age: 30
            },
            {
                name: 'Gaurav',
                age: 25
            }
        ];
        response.statusCode = 200;
        response.send({users});
    }
}