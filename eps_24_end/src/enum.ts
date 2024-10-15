// enums | type data yang menyimpan sekumpulan data konstans dan menyimpan data nya pada aplikasi

// numeric enums
// jika kita menaruh 1 pada index ke 0 maka akan berubah perhitungan nya menjadi di mulai 1
enum MonthNum {
    JAN = 1,
    FEB,
    MAR,
    APR,
    MAY,
    JUN,
}

console.log(MonthNum.JAN)

enum MonthStr {
    JAN = 'JANUARY',
    FEB = 'FEBRUARY',
    MAR = 'MAY',
    APR = 'APRIL',
    MAY = 'MEI',
    JUN = "JUNE",
}

console.log(MonthStr.JAN)