"use strict";
//generic
/**
 * Generic adalah fitur yang memungkinkan Anda untuk membuat komponen, fungsi, atau class yang dapat bekerja dengan berbagai tipe data sambil tetap menjaga tipe yang kuat (type safety).
 * Dengan generic, Anda dapat menulis kode yang lebih fleksibel, reusable, dan tetap konsisten dengan tipe yang digunakan.
 */
// without generic
function getData(params) {
    return params;
}
console.log(getData('ucups').length);
console.log(getData(1234).length);
// with generic
function myData(params) {
    return params;
}
console.log(myData('ucups').length);
console.log(myData(1234));
// with arrow Function
const arrowFunc = (params) => {
    return params;
};
