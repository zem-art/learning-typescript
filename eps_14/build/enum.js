"use strict";
// enums | type data yang menyimpan sekumpulan data konstans dan menyimpan data nya pada aplikasi
// numeric enums
// jika kita menaruh 1 pada index ke 0 maka akan berubah perhitungan nya menjadi di mulai 1
var MonthNum;
(function (MonthNum) {
    MonthNum[MonthNum["JAN"] = 1] = "JAN";
    MonthNum[MonthNum["FEB"] = 2] = "FEB";
    MonthNum[MonthNum["MAR"] = 3] = "MAR";
    MonthNum[MonthNum["APR"] = 4] = "APR";
    MonthNum[MonthNum["MAY"] = 5] = "MAY";
    MonthNum[MonthNum["JUN"] = 6] = "JUN";
})(MonthNum || (MonthNum = {}));
console.log(MonthNum.JAN);
var MonthStr;
(function (MonthStr) {
    MonthStr["JAN"] = "JANUARY";
    MonthStr["FEB"] = "FEBRUARY";
    MonthStr["MAR"] = "MAY";
    MonthStr["APR"] = "APRIL";
    MonthStr["MAY"] = "MEI";
    MonthStr["JUN"] = "JUNE";
})(MonthStr || (MonthStr = {}));
console.log(MonthStr.JAN);
