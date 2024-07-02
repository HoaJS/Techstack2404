function mergeArrays(A1, A2) {
    let result = [];

    for (let elem of A1) {
        if (!result.includes(elem) && !A2.includes(elem)) {
            result.push(elem);
        }
    }

   
    for (let elem of A2) {
        if (!result.includes(elem) && !A1.includes(elem)) {
            result.push(elem);
        }
    }

    return result;
}

let A1 = [1, 2, "a"];
let A2 = [1, 3, "b"];
let output = mergeArrays(A1, A2);
console.log(output); // Output: [2, "a", "b", 3]

  
  