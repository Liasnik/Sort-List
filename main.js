const button = document.querySelector('.butt-1')
.addEventListener('click', myClick);

const button2 = document.querySelector('.butt-2')
.addEventListener('click', myClick2_1);

const button3 = document.querySelector('.butt-4')
.addEventListener('click', myClick3_1);

function myClick() {
    const keyWord = document.querySelector('.text-3').value; 
    const inText = document.querySelector('.text-1').value;  
    
    const arrayFromString = inText.split('\n');

    const withUsers = arrayFromString.filter( item => {    
     
        return item.includes(`${keyWord}\t`);
    });

    let mySet = new Set(withUsers)
    let newArrey = [...mySet]

    const listWith = newArrey.join('\n') 
    
    // const listWith = withUsers.join('\n') 
    document.querySelector('.text-2').value += `${listWith}\n` 

    console.log(arrayFromString);
    console.log(listWith);
    console.log(`${listWith}\n`);
    
    const withoutUsers = arrayFromString.filter( item => {    
     
        return !item.includes(`${keyWord}\t`);
    });

    let mySet2 = new Set(withoutUsers)
    let newArrey2 = [...mySet2]

    const listWithout = newArrey2.join('\n')

     document.querySelector('.text-4').value = listWithout
};

// function myClick2() {
//     const keyWord = document.querySelector('.text-3').value;
//     const keyWord2 = document.querySelector('.text-3-2').value;
//     const keyWord3 = document.querySelector('.text-3-3').value;
//     const keyWord4 = document.querySelector('.text-3-4').value;
//     const keyWord5 = document.querySelector('.text-3-5').value;
//     const keyWord6 = document.querySelector('.text-3-6').value;
//     const keyWord7 = document.querySelector('.text-3-7').value;
//     const keyWord8 = document.querySelector('.text-3-8').value;
//     const keyWord9 = document.querySelector('.text-3-9').value;
//     const keyWord10 = document.querySelector('.text-3-10').value;
//     const keyWord11 = document.querySelector('.text-3-11').value;
//     const keyWord12 = document.querySelector('.text-3-12').value;
//     const keyWord13= document.querySelector('.text-3-13').value;
//     const keyWord14 = document.querySelector('.text-3-14').value;

//     const inText = document.querySelector('.text-1').value;  
//     const arrayFromString = inText.split('\n');

//     const withUsers = arrayFromString.filter( item => {    
      
//         if (item.includes(keyWord)) {
//         return item};

//         if (item.includes(keyWord2)) {
//             return item};

//         if (item.includes(keyWord3)) {
//             return item};

//         if (item.includes(keyWord4)) {
//             return item};
            
//         if (item.includes(keyWord5)) {
//             return item};
            
//         if (item.includes(keyWord6)) {
//             return item};

//         if (item.includes(keyWord7)) {
//             return item};
            
//         if (item.includes(keyWord8)) {
//             return item};

//         if (item.includes(keyWord9)) {
//             return item};

//         if (item.includes(keyWord10)) {
//             return item};
            
//         if (item.includes(keyWord11)) {
//             return item};  
            
//         if (item.includes(keyWord12)) {
//             return item};

//         if (item.includes(keyWord13)) {
//             return item};
            
//         if (item.includes(keyWord14)) {
//             return item};   
// });

//         let mySet = new Set(withUsers)
//         let newArrey = [...mySet]

//         const listWith = newArrey.join('\n')
    
//     document.querySelector('.text-2').value = `${listWith}\n`
// };

// function myClick3() {
//     const keyWord = document.querySelector('.text-3').value;
//     const inText = document.querySelector('.text-1').value;

//     const arrayFromString = inText.split('\n');

//     const withoutUsers = arrayFromString.filter( item => {    
      
//         if ( !item.includes(keyWord)) {
//             return item;
//         }         
//     })

//     let mySet2 = new Set(withoutUsers)
//     let newArrey2 = [...mySet2]

//     const listWithout = newArrey2.join('\n')

//      document.querySelector('.text-4').value = listWithout;
// };

function myClick2_1() {
    const keyWord = document.querySelector('.text-3').value;
    const arrayKeywords = keyWord.split(' ')
    
    console.log(arrayKeywords);

    const inText = document.querySelector('.text-1').value;  
    const arrayFromString = inText.split('\n');

    console.log(arrayFromString);
  
    let result = [] 

    arrayFromString.filter( item => { 
           
      for (let i = 0; i < arrayKeywords.length; i++ ) {
         
        if (item.includes(arrayKeywords[i])) {
            result.push(item)
        }
      }
        return result
      });

      console.log(result);

      let mySet = new Set(result)
      let newArrey = [...mySet]

     const listWithout = newArrey.join('\n'); 
    document.querySelector('.text-2').value = listWithout;
}

function myClick3_1() {
    const keyWord = document.querySelector('.text-3').value;
    const arrayKeywords = keyWord.split(' ')

    //console.log(typeof arrayKeywords);
    //console.log(arrayKeywords);

    const inText = document.querySelector('.text-1').value;  
    const arrayFromString = inText.split('\n');

    console.log(arrayFromString);
  
    let result = [] 

    arrayFromString.filter( item => { 
           
      for (let i = 0; i < arrayKeywords.length; i++ ) {
         
        if (item.includes(arrayKeywords[i])) {
            result.push(item)
        }       
       
        // console.log(result);
        // console.log(item);
        // console.log(arrayKeywords[i]);
        }

        return result
      });
   
      console.log(result);
   
      let mySet = new Set(result)
      let newArrey = [...mySet]
      
     const listWithout = newArrey.join('\n'); 
    document.querySelector('.text-4').value = listWithout;
}
