
let m = parseInt(prompt("Nhập giá trị của m (m >= 2):"));
let n = parseInt(prompt("Nhập giá trị của n (n >= 2):"));


if (m >= 2 && n >= 2) {
    
    let row = '';
    for (let i = 0; i < m; i++) {
        row += '* ';
    }

   
    for (let i = 0; i < n; i++) {
        console.log(row);
    }
} else {
    console.log("Vui lòng nhập một số nguyên lớn hơn hoặc bằng 2.");
}
