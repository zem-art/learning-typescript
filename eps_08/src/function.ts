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