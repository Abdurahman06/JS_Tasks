// ==================144#1======================
// let arr = ['a', 'b', 'c', 'd', 'e'];
// for(let elem of arr){
//     console.log(elem);
// }


// ==================145#1======================
// let obj = {x: 1, y: 2, z: 3};
// for(let key in obj){
//     console.log(key);
    
// }


// ==================145#2======================
// let obj = {x: 1, y: 2, z: 3};
// for (let elem in obj){
//     console.log(obj[elem]);
    
// }


// ==================146#1======================
// let num = 1;
// while (num <= 100){
// console.log(num);
// num++
// }


// ==================146#2======================
// let i = 11;
// while (i <= 33){
//     console.log(i);
//     i++;
    
// }


// ==================146#3======================
// let num = 11;
// while (
// num <= 1000
// ){
//     console.log(num);
//     num *= 3;
    
// }


// ==================147#1======================
// for (i = 1; i<= 100; i++){
//     console.log(i);
    
// }


// ==================147#2======================
// for(i = 11; i <= 33; i++){
//     console.log(i);
    
// }


// ==================147#3======================
// for (i=0; i<=100; i+=2){
//     console.log(i);
    
// }


// ==================147#4======================
// for (i=1; i<=99; i+=2){
//     console.log(i);
    
// }


// ==================147#5======================
// for(i = 100; i >= 0; i--){
//     console.log(i);
    
// }


// ==================148#1======================
// let arr = ['a', 'b', 'c', 'd', 'e'];
// for(i = 0; i < arr.length; i++){
//     console.log(arr[i]); 
// }


// ==================148#2======================
// let arr = ['a', 'b', 'c', 'd', 'e'];

// for (let i = 1; i < arr.length - 1; i++) {
//     console.log(arr[i]);}


// ==================148#3======================
// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }


// ==================148#4======================
// let arr = ['a', 'b', 'c', 'd', 'e'];
		
// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }


// ==================149#1======================
// let arr = [2, 5, 9, 15, 1, 4];
// for(i = 0; i < arr.length; i++){
//     if(arr[i] > 3 && arr[i] < 10){
//         console.log(arr[i]);
        
//     }
// }


// ==================149#2======================
// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// for ( let key in obj){
//     if( obj[key] % 2 != 0){
//         console.log(obj[key]);
        
//     }
// }


// ==================150#1======================
// let res = 0;
// for(i= 2 ; i <= 100; i+=2){
//     res +=i
// }console.log(res);
    

// ==================150#2======================
// let res = 0;
// for(i = 1 ; i <= 99; i+=2){
//     res +=i
// }console.log(res);


// ==================150#3======================
// let res = 1;
// for(i = 1; i <= 20; i ++ ){
//     res *= i;
// }console.log(res);
    

// ==================151#1======================
// let arr = [2, 5, 9, 3, 1, 4];
// let res = 0;
// for (let elem of arr){
//     res += elem;
// }console.log(res);


// ==================151#2======================
// let arr = [2, 5, 9, 3, 1, 4];
// let res = 0;
// for(elem of arr){
//     if(elem % 2 == 0){res += elem }
    
// }console.log(res);


// ==================151#3======================
// let arr = [2, 5, 9, 3, 1, 4];
// let res = 0;
// for(let elem of arr){
//     res += elem**2
// }console.log(res);


// ==================151#4======================
// let arr = [2, 5, 9, 3, 1, 4];
// let res = 1;
// for(elem of arr){
//     res *= elem
// }console.log(res);


// ==================152#1======================
// let str = '';

// for (let i = 0; i < 5; i++) {
// 	str += '-';
// }
// console.log(str);


// ==================152#2======================
// let str = '';
// for ( i = 1; i <= 8; i++){
//     str += i;
// }console.log(str);


// ==================152#3======================
// let str = "";
// for(i = 9; i>= 1; i--){
//     str += i;
// }console.log(str);


// ==================152#4======================
// let str = "";
// for(i = 1; i <= 9; i ++){
//     str += '-' + i +;
// }console.log(str);


// ==================153#1======================
// for (let i = 10; i <= 1000; i++) {
// 	let str = String(i); 
	
// 		console.log(str[0]);
	
// }


// ==================153#2======================
// for (let i = 10; i <= 1000; i++) {
//     	let str = String(i); 
        
//     		console.log(str[0] + str[1]);
        
//     }


// ==================153#3======================
// for (let i = 10; i <= 1000; i++) {
//         	let str = String(i); 
//            if(str[0] === '1') {
//         		console.log(str);
//             }
//         }



// ==================153#4======================
// for (let i = 10; i <= 1000; i++) {
//             	let str = String(i); 
//                if(str[0] + str[1] == '5') {
//                 console.log(str);
//                 }
//             }


// ==================154#1======================
// let arr = [1, 2, 3, 0, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//         break; 
//     }
//     console.log(arr[i]);
// }


// ==================154#2======================
// let arr = [1, 2, 3, 4, -6, 5];
// let res = 0;

// for (let elem of arr) {
//     if (elem < 0) {
//         break; 
//     }
//     res += elem; 
// }
// console.log(res);


// ==================154#3======================
// let arr = [1, 2, 3, 4, -6, 5, 3];
// let position = -1; 

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 3) {
//         position = i; 
//         break;
//     }
// }

// console.log(position);


// ==================154#4======================
// let sum = 0; 
// let count = 0; 
// for (let i = 1; sum <= 100; i++) {
//     sum += i; 
//     count++; 
// }
// console.log(count);


// ==================156#1======================
// let result = ''; 
// for (let i = 1; i <= 9; i++) {
//     for (let j = 0; j < 3; j++) {
//         result += i; 
//         continue; 
//     }
// }

// console.log(result); 


// ==================156#2======================
// let output = "";
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     output += i * 10 + j + " ";
//   }
// }
// console.log(output.trim());


// ==================159#1======================
// let arr = [];

// for (let i = 1; i <= 10; i++) {
// 	arr.push(i);
// }

// console.log(arr); 


// ==================159#2======================
// let arr = [];

// for (let i = 1; i <= 10; i++) {
// 	arr.push('х');
// }

// console.log(arr); 


// ==================159#3======================
// let arr = [2, 7, 1, 9, -5, -2, 13, -1];
// let arr1 = [];
// for (let elem of arr){
// if (elem > 0){
//     arr1.push(elem);
// };

// }console.log(arr1);


// ==================160#1======================
// let arr = [3, 5, 7, 1, 9];
// for (let i = 0; i < arr.length; i++) { 
//   arr[i] = arr[i] ** 2; 
// }
// console.log(arr); 


// ==================160#2======================
// let arr = [3, 5, 7, 1, 9];
// for (let i = 0; i < arr.length; i++) { 
//       arr[i] = arr[i] - 1; 
//     }console.log(arr); 


// ==================160#3======================
// let arr = [3, 5, 7, 1, 9];
// for (let i = 0; i < arr.length; i++) { 
//       arr[i] = arr[i] + 10; 
//     }console.log(arr); 


// ==================161#1======================
// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let obj = {};
// for (let i = 0; i <= 6; i++) {
//   obj[arr2[i]] = arr1[i]; 
// }
// console.log(obj);


// ==================161#2======================
// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// let evenObj = {};

// for (let key in obj) {
//   if (obj[key] % 2 === 0) {
//     evenObj[key] = obj[key];
//   }
// }

// console.log(evenObj);


// ==================161#3======================
// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// let newObj = {};

// for (let key in obj) {
//   newObj[obj[key]] = key;
// }

// console.log(newObj);

//162


let obj6 = {x: 1, y: 2, z: 3};
for (let key in obj6) {
	obj6[key] *= obj6[key];
}
console.log(obj6);

let obj7 = {x: 1, y: 2, z: 3};
for (let key in obj7) {
	obj7[key] += 1;
}
console.log(obj7);

//163

let arr22 = ['a', 'b', 'c', 'd', 'e'];

let flag = false;

for (let elem of arr22) {
	if (elem == 'c') {
		flag = true;
		break;
	}
}

if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
}

flag = false;
let num3 = 7;
let count3 = 0; 
for(i = 1; i < 10; i++ ){
  if(num3%i==0){
    count3++;
  }
  if(count3>2){
    flag = true;
  }
}
if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
}

//164

let arr23 = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;

for (let i = 0; i < arr23.length; i++) {
  let Digit = Math.floor(arr23[i] / 10);
  if (Digit === 1 || Digit === 2) {
    sum += arr23[i];
  }
}

console.log(sum); // Вывод: 51 

//165 

let obj77 = {a: 10, b: 20, c: 30, d: 40, e: 50}; 
let sum7 = 0; 

for (let elem in obj) { 
    
    if (elem[0] === 'a' || elem[0] === 'b') { 
        sum7 += obj77[elem]; 
    } 
} 

console.log(sum7);

alert(`166 ЗАДАНИЕ:
работает: 1, 3, 5, 6, 9, 10, 14, 18
не работает: 2, 4, 7, 8, 11, 12, 13, 15, 16, 17, 19 , 20, 21
`)

//167

/*

for (i = 1; i <= 100; i++) {
	console.log(i);
}

for (i = 100; i > 0; i--) {
	console.log(i);
}

for (i = 1; i <= 100; i++) {
	if(i%2===0){
	console.log(i);
}
}
//167_4
let ar = []
for (let i = 1; i <= 10; i++) {
	ar.push('x');
}
console.log(ar);*/

/*

let ar1 = []
for (let i = 1; i <= 10; i++) {
	ar1.push(i);
}
console.log(ar1);

let ar2 = [1, 23, 11, 3, 5];
let ar3 = [];

for (let i = 0; i < ar2.length; i++) {
    if (ar2[i] > 0 && ar2[i] < 10) {
        ar3.push(ar2[i]); 
    }
}

console.log(ar3);

let flag3 = false
for (let i = 0; i < ar2.length; i++) {
    if (ar2[i] ===5 ) {
       flag3 = true;
    }
}

console.log(flag3);
//167_8
let sum100 = 0;
for (let i = 0; i < ar2.length; i++) {
   
       sum100+= ar2[i];
    
}

console.log(sum100);


let sum101 = 0;
for (let i = 0; i < ar2.length; i++) {
   
       sum101+=(ar2[i]*ar2[i]);
    
}

console.log(sum101);
//167_10
console.log(sum100/ar2.length);


let num11 = 9;
let fuct = 1;
for (let i = 1; i <= 9; i++){
  
  fuct *=i;
}
console.log(fuct)

let ar5 = []

for (let i = 1; i <= 10; i++){
  
  ar5.push(i);
}

console.log(ar5)


let ar6 = [10, -5, 20, -15, 30, 40, -2];
let positiv = 0;

for (let i = 0; i < ar6.length; i++) {
  if (ar6[i] > 0) {
    positiv += ar6[i];
  }
}

console.log("Сумма положительных элементов:", positiv);

//167_14
let ar7 = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < ar7.length; i++) {
  let Digit1 = Math.floor(ar7[i] / 10); 
  if (Digit1 === 1 || Digit1 === 2 || Digit1 === 5) {
    console.log(ar7[i]);
  }
}
//167_15
for (i = ar7.length; i>0; i--) {
  console.log(ar7[i])
}
*/


//167_16
/*
let ar8 = [0, 11, 2, 50, 4, 3000];

for (let i = 0; i < ar8.length; i++) {
  if (ar8[i]===i) {
    console.log(ar8[i]);
  }
}

let ar9 = [0, 11, 2, 50, 4, 3000];

for (let i = 0; i < ar9.length; i++) {
     document.write(ar9[i]+'<br>');
 }
//167_18
 for (let i = 0; i < ar9.length; i++) {
     document.write('<p>' +ar9[i]+'</p>');
 }

 */
/*
//167_19
 let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

for (let i = 0; i < days.length; i++) {
  if (i === 5 || i === 6) { // Проверка на выходные
    document.write("<b>" + days[i] + "</b><br>");
  } else {
    document.write(days[i] + "<br>");
  }
}

//167_20

for (let i = 0; i < days.length; i++) {
  if (days[i]==='Суббота') {
    let day = days[i]; 
    document.write("<i>" + day + "</i><br>");
  } else {
    document.write(days[i] + "<br>");
  }


}

*/

/*
//167_21
let obj17 = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for(let key in obj17){
  obj17[key]*=1.1;
  console.log(Math.floor(obj17[key]));
}
//167_22
let obj18 = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
for(let key in obj17){
 if(obj18[key]>400){
  obj18[key]*=1.1;
  console.log(Math.floor(obj18[key]));
}
}

*/
/*
//167_23
let arr33 = [1, 2, 3, 4, 5];
let arr34 = [6, 7, 8, 9, 10];

let newObj = {};

for (let i = 0; i < arr33.length; i++) {
  newObj[arr33[i]] = arr34[i];
}

console.log(newObj); 
//167_24
let new_obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
sumkey = 0;
sumobj = 0;

for(let key in new_obj){
  
  sumkey+=+key;
  sumobj+=new_obj[key];
 
}

 console.log(sumkey);
 console.log(sumobj);
 
 let del = sumobj/sumkey;
 console.log(del);
 */
 
 //let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

 
/*
//167_25
 
 let obj101 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
 let key_s = []
 let ob_j = [];
 for(let key in obj101){
   key_s.push(key);
   ob_j.push(obj101[key]);
   
 }
 
 console.log(key_s)
 console.log(ob_j)
 
 
 
 //167_26
 
 let obj102 = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};

let new_arr = [];

for (let key in obj102) {
  if (obj102[key] >= 100 && obj102[key] < 200 || obj102[key] >= 200 && obj102[key] < 300) {
    new_arr.push(obj102[key]);
  }
}

console.log(new_arr); 

*/


/*
//167_27
let new_arr3 = ['a', 'b', 'c', 'd', 'e'];

let newObj1 = {};

for (let i = 0; i < new_arr3.length; i++) {
  newObj1[i + 1] = new_arr3[i]; 
}

console.log(newObj1); 

 
 
//167_28

let newObj1 = {};

for (let i = 0; i < new_arr3.length; i++) {
  newObj1[new_arr3[i]] = i+1; 
}

console.log(newObj1); 

*/
