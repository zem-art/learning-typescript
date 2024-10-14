// interface
/**
 * interface adalah sebuah struktur yang mendefinisikan kontrak atau bentuk dari suatu objek.
 * Interface digunakan untuk mendeskripsikan bagaimana sebuah objek seharusnya terlihat, termasuk properti, tipe data, dan metode yang dimilikinya.
 * Interface tidak mengimplementasikan logika, melainkan hanya mendefinisikan tipe data dan aturan.
 */

interface Laptop {
    name: string,
    on(): void,
    off(): void,
}

class Asus implements Laptop {
    name: string;
    isGaming:boolean;

    constructor(parm_name:string, parm_isgaming: boolean) {
        this.name = parm_name,
        this.isGaming = parm_isgaming
    }

    on(): void {
        console.log("nyala");
    }
    off(): void {
        console.log("mati");
    }
}

class Macbook implements Laptop {
    name: string;
    keyboardlight:boolean;

    constructor(parm_name:string, parm_islight: boolean) {
        this.name = parm_name,
        this.keyboardlight = parm_islight
    }

    on(): void {
        console.log("nyala");
    }
    off(): void {
        console.log("mati");
    }
}

let asus = new Asus('Asus Tuf', true)
asus.on()
asus.off()

let macbook = new Macbook('Macbook Pro', true)
macbook.on()
macbook.off()
