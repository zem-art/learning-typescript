"use strict";
// type data balikan pada function
// string
function getName() {
    return "hello get name ucup";
}
console.log(getName());
// number
function getAge() {
    return 23;
}
console.log(getAge());
// void
// jika menggunakan type void maka fungsi tersebut tidak boleh me return apapun dari fungsi tersebut!!.
function notReturn() {
    console.log('tidak mereturn');
}
notReturn();
//////// ====================== /////////
// aruments types
function multiple(val1, val2) {
    return val1 * val2;
}
const result = multiple(23, 1);
console.log(result);
const Add = (val1, val2) => {
    return val1 * val2;
};
// default parameter
const fullName = (frist, last = 'store') => {
    return frist + " " + last;
};
console.log(fullName('ucups'));
