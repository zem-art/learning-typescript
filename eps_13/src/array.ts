// ARRAY

// number
let array: number[] = [1,2,3]
array = [12,234]

// string
let array2 : string[] = ['string1', 'string2']
array2 = ['string3']

// any
let array3 : any[] = []
array3 = ['string', 12, false, {}]

// tuples = type data array yang isi nya terbatas
let biodata : [string, number];
biodata = [ 'surabaya', 1]
// biodata = [ 'surabaya', true] // wrong | Type 'boolean' is not assignable to type 'number'.
// biodata = [ 'surabaya', 1, false] // wrong |  Source has 3 element(s) but target allows only 2.


