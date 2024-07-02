
function timUocChungLonNhat(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function timBoiChungNhoNhat(a, b) {
    return (a * b) / timUocChungLonNhat(a, b);
}

// Nhập giá trị của m và n
let m = parseInt(prompt("Nhập giá trị của m (m > 0):"));
let n = parseInt(prompt("Nhập giá trị của n (n > 0):"));

