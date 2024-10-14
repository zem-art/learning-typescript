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
const result = multiple(23, 1.3)
console.log(result);

// function as type
type Tambah = (val1 : number, val2 : number) => number

const Add : Tambah = (val1 : number, val2 : number): number => {
    return val1 * val2
}



