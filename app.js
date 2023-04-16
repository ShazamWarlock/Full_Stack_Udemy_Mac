// // // function hex(r,g,b) {
// // // //     return '#' +  ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// // // // }

// // // // hex(255, 100, 25);


// // //factory function
// // // function makecolor (r,g,b){
// // //     const color = {};
// // //     color.r = r;
// // //     color.g = g;
// // //     color.b = b;
// // //     color.rgb =  function(){
// // //         const {r,g,b} =  this;
// // //         return `rgb(${r}, ${g}, ${b})`;
// // //     };
// // //     color.hex = function(){
// // //         const {r,g,b} =  this;
// // //         return '#' +  ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// // //     }
// // //     return color;
// // // }

// // // const firstColor = makecolor(35, 255, 150);
// // // firstColor.hex()


// // function Color(r,g,b){
// //     this.r = r;
// //     this.g = g;
// //     this.b = b;
// // }

// // Color.prototype.rgb = function(){
// //     const {r,g,b} = this;
// //     return `rgb(${r}, ${g}, ${b})`
// // }

// // Color.prototype.hex = function(){
// //     const {r,g,b} =  this;
// //     return '#' +  ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// // }

// // Color.prototype.rgba = function(a=1.0){
// //     const {r,g,b,a} = this;
// //     return `rgb(${r}, ${g}, ${b}, ${a})`
// // }

// // const color1 = new Color(40,255,60);
// // const color2 = new Color(0,0,0); 

// class Color{
//     constructor(r,g,b,name){
//        this.r = r;
//        this.g = g;
//        this.b = b;
//        this.name = name;
//     }
//     rgb(){
//         const {r,g,b} = this;
//         return `rgb(${r}, ${g}, ${b})`
//     }
//     hex(){
//         const {r,g,b} =  this;
//         return '#' +  ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
//     hsl(){
//         const{h,s,l} = this;
//         return`hsl(${h},${s},${l})`;
//     }
//     fullySaturated(){
//         const{h,l} = this;
//         return `hsl(${h},100%,${l})`
//     }
//     opposite(){
//         const{h,s,l} = this;
//         const newHue =  (h + 180) % 360;
//         return`hsl(${newHue},${s},${l})`;
//     }
//     calcHSL(){
//         let {r,g,b} = this;
//         r /= 255;
//         g /= 255;
//         b /= 255;
//     }
//     rgba(a=1.0){
//         const {r,g,b,a} = this;
//         return `rgb(${r}, ${g}, ${b}, ${a})`
//     }
// }   

class Pets{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eats(){
        return `${this.name} is eating!`;
    }
}

class Cats extends Pets{
    meow(){
        return `Meowww!`;
    }
}

class Dog extends Pets{
    woof(){
        return `Woof!!`;
    }
}