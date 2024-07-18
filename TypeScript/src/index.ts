// interface User {
//     readonly name: string;
//     age: number;
//     rank?: string;
// }

// type Customer = {
//     name: string,
//     age: number,
// }

// const user1: User = {
//     name: 'User 1',
//     age: 18,
// }
// console.log(user1);

// interface Student extends User{
//     school: string;
//     classroom: string;
// }

// const student1:Student = {
//     name: 'Student 1',
//     age: 18,
//     school: 'THPT Minh Khai',
//     classroom: '10A8'
// }

// console.log(student1);

// class Person {
//     protected name: string;
//     age: number;

//     constructor(nameInit: string, ageInit: number){
//         this.name = nameInit;
//         this.age = ageInit;
//     }

//     greet():void{
//         console.log(`Hello ${this.name}`)
//     }

//     sayBye(name:string):void{
//         console.log(`Goodbye ${name}`)
//     }
// }

// const person1 : Person = new Person('person 1', 18);
// console.log(person1);
// person1.greet();
// person1.sayBye('Hoàng');

// class Employee extends Person{
//     employeeId: number;

//     constructor(nameInit: string, ageInit: number, employeeId: number){
//         super(nameInit, ageInit);
//         this.employeeId = employeeId;
//     }

//     greet():void{
//         console.log(`Hello employee ${this.name}`);
//     }
// }

// const employee1 =  new Employee('Employee 1', 20, 123);
// console.log(employee1.employeeId);
// employee1.greet();


// interface Person{
//     name: string;
//     age: number;
//     run(): void;
//     sleep(): void;
// }

// class Student implements Person{
//     name: string;
//     age: number;

//     constructor(name:string, age:number){
//         this.name = name;
//         this.age = age;
//     }
//     run():void{
//         console.log('Đang chạy');
//     }

//     sleep():void{
//         console.log('Đang ngủ')
//     }
// }


// -Quản lý Sách Thư Viện
// +Định nghĩa các kiểu dữ liệu: 
// 	Tạo các interface Book, Member, và Library. 
// 	Book có các thuộc tính như id, title, author, và available (boolean). 
// 	Member có các thuộc tính như id, name, và borrowedBooks (mảng các Book). 
// 	Library có các thuộc tính như books và members.
interface Book{
    id: number;
    title: string;
    author: string;
    available: boolean;
}

interface Member{
    id: number;
    name: string;
    borrowedBooks: Book[];
}

interface Library{
    books: Book[];
    members: Member[];
    addBook(book: Book): void;
    removeBook(bookId: number): void;
    updateBook(book:Book):void;
    addMember(member: Member): void;
    removeMember(memberId: number): void;
    updateMember(member: Member): void;
    borrowBook(memberId: number, bookId: number): void;
    returnBook(memberId: number, bookId: number): void;
}

class Library implements Library{
    books: Book[];
    members: Member[];

    constructor(booksInit: Book[], membersInit: Member[]){
        this.books = booksInit;
        this.members = membersInit;
    }

    addBook(book: Book): void{
        this.books.push(book);
    }

    removeBook(bookId: number):void{
        this.books = this.books.filter(book => book.id !== bookId);
    }

    updateBook(bookUpdate: Book):void{
        const index = this.books.findIndex(book => book.id === bookUpdate.id);
        if(index === -1){
            console.log('Không tìm được !')
        } else{
            this.books[index] = bookUpdate;
        }
    }

    addMember(member: Member): void{
        this.members.push(member);
    }

    removeMember(memberId: number):void{
        this.members = this.members.filter(member => member.id !== memberId);
    }

    updateMember(memberUpdate: Member):void{
        const index = this.members.findIndex(member => member.id === memberUpdate.id);
        if(index === -1){
            console.log('Không tìm được !')
        } else{
            this.members[index] = memberUpdate;
        }
    }

    borrowBook(memberId: number, bookId: number): void {
        const index = this.books.findIndex(book => book.id === bookId);

        if(index === -1){
            console.log('Không tìm thấy sách');
        } else{
            const isExistBook = this.books[index].available;
            if(isExistBook){
                const indexMember = this.members.findIndex(member => member.id === memberId);
                if(index === -1){
                    console.log('Không tìm thấy thành viên');
                } else {
                    this.members[indexMember].borrowedBooks.push(
                        this.books[index]
                    )

                    this.books[index].available = false;

                    console.log('Mượn thành công');
                    console.log(this.members[indexMember].borrowedBooks)
                }
            } else{
                console.log('Sách đã có người mượn')
            }
        }
    }
}

const bookInit: Book[] = [
    {
        id: 1,
        title: 'Book 1',
        author: 'Author 1',
        available: true
    },
    {
        id: 2,
        title: 'Book 2',
        author: 'Author 2',
        available: false
    },
    {
        id: 3,
        title: 'Book 3',
        author: 'Author 3',
        available: true
    }
]

const membersInit: Member[] = [
    {
        id: 1,
        name: 'Member 1',
        borrowedBooks: []
    },
    {
        id: 2,
        name: 'Member 2',
        borrowedBooks: []
    }
]

const library = new Library(bookInit, membersInit);
console.log(library);
// +Quản lý sách: Viết các phương thức trong class Library để thêm, xóa, và cập nhật thông tin sách.
//* Thêm sách
// const newBook: Book = {
//     id: 4,
//     title: 'Nhà giả kim',
//     author: 'Author nhà giả kim',
//     available: true
// }
// library.addBook(newBook);
// console.log(library);
//* Xóa sách
// library.removeBook(2);
// console.log(library);
//* Cập nhật thông tin sách
// const bookUpdate: Book = {
//     id: 3,
//     title: 'Book 3 Update',
//     author: 'Author 3 Update',
//     available: false
// }
// library.updateBook(bookUpdate);
// console.log(library);

// +Quản lý thành viên: Viết các phương thức trong class Library để thêm, xóa, và cập nhật thông tin thành viên.

// +Quản lý mượn trả sách: Viết các phương thức để mượn và trả sách, đảm bảo cập nhật trạng thái available của sách và danh sách borrowedBooks của thành viên.
library.borrowBook(1, 1);
console.log(library);
