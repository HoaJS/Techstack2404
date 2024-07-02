function kiemTraTamGiac(a, b, c) {
    // Kiểm tra điều kiện tồn tại của tam giác
    if (a <= 0 || b <= 0 || c <= 0) {
        return false; // Một trong các cạnh không dương, không thể tạo thành tam giác
    }
    if (a + b > c && a + c > b && b + c > a) {
        return true; // Tạo thành tam giác
    } else {
        return false; // Không tạo thành tam giác
    }
}

// Ví dụ:
let a = 3;
let b = 4;
let c = 5;
let ketQua = kiemTraTamGiac(a, b, c);
console.log("Ba số " + a + ", " + b + ", " + c + " " + (ketQua ? "tạo thành" : "không tạo thành") + " tam giác.");
