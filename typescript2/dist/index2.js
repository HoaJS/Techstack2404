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
// Bài tập 2
// Định nghĩa lớp Product với các thuộc tính và phương thức cần thiết
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
// Định nghĩa lớp ProductManager để thực hiện các phương thức của interface IProductManager
class ProductManager {
    constructor() {
        this.products = new Map();
    }
    /**
     * Thêm một sản phẩm mới vào danh sách sản phẩm.
     * @param product - Đối tượng sản phẩm cần thêm.
     * @throws Error nếu sản phẩm đã tồn tại.
     */
    addProduct(product) {
        if (this.products.has(product.id)) {
            throw new Error('Product with this ID already exists.');
        }
        this.products.set(product.id, product);
    }
    /**
     * Xóa sản phẩm khỏi danh sách dựa trên mã sản phẩm.
     * @param id - Mã sản phẩm cần xóa.
     * @throws Error nếu sản phẩm không tồn tại.
     */
    removeProduct(id) {
        if (!this.products.has(id)) {
            throw new Error('Product does not exist.');
        }
        this.products.delete(id);
    }
    /**
     * Lấy thông tin sản phẩm dựa trên mã sản phẩm.
     * @param id - Mã sản phẩm cần lấy thông tin.
     * @returns Đối tượng sản phẩm hoặc undefined nếu không tìm thấy.
     */
    getProductById(id) {
        return this.products.get(id);
    }
    /**
     * Liệt kê tất cả các sản phẩm hiện có.
     * @returns Danh sách các sản phẩm.
     */
    listAllProducts() {
        return Array.from(this.products.values());
    }
    /**
     * Lấy tên và danh mục của sản phẩm.
     * @param id - Mã sản phẩm cần lấy thông tin.
     * @returns Đối tượng chứa tên và danh mục của sản phẩm hoặc undefined nếu không tìm thấy.
     */
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
    /**
     * Lấy thông tin sản phẩm mà không bao gồm giá.
     * @param id - Mã sản phẩm cần lấy thông tin.
     * @returns Đối tượng sản phẩm không có thuộc tính giá hoặc undefined nếu không tìm thấy.
     */
    getProductWithoutPrice(id) {
        const product = this.getProductById(id);
        if (!product) {
            throw new Error('Product does not exist.');
        }
        const { price } = product, rest = __rest(product, ["price"]);
        return rest;
    }
    /**
     * Cập nhật thông tin sản phẩm, cho phép cập nhật một phần thông tin.
     * @param id - Mã sản phẩm cần cập nhật.
     * @param updatedInfo - Thông tin cập nhật cho sản phẩm.
     * @throws Error nếu sản phẩm không tồn tại.
     */
    updateProduct(id, updatedInfo) {
        const product = this.getProductById(id);
        if (!product) {
            throw new Error('Product does not exist.');
        }
        Object.assign(product, updatedInfo);
    }
    /**
     * Tìm kiếm và trả về danh sách các sản phẩm thuộc danh mục cụ thể.
     * @param category - Danh mục cần tìm kiếm.
     * @returns Danh sách các sản phẩm thuộc danh mục cụ thể.
     */
    findProductsByCategory(category) {
        return Array.from(this.products.values()).filter(product => product.category === category);
    }
    /**
     * Tính tổng giá trị của tất cả các sản phẩm trong danh sách dựa trên giá và số lượng.
     * @returns Tổng giá trị hàng tồn kho.
     */
    calculateTotalInventoryValue() {
        return Array.from(this.products.values()).reduce((total, product) => total + product.price, 0);
    }
}
// Ví dụ sử dụng các lớp và phương thức trong chương trình
const manager = new ProductManager();
// Tạo một vài sản phẩm và thêm chúng vào ProductManager
manager.addProduct(new Product(1, 'Laptop', 1200, 'Electronics'));
manager.addProduct(new Product(2, 'Smartphone', 800, 'Electronics'));
manager.addProduct(new Product(3, 'Desk Chair', 150, 'Furniture'));
// Cập nhật thông tin sản phẩm
manager.updateProduct(1, { price: 1100 });
// Tìm kiếm sản phẩm theo danh mục
const electronics = manager.findProductsByCategory('Electronics');
console.log(electronics); // [Product, Product]
// Tính tổng giá trị hàng tồn kho
const totalInventoryValue = manager.calculateTotalInventoryValue();
console.log(totalInventoryValue); // 2100 (1100 + 800 + 150)
// Liệt kê tất cả các sản phẩm
const allProducts = manager.listAllProducts();
console.log(allProducts); // [Product, Product, Product]
// Lấy thông tin tên và danh mục của sản phẩm
const nameAndCategory = manager.getProductNameAndCategory(1);
console.log(nameAndCategory); // { name: 'Laptop', category: 'Electronics' }
// Lấy thông tin sản phẩm mà không bao gồm giá
const productWithoutPrice = manager.getProductWithoutPrice(1);
console.log(productWithoutPrice); // { id: 1, name: 'Laptop', category: 'Electronics' }
// Xóa sản phẩm
manager.removeProduct(2);
