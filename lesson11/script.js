// Sử dụng DOM để thay đổi màu chữ của các
// li.favorite-list-item thành màu đỏ.
const $tagsLi = document.querySelectorAll('li.favorite-list-item');
for (let tagLi of $tagsLi) {
	tagLi.innerText = 'I love this thing';
	tagLi.style.color = 'red';
}

// Nhập vào 1 đoạn text từ bàn phím. Thêm vào ul#favorite-list
// một li có nội dung là text vừa nhập vào.
const text = 'Xe máy';
const $tagLi = document.createElement('li');
$tagLi.innerText = text;
const $tagUl = document.getElementById('favorite-list');
$tagUl.appendChild($tagLi);