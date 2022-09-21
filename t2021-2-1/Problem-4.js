
// Problem-4:  Get the total count of number list in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
//     (examples)
//     input: [1,2,8,9,12,46,76,82,15,20,30]
//     Output:
//         {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}
//
// Code:

const mulArr = [1,2,3,4,5,6,7,8,9]              //check multiple of 
const inputArr = [1,2,8,9,12,46,76,82,15,20,30]   // input number list

const result = getMultipleCount(mulArr, inputArr)
console.log(result);

function getMultipleCount(mulArr, inputArr ) {
    let outputObj = {}

    for (let i = 0; i<mulArr.length; i++) {
      
        let count = 0;
        for (let j = 0; j<inputArr.length; j++) {
           
            if (inputArr[j] % mulArr[i] == 0) {
                count ++
            }  
        }
       outputObj[mulArr[i]] = count;
    }
    return outputObj;
}