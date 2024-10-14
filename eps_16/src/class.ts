export class User {
    public name: string
    /**
     * jika menggunakan public di dalam constructor 
     * tidak perlu mendefinisikan public di dalam class
     */

    constructor(name_param: string, public age : number) {
        this.name = name_param
    }
}

let user = new User('ucups', 20)
console.log(user);
