const butt_replase = document.querySelector('#btn-replace');
butt_replase.addEventListener('click', replaceName);

const button_two_areas = document.querySelector('#btn-two-areas');
button_two_areas.addEventListener('click', splitList);

const button_strict_key = document.querySelector('#btn-strict-key');
button_strict_key .addEventListener('click', strictSplit);

const button_with_keywords= document.querySelector('#btn-with-keywords');
button_with_keywords.addEventListener('click', createWithKeys);

const button_without_keywords = document.querySelector('#btn-without-keywords');
button_without_keywords.addEventListener('click', createWithoutKeys);

const input_keywords = document.querySelector('#input-keywords');
input_keywords.value = JSON.parse(localStorage.getItem('key'));

const input_replace = document.querySelector('#input-replace');
input_replace.value = JSON.parse(localStorage.getItem('key2'));

const incoming_list = document.querySelector('#incoming-list');
//incoming_list.value = JSON.parse(localStorage.getItem('text'));

const areaWithKey = document.querySelector('#with-keywords');

const areaWithoutKey =document.querySelector('#without-keywords');

function arrKey() {
    const keyWord = input_keywords.value;

    if (!keyWord) {
        alert('Введи ключевые слова!');
        return
    } 
    
    localStorage.setItem('key', JSON.stringify(keyWord));
    
    const arrayKeywords = keyWord.split(' ');

 return arrayKeywords;
}

function arrText() {
    const inText = incoming_list.value;
    
    //localStorage.setItem('text', JSON.stringify(inText));

    const arrayFromString = inText.split('\n');
    const uniqArr = [...new Set(arrayFromString)];

     return uniqArr;
}

function strictSplit() {
    const arrayKeywords = arrKey(); 
    const uniqArray = arrText();

    const newArray = uniqArray.filter(item => { 
        return arrayKeywords.some(allowed => {
         return item.includes(`${allowed}\t`)
        })
  });

     const listWith = newArray.join('\n'); 
     
     areaWithKey.value = `${listWith}\n`;
    // document.querySelector('#with-keywords').value = `${listWith}\n` 

    const newArray2 = uniqArray.filter(item => { 
        return !arrayKeywords.some(forbidden => {
         return item.includes(`${forbidden}\t`)
        })
  });
      
    const listWithout = newArray2.join('\n');

    areaWithoutKey.value = listWithout;
    //  document.querySelector('#without-keywords').value = listWithout;
};

function splitList() {
    createWithKeys();
    createWithoutKeys(); 
}

function createWithKeys() {
    const arrayKeywords = arrKey(); 
    const uniqArray = arrText();
    
    const newArray = uniqArray.filter(item => { 
          return arrayKeywords.some(allowed => {
           return item.includes(allowed)
          })
    });
        
     const listWithout = newArray.join('\n'); 
     areaWithKey.value = listWithout;
}

function createWithoutKeys() {
    const arrayKeywords = arrKey(); 
    const uniqArray = arrText();

    const newArrey = uniqArray.filter(item => { 
          return !arrayKeywords.some(forbidden => {
           return item.includes(forbidden)
          })
    });
 
     const listWithout = newArrey.join('\n'); 
     areaWithoutKey.value = listWithout;
}

function replaceName() {
    const arrayKeywords = arrKey(); 
    const uniqArray = arrText();

    const newValues = document.querySelector('#input-replace').value;

    if (!newValues) {
        alert('Введи ключевые слова!');
        return
    } 
    
    localStorage.setItem('key2', JSON.stringify(newValues));
    
    const arrayNewValues = newValues.split(' ');

    function replaceValues(array, targetArr, replacementArr) {
        if (targetArr.length !== replacementArr.length) {
           alert('Разное количество введённых значений! Введите корректные данные!')
        } else {
       
            for (let i = 0; i < targetArr.length; i++) {
                for (let j = 0; j < array.length; j++) {
                    array[j] = array[j].replace(
                        `${targetArr[i]}\t`,
                        `${replacementArr[i]}\t`
                    );
                }
            }          
            return array;
        }
    }

    const newArr = replaceValues(uniqArray, arrayKeywords, arrayNewValues);
    const newArray = newArr.join('\n');

    document.querySelector('#with-keywords').value = newArray;
}

document.getElementById('del').onclick = function() {
    localStorage.clear('key');
 }  


//=================== По одному слову может менять : 

// function clickReplace() {
//     const arrayKeywords = arrKey();; 
//     const uniqArray = arrText();

//     const newWord = document.querySelector('.text-3-replace').value;
    
    
//     function replaceData(array, before, after) {
//         return array.map((elem) => elem.replace(`${before}\t`, `${after}\t`))
//     }

//     const newArray = replaceData(uniqArray, arrayKeywords, newWord)

//     const newArray8 = newArray.join('\n');
//     document.querySelector('.text-2').value = newArray8;
// }




  // const beforeName1 = document.querySelector('.text-3').value; //['Натаи', 'Женя', 'Роза'];
// const arrayBadName = keyWord.split(' ')
// let inText = document.querySelector('.text-1').value;
// const arrayFromString = inText.split('\n');

// const inArrayList = ['Натали\t Иванова', 'Жениться\t Петровна', 'Петр\t Петрович', 'Иван\t Наталиевич ', 'Роза\t Ивановна'];
// const before = ['Натали'];
// const after = ['Натлья'];  

// const beforeName1 = document.querySelector('.text-3').value; //['Натаи', 'Женя', 'Роза'];
// const arrayBadName = keyWord.split(' ')
// let inText = document.querySelector('.text-1').value;
// const arrayFromString = inText.split('\n'); 

// function replaceName() {     
//     console.log(inText);
    
//     for (let i = 0; i < arrayBadName.length; i++) {
         
//         wile (arrayFromString.indexOf(arrayBadName[i]) != -1) {
//             arrayFromString = arrayFromString.replace(arrayBadName[i], star(arrayBadName[i].length))
//         }
//     }
//     document.querySelector('.text-4').value = newArrey;
// }

// function star(n) {
//     let out = '';
//     for (let i = 0; i < n; i++) {
//         out += '*';
//     }
//     return out;
// }



// function star(n) {
//     let out = '';
//     for (let i = 0; i < n; i++) {
//         out += '*';
//     }
//     return out;
//}


// const array8 = ['Жениться', 'Василий', 'Жениться', 'Петя', 'Маша']

// const before = 'Жениться';
// const after = 'Женя';

// function replaceData(array, before, after) {
//  return array.map((elem) => elem.replace(before, after))
// }

// const newArrey = replaceData(array8, before, after)

// console.log(array8)
// console.log(newArrey)




//=================================================================

//=================================================================

// //
// Наталья Василий Наташа Петя Наталья Маша

//console.log(replaceName(array))
//-------------

//const price = 100_000_000
//console.log(price) // 10000000

//-----------------------

//---- возведение в степень

//console.log(2 ** 10) // 1024
//console.log(Math.pow(2, 10)) // 1024

//=====================================================================
//                     ЗАДАНИЯ С СОБЕСЕДОВАНИЯ:
//======================================================================
// let count = 0

// function id() {    
//     return count++
// }

// console.log(id()) //0
// console.log(id()) //1
// console.log(id()) //2
// console.log(id()) //3
// console.log(id()) //4

//----------

// count = 1         

// const id = function getID() {

//     return  count++;
// }
   
// console.log(id()) //1
// console.log(id()) //2
// console.log(id()) //3

//--------------------------

//const arr = [1, 8, 9, 3, 5, 2, 6, 4, 7]

// console.log(arr.sort((a, b) => a - b ) ) // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//---------------------------

// function myClick2_1() {
//     const keyWord = document.querySelector('.text-3').value;
//     localStorage.setItem('key', JSON.stringify(keyWord));
    
//     const arrayKeywords = keyWord.split(' ');

//     const inText = document.querySelector('.text-1').value;
//     localStorage.setItem('text', JSON.stringify(inText));
    
//     const arrayFromString = inText.split('\n');
  
//     const result = []; 

//     arrayFromString.filter( item => { 
           
//       for (let i = 0; i < arrayKeywords.length; i++ ) {
         
//         if (item.includes(arrayKeywords[i])) {
//             result.push(item);
//         }
//       }
//         return result;
//       });

//       //console.log(result);
     
//       let uniqArrey = [...new Set(result)];

//      const listWithout = uniqArrey.join('\n'); 
//     document.querySelector('.text-2').value = listWithout;
// }
