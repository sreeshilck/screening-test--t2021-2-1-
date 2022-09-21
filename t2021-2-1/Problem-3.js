// Problem-3:  With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]

// Output: (examples)
//     1) input a = 1, then output : 1
//     2) input a = 2, then output : 1
//     3) input a = 3, then output : 1, 3, 5
//     4) input a = 4, then output : 1, 3, 5
//     5) input a = 5, then output : 1, 3, 5, 7, 9
//     6) input a = 6, then output : 1, 3, 5, 7, 9
//     .
//     .
//     7) input a = x, then output : 1, 3, 5, 7, .......

const generateSeries = (input) => {
    let temp = 1
    if (input%2 == 0) {
        for(let i=0; i<input-1; i++) {
            console.log(temp);
            temp +=2;
        }
    } else {
        for(let i=0; i<input; i++) {
            console.log(temp); 
            temp += 2
        } 
    }
}

let input = 5
generateSeries(input)