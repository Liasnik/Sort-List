const butt_replase = document.querySelector('.butt-3-repl');
butt_replase.addEventListener('click', replaceName);

const button1_1 = document.querySelector('.butt-1-1');
button1_1.addEventListener('click', myClick2_2);
button1_1.addEventListener('click', myClick3_1);

const button1 = document.querySelector('.butt-1');
button1.addEventListener('click', myClick);

const button2 = document.querySelector('.butt-2');
button2.addEventListener('click', myClick2_2);

const button3 = document.querySelector('.butt-4');
button3.addEventListener('click', myClick3_1);

const input = document.querySelector('.text-3');
input.value = JSON.parse(localStorage.getItem('key'));

const inputReplace = document.querySelector('.text-3-replace');
inputReplace.value = JSON.parse(localStorage.getItem('key2'));

const inList = document.querySelector('.text-1');
inList.value = JSON.parse(localStorage.getItem('text'));

function arrKey() {
    const keyWord = document.querySelector('.text-3').value;

    if (!keyWord) {
        alert('Введи ключевые слова!');
        return
    } 
    
    localStorage.setItem('key', JSON.stringify(keyWord));
    
    const arrayKeywords = keyWord.split(' ');

 return arrayKeywords;
}

function arrText() {
    const inText = document.querySelector('.text-1').value;
    
    localStorage.setItem('text', JSON.stringify(inText));

    const arrayFromString = inText.split('\n');
    const uniqArr = [...new Set(arrayFromString)];

     return uniqArr;
}

function myClick() {
    const arrayKeywords = arrKey(); 
    const uniqArray = arrText();

    const newArray = uniqArray.filter(item => { 
        return arrayKeywords.some(allowed => {
         return item.includes(`${allowed}\t`)
        })
  });

     const listWith = newArray.join('\n'); 
     
    document.querySelector('.text-2').value = `${listWith}\n` 

    const newArray2 = uniqArray.filter(item => { 
        return !arrayKeywords.some(forbidden => {
         return item.includes(`${forbidden}\t`)
        })
  });
      
    const listWithout = newArray2.join('\n');

     document.querySelector('.text-4').value = listWithout;
};

function myClick2_2() {
    const arrayKeywords = arrKey(); 
    const uniqArray = arrText();
    
    const newArray = uniqArray.filter(item => { 
          return arrayKeywords.some(allowed => {
           return item.includes(allowed)
          })
    });
        
     const listWithout = newArray.join('\n'); 
     document.querySelector('.text-2').value = listWithout;
}

function myClick3_1() {
    const arrayKeywords = arrKey(); 
    const uniqArray = arrText();

    const newArrey = uniqArray.filter(item => { 
          return !arrayKeywords.some(forbidden => {
           return item.includes(forbidden)
          })
    });
 
     const listWithout = newArrey.join('\n'); 
     document.querySelector('.text-4').value = listWithout;
}

function replaceName() {
    const arrayKeywords = arrKey(); 
    const uniqArray = arrText();

    const newWord = document.querySelector('.text-3-replace').value;

    if (!newWord) {
        alert('Введи ключевые слова!');
        return
    } 
    
    localStorage.setItem('key2', JSON.stringify(newWord));
    
    const arrayNewWords = newWord.split(' ');

function replaceName(array, targetArr, replacementArr) {
    for (let i = 0; i < targetArr.length; i++) {
        for (let j = 0; j < array.length; j++) {
         array[j] = array[j].replace(`${targetArr[i]}\t`,
          `${replacementArr[i]}\t`);
        }
    }
    return array;
}

const newArr = replaceName(uniqArray, arrayKeywords, arrayNewWords);
const newArray = newArr.join('\n');

    document.querySelector('.text-2').value = newArray;
}

document.getElementById('del').onclick = function() {
    localStorage.clear('key');
 }  

