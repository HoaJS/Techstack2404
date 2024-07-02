
let n = parseInt(prompt("Nhập giá trị của n (n >= 2):"));


if (n >= 2) {
   
    let row = '';
    for (let i = 0; i < n; i++) {
        row += '* ';
    }

    for (let i = 0; i < n; i++) {
        console.log(row);
    }
} else {
    console.log(" nhập một số nguyên lớn hơn hoặc bằng 2.");
}
