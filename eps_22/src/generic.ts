//generic

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

// without generic
function getData(params:any) {
    return params
}
console.log(getData('ucups').length);
console.log(getData(1234).length);


// with generic
function myData<T>(params:T) {
    return params
}
console.log(myData('ucups').length);
console.log(myData(1234));

// with arrow Function
const arrowFunc = <T,> (params:T) => { // <T,> // <T unknow extends>
    return params
}