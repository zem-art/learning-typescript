// type data balikan pada function

// string
function getName():string {
    return "hello get name ucup"
}
console.log(getName())

// number
function getAge():number {
    return 23
}
console.log(getAge())

// void
// jika menggunakan type void maka fungsi tersebut tidak boleh me return apapun dari fungsi tersebut!!.
function notReturn(): void{
    console.log('tidak mereturn')
}
notReturn()

//////// ====================== /////////

// aruments types
function multiple(val1:number, val2: number):number {
    return val1 * val2
}
const result = multiple(23, 1)
console.log(result);

// function as type
type Tambah = (val1 : number, val2 : number) => number

const Add : Tambah = (val1 : number, val2 : number): number => {
    return val1 * val2
}

// default parameter
const fullName = (frist : string, last: string = 'store'): string => {
    return frist + " " + last
}
console.log(fullName('ucups'))

// optional parameter
// const funcGetAge = (val1: number, val2?:number): number => { // menggunakna optional parameter (?)
//     /**
//      * terdapat error di dalam val2 karna nilai undifine tidak bisa di jumlah
//      * (dalam typescript tidak bisa karna error tapi apabila ketika di compile ke dalam js itu bisa)
//      */
//     return val1 + val2;
//     // return val1 + " " + val1
// }

// console.log(funcGetAge(1, 2));
