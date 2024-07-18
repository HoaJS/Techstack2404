"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/**
 * Lớp BankAccount đại diện cho một tài khoản ngân hàng.
 */
class BankAccount {
    /**
     * Tạo một tài khoản ngân hàng mới.
     * @param accountNumber - Số tài khoản ngân hàng.
     * @param accountHolder - Tên chủ tài khoản.
     * @param balance - Số dư tài khoản, mặc định là 0.
     */
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
}
/**
 * Lớp BankAccountManager thực hiện các phương thức để quản lý danh sách các tài khoản ngân hàng.
 */
class BankAccountManager {
    constructor() {
        this.accounts = new Map();
    }
    createAccount(account) {
        if (this.accounts.has(account.accountNumber)) {
            throw new Error('Account already exists.');
        }
        this.accounts.set(account.accountNumber, account);
    }
    closeAccount(accountNumber) {
        if (!this.accounts.has(accountNumber)) {
            throw new Error('Account does not exist.');
        }
        this.accounts.delete(accountNumber);
    }
    getAccountByNumber(accountNumber) {
        return this.accounts.get(accountNumber);
    }
    listAllAccounts() {
        return Array.from(this.accounts.values());
    }
    deposit(accountNumber, amount) {
        const account = this.getAccountByNumber(accountNumber);
        if (!account) {
            throw new Error('Account does not exist.');
        }
        if (amount <= 0) {
            throw new Error('Deposit amount must be greater than zero.');
        }
        account.balance += amount;
    }
    withdraw(accountNumber, amount) {
        const account = this.getAccountByNumber(accountNumber);
        if (!account) {
            throw new Error('Account does not exist.');
        }
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be greater than zero.');
        }
        if (amount > account.balance) {
            throw new Error('Insufficient funds.');
        }
        account.balance -= amount;
    }
    getAccountHolderAndBalance(accountNumber) {
        const account = this.getAccountByNumber(accountNumber);
        if (!account) {
            throw new Error('Account does not exist.');
        }
        return {
            accountHolder: account.accountHolder,
            balance: account.balance
        };
    }
    getAccountWithoutBalance(accountNumber) {
        const account = this.getAccountByNumber(accountNumber);
        if (!account) {
            throw new Error('Account does not exist.');
        }
        const { balance } = account, rest = __rest(account, ["balance"]);
        return rest;
    }
    updateAccount(accountNumber, updatedInfo) {
        const account = this.getAccountByNumber(accountNumber);
        if (!account) {
            throw new Error('Account does not exist.');
        }
        Object.assign(account, updatedInfo);
    }
}
// Ví dụ sử dụng
const bankManager = new BankAccountManager();
bankManager.createAccount(new BankAccount(123, 'Alice', 500));
bankManager.createAccount(new BankAccount(456, 'Bob', 1000));
bankManager.deposit(123, 200);
bankManager.withdraw(456, 300);
const aliceInfo = bankManager.getAccountHolderAndBalance(123);
console.log(aliceInfo); // { accountHolder: 'Alice', balance: 700 }
const bobInfo = bankManager.getAccountWithoutBalance(456);
console.log(bobInfo); // { accountNumber: 456, accountHolder: 'Bob' }
bankManager.updateAccount(123, { balance: 1000 });
const allAccounts = bankManager.listAllAccounts();
console.log(allAccounts);
bankManager.closeAccount(456);
/**
* Lớp Product đại diện cho một sản phẩm trong cửa hàng.
*/
class Product {
    /**
     * Tạo một sản phẩm mới.
     * @param id - Mã sản phẩm.
     * @param name - Tên sản phẩm.
     * @param price - Giá sản phẩm.
     * @param category - Danh mục sản phẩm.
     */
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
/**
 * Lớp ProductManager thực hiện các phương thức để quản lý danh sách các sản phẩm.
 */
class ProductManager {
    constructor() {
        this.products = new Map();
    }
    addProduct(product) {
        if (this.products.has(product.id)) {
            throw new Error('Product already exists.');
        }
        this.products.set(product.id, product);
    }
    removeProduct(id) {
        if (!this.products.has(id)) {
            throw new Error('Product does not exist.');
        }
        this.products.delete(id);
    }
    getProductById(id) {
        return this.products.get(id);
    }
    listAllProducts() {
        return Array.from(this.products.values());
    }
    getProductNameAndCategory(id) {
        const product = this.getProductById(id);
        if (!product) {
            throw new Error('Product does not exist.');
        }
        return {
            name: product.name,
            category: product.category
        };
    }
    getProductWithoutPrice(id) {
        const product = this.getProductById(id);
        if (!product) {
            throw new Error('Product does not exist.');
        }
        const { price } = product, rest = __rest(product, ["price"]);
        return rest;
    }
    updateProduct(id, updatedInfo) {
        const product = this.getProductById(id);
        if (!product) {
            throw new Error('Product does not exist.');
        }
        Object.assign(product, updatedInfo);
    }
    findProductsByCategory(category) {
        return Array.from(this.products.values()).filter(product => product.category === category);
    }
    calculateTotalInventoryValue() {
        return Array.from(this.products.values()).reduce((total, product) => total + product.price, 0);
    }
}
// Ví dụ sử dụng
const productManager = new ProductManager();
productManager.addProduct(new Product(1, 'Laptop', 1200, 'Electronics'));
productManager.addProduct(new Product(2, 'Smartphone', 800, 'Electronics'));
productManager.addProduct(new Product(3, 'Desk Chair', 150, 'Furniture'));
productManager.updateProduct(1, { price: 1100 });
const electronics = productManager.findProductsByCategory('Electronics');
console.log(electronics);
const totalInventoryValue = productManager.calculateTotalInventoryValue();
console.log(totalInventoryValue); // 2100 (1100 + 800 + 150)
const allProducts = productManager.listAllProducts();
console.log(allProducts);
/**
* Lớp Employee đại diện cho một nhân viên trong công ty.
*/
class Employee {
    /**
     * Tạo một nhân viên mới.
     * @param id - Mã nhân viên.
     * @param name - Tên nhân viên.
     * @param age - Tuổi nhân viên.
     * @param position - Chức vụ của nhân viên.
     * @param departmentId - Mã phòng ban mà nhân viên thuộc về.
     */
    constructor(id, name, age, position, departmentId) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.position = position;
        this.departmentId = departmentId;
    }
}
/**
 * Lớp Department đại diện cho một phòng ban trong công ty.
 */
class Department {
    /**
     * Tạo một phòng ban mới.
     * @param id - Mã phòng ban.
     * @param name - Tên phòng ban.
     * @param employees - Danh sách nhân viên thuộc phòng ban.
     */
    constructor(id, name, employees = []) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
}
/**
 * Lớp EmployeeManager thực hiện các phương thức để quản lý danh sách các nhân viên.
 */
class EmployeeManager {
    constructor() {
        this.employees = new Map();
    }
    addEmployee(employee) {
        if (this.employees.has(employee.id)) {
            throw new Error('Employee already exists.');
        }
        this.employees.set(employee.id, employee);
    }
    removeEmployee(id) {
        if (!this.employees.has(id)) {
            throw new Error('Employee does not exist.');
        }
        this.employees.delete(id);
    }
    getEmployeeById(id) {
        return this.employees.get(id);
    }
    listAllEmployees() {
        return Array.from(this.employees.values());
    }
    updateEmployee(id, updatedInfo) {
        const employee = this.getEmployeeById(id);
        if (!employee) {
            throw new Error('Employee does not exist.');
        }
        Object.assign(employee, updatedInfo);
    }
    getEmployeeBasicInfo(id) {
        const employee = this.getEmployeeById(id);
        if (!employee) {
            throw new Error('Employee does not exist.');
        }
        return {
            name: employee.name,
            position: employee.position
        };
    }
}
/**
 * Lớp DepartmentManager thực hiện các phương thức để quản lý danh sách các phòng ban và nhân viên.
 */
class DepartmentManager {
    constructor(employeeManager) {
        this.departments = new Map();
        this.employeeManager = employeeManager;
    }
    addDepartment(department) {
        if (this.departments.has(department.id)) {
            throw new Error('Department already exists.');
        }
        this.departments.set(department.id, department);
    }
    removeDepartment(id) {
        if (!this.departments.has(id)) {
            throw new Error('Department does not exist.');
        }
        this.departments.delete(id);
    }
    getDepartmentById(id) {
        return this.departments.get(id);
    }
    listAllDepartments() {
        return Array.from(this.departments.values());
    }
    listEmployeesInDepartment(departmentId) {
        const department = this.getDepartmentById(departmentId);
        if (!department) {
            throw new Error('Department does not exist.');
        }
        return department.employees;
    }
    moveEmployeeToDepartment(employeeId, departmentId) {
        const employee = this.employeeManager.getEmployeeById(employeeId);
        if (!employee) {
            throw new Error('Employee does not exist.');
        }
        const newDepartment = this.getDepartmentById(departmentId);
        if (!newDepartment) {
            throw new Error('Department does not exist.');
        }
        const oldDepartment = this.getDepartmentById(employee.departmentId);
        if (oldDepartment) {
            oldDepartment.employees = oldDepartment.employees.filter(emp => emp.id !== employeeId);
        }
        employee.departmentId = departmentId;
        newDepartment.employees.push(employee);
    }
    generateDepartmentReport(departmentId) {
        const department = this.getDepartmentById(departmentId);
        if (!department) {
            throw new Error('Department does not exist.');
        }
        const employeeDetails = department.employees.map(emp => `ID: ${emp.id}, Name: ${emp.name}, Position: ${emp.position}`).join('\n');
        return `Department: ${department.name}\nEmployees:\n${employeeDetails}`;
    }
    getDepartmentEmployeeCount(departmentId) {
        const department = this.getDepartmentById(departmentId);
        if (!department) {
            throw new Error('Department does not exist.');
        }
        return department.employees.length;
    }
    getAverageEmployeeAgeInDepartment(departmentId) {
        const department = this.getDepartmentById(departmentId);
        if (!department) {
            throw new Error('Department does not exist.');
        }
        const ages = department.employees.map(emp => emp.age);
        const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;
        return averageAge;
    }
    findEmployeesByName(name) {
        return Array.from(this.employeeManager.listAllEmployees()).filter(emp => emp.name.includes(name));
    }
    sortEmployeesByAge() {
        return Array.from(this.employeeManager.listAllEmployees()).sort((a, b) => a.age - b.age);
    }
}
// Ví dụ sử dụng
const employeeManager = new EmployeeManager();
const departmentManager = new DepartmentManager(employeeManager);
employeeManager.addEmployee(new Employee(1, 'Alice', 30, 'Developer', 1));
employeeManager.addEmployee(new Employee(2, 'Bob', 25, 'QA Engineer', 1));
employeeManager.addEmployee(new Employee(3, 'Charlie', 28, 'Designer', 2));
departmentManager.addDepartment(new Department(1, 'Engineering'));
departmentManager.addDepartment(new Department(2, 'Design'));
departmentManager.moveEmployeeToDepartment(2, 2);
const departmentReport = departmentManager.generateDepartmentReport(1);
console.log(departmentReport);
const employeeCount = departmentManager.getDepartmentEmployeeCount(1);
console.log(employeeCount); // 1
const averageAge = departmentManager.getAverageEmployeeAgeInDepartment(1);
console.log(averageAge); // 30
const employeesByName = departmentManager.findEmployeesByName('Alice');
console.log(employeesByName);
const sortedEmployees = departmentManager.sortEmployeesByAge();
console.log(sortedEmployees);
