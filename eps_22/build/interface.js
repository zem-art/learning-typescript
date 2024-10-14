"use strict";
// interface
/**
 * interface adalah sebuah struktur yang mendefinisikan kontrak atau bentuk dari suatu objek.
 * Interface digunakan untuk mendeskripsikan bagaimana sebuah objek seharusnya terlihat, termasuk properti, tipe data, dan metode yang dimilikinya.
 * Interface tidak mengimplementasikan logika, melainkan hanya mendefinisikan tipe data dan aturan.
 */
class Asus {
    constructor(parm_name, parm_isgaming) {
        this.name = parm_name,
            this.isGaming = parm_isgaming;
    }
    on() {
        console.log("nyala");
    }
    off() {
        console.log("mati");
    }
}
class Macbook {
    constructor(parm_name, parm_islight) {
        this.name = parm_name,
            this.keyboardlight = parm_islight;
    }
    on() {
        console.log("nyala");
    }
    off() {
        console.log("mati");
    }
}
let asus = new Asus('Asus Tuf', true);
asus.on();
asus.off();
let macbook = new Macbook('Macbook Pro', true);
macbook.on();
macbook.off();
