"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    /**
     * jika menggunakan public di dalam constructor
     * tidak perlu mendefinisikan public di dalam class
     */
    constructor(name_param, age) {
        this.age = age;
        this.name = name_param;
    }
}
exports.User = User;
let user = new User('ucups', 20);
console.log(user);
