function themKyTu0(s, l) {
    while (s.length < l) {
        s = '0' + s;
    }
    return s;
}


let s = prompt("Nhập chuỗi s:");
let l = parseInt(prompt("Nhập số l:"));

if (/^\d+$/.test(s) && Number.isInteger(l) && l >= 0) {
    let ketQua = themKyTu0(s, l);
    console.log(`Chuỗi mới là: ${ketQua}`);
} else {
    console.log("Vui lòng nhập một chuỗi chỉ gồm các chữ số và một số nguyên dương.");
}
