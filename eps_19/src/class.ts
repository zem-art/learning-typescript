export class User {
    name: string
    /**
     * jika menggunakan public di dalam constructor 
     * tidak perlu mendefinisikan public di dalam class
     */

    constructor(name_param: string, public age : number) {
        this.name = name_param
    }

    setName(value: string):void {
        this.name = value
    }

    getName = (): string => {
        return this.name
    }
}

// public = bisa di akses di semua class / dari luar class
// protected = hanya bisa di akses dari class tersebut, dan kelas turunannya
// private = hanya bisa di akses dari class itu sediri
// setter = untuk memvalidasi ketika ingin mengubah properti dari class
// getter = untuk mengambil properti dari class tersebut

class Admin extends User {
    read:boolean = true
    write:boolean = false
    phone:string;
    private _email:string = ""
    static getRoleName:string = 'Admin'

    constructor(phone_param:string, name:string, age:number){
        super(name, age)
        this.phone = phone_param
    }

    static getNameRole(){
        return 'Hallo';
    }

    getRole(): {read:boolean, write:boolean}{
        return {
            read : this.read,
            write: this.write
        }
    }

    set email(v : string) {
        if(v.length < 8){
            this._email = 'Email Salah'
        } else {
            this._email = v;
        }
    }

    
    get email() : string {
        return this._email
    }
}

let admin = Admin.getNameRole();
console.log(admin);
