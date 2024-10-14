//generic class

/**
 * Generic adalah fitur yang memungkinkan Anda untuk membuat komponen, fungsi, atau class yang dapat bekerja dengan berbagai tipe data sambil tetap menjaga tipe yang kuat (type safety).
 * Dengan generic, Anda dapat menulis kode yang lebih fleksibel, reusable, dan tetap konsisten dengan tipe yang digunakan.
 */

/**
 * bagian <T> pada class List<T> adalah deklarasi generic.
 * Ini berarti bahwa T adalah parameter tipe yang bisa diisi dengan tipe data apa pun saat Anda membuat instance dari class List.
 * 
 * <T> dalam class List<T> adalah generic type parameter yang memungkinkan class List bekerja dengan tipe apa pun yang diberikan saat pembuatan instance.
 */

class List<T> {
    private data:T[];

    constructor(...elements: T[]) { // ... rest parameter
        this.data = elements
    }

    add(elements: T): void {
        this.data.push(elements);
    }

    addMultiple(...elements: T[]): void {
        this.data.push(...elements);
    }

    getAll(): T[] {
        return this.data
    }
}

//pasing data number
let numbers = new List<number>(1,2,3);
numbers.add(9)
numbers.addMultiple(2, 4, 6);
console.log('pasing data number =',numbers.getAll())

// passing data number & string
let random = new List<number | string | boolean>(1, 'A', true, 2, 'B')
random.add(false)
random.addMultiple('stda', 1, false);
console.log('pasing data random =',random.getAll())