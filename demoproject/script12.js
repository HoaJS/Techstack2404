
let n = parseInt(prompt("Nhập giá trị của n (2 <= n <= 10):"));


if (n >= 2 && n <= 10) {
    console.log(`Bảng cửu chương của số ${n}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
} else {
    console.log("Vui lòng nhập một số n trong khoảng từ 2 đến 10.");
}
