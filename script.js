let fullName = 'Nazila Karimova Nizami';

// 1) Ad soyad ata adınızı bütöv şəkildə götürün və array şəklində hərflərinə ayırın!
let letters = fullName.split('');
// console.log(letters);


// 2) Hərflərə ayrılmış arrayda soyadınızı adınızın önünə keçirən alqoritm yazın!

// let result = fullName.replace('Karimova', '').replace('Nazila', 'Karimova').replace(' ', ' Nazila').split('');
// console.log(result);




//3) Alınan yeni arrayi stringə çevirin ama ilk array dəyişməsin!
let resultString = result.join('');
// console.log(resultString)


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]
// QEYD - Bu tasklarda "arr" arrayindan istifadə ediləcəkdir.....

//4) Yuxarıdakı arrayda 5 rəqəminin neçə dəfə təkrarlandığını tapın!
let numberToFind = 5;

let count = arr.reduce((accumulator, currentValue) => {
  return currentValue === numberToFind ? accumulator + 1 : accumulator;
}, 0);
// console.log(count);


//5) Yuxarıdakı arraydakı bütün rəqəmlərin cəmini tapın!
let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum);


//6) Arrayda təkrar olunan rəqəmləri artan sıra ilə düzün!
let uniqueArr = [];
let countObj = {};
for (let i = 0; i < arr.length; i++) {
  if (countObj[arr[i]]) {
    countObj[arr[i]]++;
  } else {
    countObj[arr[i]] = 1;
  }
}
for (let key in countObj) {
  if (countObj[key] > 1) {
    uniqueArr.push(Number(key));
  }
}
uniqueArr.sort((a, b) => a - b);
// console.log(uniqueArr);


//7) Arraydakı ən böyük rəqəmi tapın və neçə dəfə təkrarlandığını göstərin!
let maxNumber = arr[0];
let count2 = 1;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxNumber) {
    maxNumber = arr[i];
    count2 = 1;
  } else if (arr[i] === maxNumber) {
    count2++;
  }
}
// console.log(`Massivdəki ən böyük rəqəm: ${maxNumber}`);
// console.log(`Təkrarlanma sayı: ${count2}`);


//8) Random 1-dən 10-a qədər rəqəm generate edin və sonra arrayda həmin rəqəmin olub olmamasını yoxlayın!
let randomNumber = Math.floor(Math.random() * 10) + 1;

// Проверяем наличие числа в массиве
let isNumberInArray = arr.includes(randomNumber);

// console.log(`Random rəqəm: ${randomNumber}`);
// console.log(`Massivdə olub-olmaması yoxlanışı: ${isNumberInArray}`);


//9) Adınızdakı hərflərin sayını tapın və həmin sayın arrayda olub olmamasını yoxlayın: Məsələn Murad adında 5 hərf var və 5 arrayda var!
let myName = 'Nazila';
let nameLength = myName.length;
let isNameLengthInArray = arr.includes(nameLength);

// console.log(`Adda olan hərf sayı: ${nameLength}`);
// console.log(`Alınan rəqəmin massivdə yoxlanışı: ${isNameLengthInArray}`);


//10) Arraydakı ilk 3-ə bölünəndə qalıqda 2 alınan rəqəmi və həmin rəqəmin arraydaki indexini tapın!
// let remainder = arr[0] % arr[1] % arr[2];
// let index = arr.indexOf(remainder);

// console.log(`Остаток от деления первых трех элементов массива: ${remainder}`);
// console.log(`Индекс числа ${remainder} в массиве: ${index}`);

let indexes = []; // find nado
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 2) {
    indexes.push(i);
  }
}

// console.log(`Индексы чисел 2 с остатком 2 при делении на 3 в массиве: ${indexes}`);




//11) arraydaki en boyuk reqemin ilk indexini tapin
//12) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
//13) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
//14) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
//15) 7 reqeminin indexleri cemini tapin.


/////////////////////////////////////////////////////
let arr2 = [
  {
    name:'test',
    key:1
  },
  {
    name:'task',
    key:2
  },
  {
    name:'tanqo',
    key:3
  },
  {
    name:'like',
    key:4
  },
  {
    name:'task',
    key:5
  },
  {
    name:'trust',
    key:6
  },
  {
    name:'test',
    key:7
  },
  {
    name:'last',
    key:8
  },
  {
    name:'tanqo',
    key:9
  },
  {
    name:'elephant',
    key:10
  },
  {
    name:'love',
    key:11
  },
  {
    name:'small',
    key:12
  },
  {
    name:'little',
    key:13
  },
]


//QEYD Bu tasklarda arr2 istifade edilecekdir
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
// 26 Bura da ozunuz arr2 ile ede bileceyiniz en maragli yeni funksionalligi yazin.

// 27 Xaliqenin taski :D
////////////////////////////////
// Dersde edilen switch case taskina esasen artiq girish qiymetleri
// tekce pointden ibaret deil
// exampoint - imtahan bali
// startPoint - imtahana girish bali
// olaraq yerleshdireceksiz
// onceki shertler yerinde qalir sadece eger girish bali 17 den ashagi olarsa
// kesilmek case -ine daxil olsun

