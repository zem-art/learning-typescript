import ILaptop from './ILaptop';
import * as Keyboard from "./Keyboard";
import { B } from "./Keyboard";

class BaseLaptop<T> implements ILaptop<T> {
    nama: string;
    type: T;
    withNumeric : boolean;
    witTouchButton : boolean;
    
    constructor(p_name:string, p_type:T, p_numeric:boolean, p_touch_button:boolean) {
        this.nama = p_name;
        this.type = p_type;
        this.withNumeric = p_numeric;
        this.witTouchButton = p_touch_button;
    }

    a():void {
        return console.log(Keyboard.A());
    }

    b():void {
        return console.log(B());
    }
}

export default BaseLaptop