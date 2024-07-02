function giaiPhuongTrinhBacHai(a, b, c) {
    if (a === 0) {
        return "a khác 0";
    }

    let delta = b ** 2 - 4 * a * c;

    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return [x1, x2];
    } else if (delta === 0) {
        let x = -b / (2 * a);
        return [x];
    } else {
        return "Phương trình không có nghiệm thực";
    }
}


let a = 1;
let b = -3;
let c = 2;
let ketQua = giaiPhuongTrinhBacHai(a, b, c);
console.log(ketQua); 
