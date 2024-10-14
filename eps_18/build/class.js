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
        this.getName = () => {
            return this.name;
        };
        this.name = name_param;
    }
    setName(value) {
        this.name = value;
    }
}
exports.User = User;
// public = bisa di akses di semua class / dari luar class
// protected = hanya bisa di akses dari class tersebut, dan kelas turunannya
// private = hanya bisa di akses dari class itu sediri
// setter = untuk memvalidasi ketika ingin mengubah properti dari class
// getter = untuk mengambil properti dari class tersebut
class Admin extends User {
    constructor(phone_param, name, age) {
        super(name, age);
        this.read = true;
        this.write = false;
        this._email = "";
        this.phone = phone_param;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
    set email(v) {
        if (v.length < 8) {
            this._email = 'Email Salah';
        }
        else {
            this._email = v;
        }
    }
    get email() {
        return this._email;
    }
}
let admin = new Admin('6238347', 'ucups', 20);
admin.getName();
admin.getRole();
admin.setName('kasep');
admin.email = 'ucups@mail.com';
console.log(admin.email);
