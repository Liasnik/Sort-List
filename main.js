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

    const newArray2 = uniqArray.filter(item => { 
        return !arrayKeywords.some(forbidden => {
         return item.includes(`${forbidden}\t`)
        })
  });
      
    const listWithout = newArray2.join('\n');

    areaWithoutKey.value = listWithout;
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
        for (let i = 0; i < targetArr.length; i++) {
            for (let j = 0; j < array.length; j++) {
            array[j] = array[j].replace(`${targetArr[i]}\t`,
            `${replacementArr[i]}\t`);
            }
        } 
        return array;
    }

    const newArr = replaceValues(uniqArray, arrayKeywords, arrayNewValues);
    const newArray = newArr.join('\n');

    document.querySelector('#with-keywords').value = newArray;
}

document.getElementById('del').onclick = function() {
    localStorage.clear('key');
 }  

