function demSoUoc(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    return count;
}

// Nhập giá trị của n
let n = parseInt(prompt("Nhập giá trị của n:"));

// Kiểm tra xem n có hợp lệ không
if (n > 0) {
    let soUoc = demSoUoc(n);
    console.log(`Số ${n} có ${soUoc} ước.`);
} else {
    console.log("Vui lòng nhập một số nguyên dương.");
}
