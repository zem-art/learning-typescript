import Asus from "./Asus";
import Macbook from "./Macbook";

let asus = new Asus('Zenbook', true, true)
console.log('====================================');
console.log(asus);
asus.a();
asus.b();
console.log('====================================');

let macbook = new Macbook(2020, false, false)
console.log('====================================');
console.log(macbook);
macbook.a();
macbook.b();
console.log('====================================');

