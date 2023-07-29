let fullName = 'Nazila Karimova Nizami';

// 1) Ad soyad ata adınızı bütöv şəkildə götürün və array şəklində hərflərinə ayırın!

// let letters = fullName.split('');
// console.log(letters);


// 2) Hərflərə ayrılmış arrayda soyadınızı adınızın önünə keçirən alqoritm yazın!

// let letters = fullName.split('');
// let result = letters.splice(7, 9);
// console.log(result)
// let value = result.concat(letters);
// console.log(value)
// console.log(fullName)


// 3) Alınan yeni arrayi stringə çevirin ama ilk array dəyişməsin!

// let resultString = value.join('');
// console.log(resultString);
// console.log(fullName);

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]
// QEYD - Bu tasklarda "arr" arrayindan istifadə ediləcəkdir.....

// 4) Yuxarıdakı arrayda 5 rəqəminin neçə dəfə təkrarlandığını tapın!

// let number5ToFind = 5;

// let count = arr.reduce((accumulator, currentValue) => {
//   return currentValue === number5ToFind ? accumulator + 1 : accumulator;
// }, 0);
// console.log(`"5" rəqəmi arrayda ${count} dəfə təkrarlanır`);
// console.log(arr);


// 5) Yuxarıdakı arraydakı bütün rəqəmlərin cəmini tapın!

// let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum);
// console.log(arr);


// 6) Arrayda təkrar olunan rəqəmləri artan sıra ilə düzün!

// let uniqueArr = [];
// let countObj = {};
// for (let i = 0; i < arr.length; i++) {
//   if (countObj[arr[i]]) {
//     countObj[arr[i]]++;
//   } else {
//     countObj[arr[i]] = 1;
//   }
// }
// for (let key in countObj) {
//   if (countObj[key] > 1) {
//     uniqueArr.push(Number(key));
//   }
// }
// uniqueArr.sort((a, b) => a - b);
// console.log(uniqueArr);
// console.log(arr);


// 7) Arraydakı ən böyük rəqəmi tapın və neçə dəfə təkrarlandığını göstərin!

// let maxNumber = arr[0];
// let count2 = 1;
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > maxNumber) {
//     maxNumber = arr[i];
//     count2 = 1;
//   } else if (arr[i] === maxNumber) {
//     count2++;
//   }
// }
// console.log(`Massivdəki ən böyük rəqəm: ${maxNumber}`);
// console.log(`Təkrarlanma sayı: ${count2}`);
// console.log(arr);


// 8) Random 1-dən 10-a qədər rəqəm generate edin və sonra arrayda həmin rəqəmin olub olmamasını yoxlayın!

// let randomNumber = Math.floor(Math.random() * 10) + 1;

// // Arrayda olub-olmamasının yoxlanışı
// let isNumberInArray = arr.includes(randomNumber);

// console.log(`Random rəqəm: ${randomNumber}`);
// console.log(`Massivdə olub-olmaması yoxlanışı: ${isNumberInArray}`);
// console.log(arr);


// 9) Adınızdakı hərflərin sayını tapın və həmin sayın arrayda olub olmamasını yoxlayın: Məsələn Murad adında 5 hərf var və 5 arrayda var!

// let myName = 'Nazila';
// let nameLength = myName.length;
// let isNameLengthInArray = arr.includes(nameLength);

// console.log(`Adda olan hərf sayı: ${nameLength}`);
// console.log(`Alınan rəqəmin massivdə yoxlanışı: ${isNameLengthInArray}`);
// console.log(arr);


// 10) Arraydakı ilk 3-ə bölünəndə qalıqda 2 alınan rəqəmi və həmin rəqəmin arraydaki indexini tapın!

// // find() method ilə 3-ə bölərək qalığı 2 olan ədədi tapmaq:
// let foundNumber = arr.find((number) => number % 3 === 2);
// // indexOf() istifadə edərək tapılan rəqəmin indeksi müəyyən edirik
// let index = arr.indexOf(foundNumber);

// console.log("Tapılmış rəqəm:", foundNumber);
// console.log("Tapılmış rəqəmin indeksi:", index);
// console.log(arr);


// 11) Arraydakı ən böyük rəqəmin ilk indexini tapın!

// let result = arr.reduce((acc, curr, index) => (curr > arr[acc] ? index : acc), 0);
// console.log("Arraydakı ən böyük rəqəmin ilk indeksi:", result);
// console.log(arr);


// 12) 4 rəqəminin arrayin hansı indexlərində olduğunu göstərin!

// let targetNumber = 4;
// let indexes = [];

// arr.forEach((num, index) => {
//   if (num === targetNumber) {
//     indexes.push(index);
//   }
// });

// console.log('4 rəqəminin arraydəki indeksləri:', indexes);
// console.log(arr);


// 13) 5 rəqəminin arraydakı ən böyük və ən kiçik indexlərini tapın!

// let targetNumber1 = 5;
// let minIndex = arr.indexOf(targetNumber1);
// let maxIndex = arr.lastIndexOf(targetNumber1);

// console.log('5 rəqəminin arraydakı ən kiçik indeksi', minIndex);
// console.log('5 rəqəminin arraydakı ən böyük indeksi', maxIndex);
// console.log(arr);


// 14) "arr" - arrayindən rəqəmləri 2-dən böyük olan yeni array yaradın və alınmış arrayla "arr" arrayinin uzunluqları fərqini hesablayın!

// 2-dən böyük olan yeni array yaradırıq:
// let newArr = arr.filter(num => num > 2);

// //arr и newArr arasındakı fərqi tapırıq:
// let difference = arr.length - newArr.length;

// console.log('2-dən böyük olan yeni array', newArr);
// console.log('arr и newArr arasındakı fərq:', difference);
// console.log(arr);


// 15) 7 rəqəminin indexləri cəmini tapın!

// let sumOfIndexes = arr.reduce((acc, num, index) => (num === 7) ? acc + index : acc, 0);
// console.log(`7 rəqəminin indeksləri cəmi: ${sumOfIndexes}`);
// console.log(arr);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
//QEYD Bu task-larda arr2 istifadə ediləcəkdir!!!


// 16) arr2-də "name"-i "t" hərfi ilə başlayan obyektləri yeni arraya yığın!

// let arrWithT = arr2.filter(obj => obj.name.startsWith('t'));
// console.log(arrWithT);
// console.log(arr2);


// 17) arr2-də "name"-i "t" hərfi ilə başlayıb "t" hərfi ilə bitən obyektlərin sayını tapın!

// let count1 = arr2.reduce((sum, element) => {
//   if (element.name.startsWith('t') && element.name.endsWith('t')) {
//     return sum + 1;
//   }
//   return sum;
// }, 0);
// console.log(`"t" hərfi ilə başlayıb "t" hərfi ilə bitən obyektlərin sayı: ${count1}`);
// console.log(arr2);


// 18) arr2 de "name"-i "t" hərfi ilə başlayıb "t" hərfi ilə bitən obyektlərin "key"- lərinin cəmini tapın!

// let sumOfKeys = arr2.reduce((sum, obj) => {
//   if (obj.name.startsWith('t') && obj.name.endsWith('t')) {
//     return sum + obj.key;
//   }
//   return sum;
// }, 0);

// console.log('"key"-lərin cəmi:' , sumOfKeys);
// console.log(arr2);


// 19) arr2-də "name"-i "e" hərfi ilə bitən obyeklərdəki name-in dəyərini "SuperDev" sözü ilə əvəzləyin!

// let updatedArr = arr2.map((element) => {
//   if (element.name[element.name.length - 1] === 'e') {
//     return { name: 'SuperDev', key: element.key };
//   }
//   return element;
// });

// console.log('"SuperDev" sözü ilə əvəz olunmuş yeni array:' , updatedArr);
// console.log(arr2);


// 20) arr2-də "name"-i ən uzun olan obyektin key-ini tapın!

// let maxNameLength = arr2.reduce((maxLength, element) => {
//   if (element.name.length > maxLength) {
//     return element.name.length;
//   }
//   return maxLength;
// }, 0);

// let key = arr2.find((element) => element.name.length === maxNameLength).key;

// console.log(`"key" obyekti, hansıki ən uzun "name"-i olan: ${key}`);
// console.log(arr2);


// 21) arr2-də "name"-i ən uzun olan obyektin indexin kvadratını hesablayın!

// let maxNameLength1 = 0;
// let maxNameIndex = -1;

// arr2.forEach((element, index) => {
//   if (element.name.length > maxNameLength1) {
//     maxNameLength1 = element.name.length;
//     maxNameIndex = index;
//   }
// });

// let name = arr2[maxNameIndex].name;
// let squareIndex1 = maxNameIndex * maxNameIndex;

// console.log(`"name"-i ən uzun olan: ${name}`);
// console.log(`İndeksin kvadratı: ${squareIndex1}`);
// console.log(arr2);


// 22) arr2-də "name"-inin uzunluğu 4 olan obyektlərdən ibarət yeni array yaradın!

// //1-ci variant for ilə tapılması
// let newArray = [];

// //  arr2 hər birinin üzərindən tək-tək keçirik
// for (let i = 0; i < arr2.length; i++) {
//   let currentName = arr2[i].name;

//   // name uzunluğu 4 hərfdən ibarət  olmasını yoxlayırıq
//   if (currentName.length === 4) {
//     newArray.push(arr2[i]); // yeni massivə əlavə edirik
//   }
// }

// console.log(newArray);
// console.log(arr2);

//2-ci variant filter() ilə daha qısa yolla tapılması
// let filteredArr = arr2.filter((element) => element.name.length === 4);

// console.log(filteredArr);
// console.log(arr2);


// 23) arr2-də ən böyük "key"-i olan obyektin "name"-i ni tapın!

//1-ci variant for-la tapmaq
// let maxKey1 = arr2[0].key; // təxmini
// let maxKeyName = arr2[0].name; // max olan name burda saxlayırıq

// // arr2 hər biri üzərindən tək-tək keçirik, 2ci elementdən başlayaraq (index: 1)
// for (let i = 1; i < arr2.length; i++) {
//   let currentKey = arr2[i].key;

//   // təxmin etdiyimiz "key" ilə əlimizdə olan "key" müqayisə edirik
//   if (currentKey > maxKey1) {
//     maxKey1 = currentKey;
//     maxKeyName = arr2[i].name; // tapdığımız max "key" burda yadda saxlayırıq
//   }
// }

// console.log('ən böyük "key"-i olan obyekt "name":' , maxKeyName);
// console.log(arr2);

//2-ci variant reduce and find() ilə tapmaq
// let maxKey = arr2.reduce((max, element) => {
//   if (element.key > max) {
//     return element.key;
//   }
//   return max;
// }, 0);

// let name = arr2.find((element) => element.key === maxKey).name;

// console.log(`ən böyük "key"-i olan obyekt "name": ${name}`);
// console.log(arr2);


// 24) arr2-də tərkibində 2 'L' hərfi olan obyekt(lər)in index(lər)ini tapın!

//1-ci variant for ilə tapmaq
// let indexesWithTwoL = [];

// for (let i = 0; i < arr2.length; i++) {
//   let name = arr2[i].name;
//   let countL = name.split('l').length - 1;

//   if (countL === 2) {
//     indexesWithTwoL.push(i);
//   }
// }

// console.log('2 dənə L hərfi olan obyektin indeksləri:' , indexesWithTwoL);
// console.log(arr2);


//2-ci variant map and filter istifadə edərək
// let filteredIndexes = arr2
//   .map((element, index) => ({ name: element.name, index: index }))
//   .filter((element) => (element.name.match(/l/g) || []).length === 2)
//   .map((element) => element.index);

// console.log('2 dənə L hərfi olan obyektin indeksləri:' , filteredIndexes);
// console.log(arr2);


// 25) arr2-də tərkibində 2 't' hərfi olan obyekt(lər)in key(lər)ini tapın!

// //1-ci variant for ilə tapmaq
// let keysWithTwoT = [];

// for (let i = 0; i < arr2.length; i++) {
//   let name = arr2[i].name;
//   let countT = name.split('t').length - 1;

//   if (countT === 2) {
//     keysWithTwoT.push(arr2[i].key);
//   }
// }

// console.log('2 ədəd "t" hərfi olan obyektlərin keyləri :' , keysWithTwoT);
// console.log(arr2);

// 2-ci variant map and filter() ilə tapmaq
// let filteredKeys = arr2
//   .filter((element) => (element.name.match(/t/g) || []).length === 2)
//   .map((element) => element.key);

// console.log('2 ədəd "t" hərfi olan obyektlərin keyləri :' , filteredKeys);
// console.log(arr2);


// 26) Bura da özünüz arr2 ilə edə biləcəyiniz ən maraqlı yeni funksionallığı yazın!

// //1-ci versiya -  sortirovka edib eyni uzunluqda olan name-ləri ardıcıllıqda düzürük:
// function compareObjects(a, b) {
//   if (a.name.length !== b.name.length) {
//     return a.name.length - b.name.length;
//   } else {
//     return a.key - b.key;
//   }
// }

// // arr2 massivi sortiruem
// arr2.sort(compareObjects);

// console.log(arr2);


// //2-ci versiya massivdə olan name-lərin uzunluğuna görə yeni massiv yaradacaq:
// let associativeArr = arr2.reduce((result, element) => {
//   let key = element.name.length;
//   if (result[key]) {
//     result[key].push(element);
//   } else {
//     result[key] = [element];
//   }
//   return result;
// }, {});

// console.log(associativeArr);
// console.log(arr2);
