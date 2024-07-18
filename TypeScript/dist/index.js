"use strict";
// interface User {
//     readonly name: string;
//     age: number;
//     rank?: string;
// }
class Library {
    constructor(booksInit, membersInit) {
        this.books = booksInit;
        this.members = membersInit;
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(bookId) {
        this.books = this.books.filter(book => book.id !== bookId);
    }
    updateBook(bookUpdate) {
        const index = this.books.findIndex(book => book.id === bookUpdate.id);
        if (index === -1) {
            console.log('Không tìm được !');
        }
        else {
            this.books[index] = bookUpdate;
        }
    }
    addMember(member) {
        this.members.push(member);
    }
    removeMember(memberId) {
        this.members = this.members.filter(member => member.id !== memberId);
    }
    updateMember(memberUpdate) {
        const index = this.members.findIndex(member => member.id === memberUpdate.id);
        if (index === -1) {
            console.log('Không tìm được !');
        }
        else {
            this.members[index] = memberUpdate;
        }
    }
    borrowBook(memberId, bookId) {
        const index = this.books.findIndex(book => book.id === bookId);
        if (index === -1) {
            console.log('Không tìm thấy sách');
        }
        else {
            const isExistBook = this.books[index].available;
            if (isExistBook) {
                const indexMember = this.members.findIndex(member => member.id === memberId);
                if (index === -1) {
                    console.log('Không tìm thấy thành viên');
                }
                else {
                    this.members[indexMember].borrowedBooks.push(this.books[index]);
                    this.books[index].available = false;
                    console.log('Mượn thành công');
                    console.log(this.members[indexMember].borrowedBooks);
                }
            }
            else {
                console.log('Sách đã có người mượn');
            }
        }
    }
}
const bookInit = [
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
];
const membersInit = [
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
];
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
