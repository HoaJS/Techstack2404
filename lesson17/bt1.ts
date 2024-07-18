// Biến fullName lưu trữ tên đầy đủ của một người.
let fullName: string = "Nguyen Van A";

// Biến age lưu trữ tuổi của người đó.
let age: number = 30;

// Biến isStudent biểu thị người đó có phải là sinh viên hay không.
let isStudent: boolean = true;
function printId(param: string | number): void {
    if (typeof param === 'string') {
        console.log(`ID: ${param}`);
    } else if (typeof param === 'number') {
        console.log(`Employee ID: ${param}`);
    } else {
        console.log('Invalid ID');
    }
}

// Ví dụ sử dụng hàm printId
printId("ABC123"); // In ra: ID: ABC123
printId(456);      // In ra: Employee ID: 456
printId(true);     // In ra: Invalid ID
// Định nghĩa interface Person
interface Person {
    name: string;
    age: number;
}

// Sử dụng interface Person để khai báo biến person
let person: Person = {
    name: "John Doe",
    age: 25
};
