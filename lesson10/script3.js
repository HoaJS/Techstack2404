function kiemTraNgayThangNam(day, month, year) {
    // Kiểm tra năm
    if (year < 0) {
        return false; // Năm phải là số dương
    }

    // Kiểm tra tháng
    if (month < 1 || month > 12) {
        return false; // Tháng phải từ 1 đến 12
    }

    // Kiểm tra ngày
    let daysInMonth = new Date(year, month, 0).getDate(); // Lấy số ngày trong tháng
    if (day < 1 || day > daysInMonth) {
        return false; // Ngày phải từ 1 đến số ngày trong tháng
    }

    return true; // Ngày, tháng, năm hợp lệ
}

// Ví dụ:
let day = 31;
let month = 12;
let year = 2024;
let ketQua = kiemTraNgayThangNam(day, month, year);
console.log("Ngày " + day + "/" + month + "/" + year + " " + (ketQua ? "là" : "không là") + " một ngày hợp lệ.");
