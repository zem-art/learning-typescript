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

class Admin extends User {
    read:boolean = true
    write:boolean = false

    getRole(): {read:boolean, write:boolean}{
        return {
            read : this.read,
            write: this.write
        }
    }
}

let admin = new Admin('ucups', 20)
admin.getName()
admin.getRole()
admin.setName('kasep')