function timSoNhoNhatChiaHetChoX(a, b, x) {
    // Tìm số đầu tiên lớn hơn hoặc bằng a và chia hết cho x
    for (let i = a; i <= b; i++) {
        if (i % x === 0) {
            return i;
        }
    }
    return -1; // Nếu không có số nào thỏa mãn
}

// Nhập giá trị của a, b, x
let a = parseInt(prompt("Nhập giá trị của a:"));
let b = parseInt(prompt("Nhập giá trị của b (b > a):"));
let x = parseInt(prompt("Nhập giá trị của x:"));

// Kiểm tra xem a có nhỏ hơn b không
if (a < b) {
    let result = timSoNhoNhatChiaHetChoX(a, b, x);
    if (result !== -1) {
        console.log(`Số nhỏ nhất trong khoảng từ ${a} đến ${b} chia hết cho ${x} là: ${result}`);
    } else {
        console.log(`Không có số nào trong khoảng từ ${a} đến ${b} chia hết cho ${x}`);
    }
} else {
    console.log("Vui lòng đảm bảo a < b.");
}






