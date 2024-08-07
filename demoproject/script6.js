function tinhGiaTri(n) {
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += 1 / (i * (i + 1));
    }
    return s;
}

// Nhập giá trị của n
let n = parseInt(prompt("Nhập giá trị của n (n >= 2):"));

// Kiểm tra xem n có hợp lệ không
if (n >= 2) {
    let result = tinhGiaTri(n);
    console.log(`Giá trị của biểu thức là: ${result}`);
} else {
    console.log("Vui lòng nhập n lớn hơn hoặc bằng 2.");
}
