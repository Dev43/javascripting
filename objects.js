// // // // var pizza = {

// // // // toppings: ['cheese', 'sauce', 'pepperoni'],
// // // // crust: 'deep dish',
// // // // serves: 2


// // // // };

// // // // console.log(pizza);

// // //   var food = {
// // //        types: 'only pizza'
// // //      };


// // // console.log(food.types);


// // function eat(food){

// // return food + ' tasted really good.';

// // };



// // console.log(eat('bananas'));

// function math(arg1, arg2, arg3){

//   return arg2*arg3 + arg1;
// }

// console.log(math(53,61,67)) ;


 var a = 1, b = 2, c = 3;

     (function firstFunction(){
         var b = 5, c = 6;

         (function secondFunction(){
             var b = 8;
             console.log("a: "+a+", b: "+b+", c: "+c);

             (function thirdFunction(){
                 var a = 7, c = 9;

                 (function fourthFunction(){
                     var a = 1, c = 8;

                 })();
             })();
         })();
     })();



















