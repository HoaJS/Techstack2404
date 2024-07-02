const liststudent = [
    {
        id: 1,
        name: 'Nguyễn Văn A',
        Gender:'Nam',
        Math_score: 8,
        English_score: 8,
        Literature_score: 8,



    },
    {
    id: 2,
    name: 'Nguyễn Thị A',
    Gender:'Nữ',
    Math_score: 8,
    English_score: 8,
    Literature_score: 8,
    },

]
const $btnCreate = document.querySelector('#create')
const $inputName = document.querySelector('#inputName')
const $inputGender = document.querySelector('#inputGender')
const $inputMath_score = document.querySelector('#inputMath_score')
const $inputEnglish_score = document.querySelector('#inputEnglish_score')
const $inputLiterature_score = document.querySelector('#inputLiterature_score')
// Khởi tạo dom
const $btnCreate = document.getElementById("create");
const $inputName = document.getElementById("name");
const $inputMathScore = document.getElementById("math_score");
const $inputEnglishScore = document.getElementById("english_score");
const $inputLiteratureScore = document.getElementById("literature_score");

// Read: hiển thị thông tin danh sách học sinh
function renderListStudent() {
  let string = "";
  for (let i = 0; i < listStudent.length; i++) {
    // template string
    string += `
    <tr>
        <th scope="row">${listStudent[i].id}</th>
        <td>${listStudent[i].name}</td>
        <td>${listStudent[i].gender === "boy" ? "Nam" : "Nữ"}</td>
        <td>${listStudent[i].math_score}</td>
        <td>${listStudent[i].english_score}</td>
        <td>${listStudent[i].literature_score}</td>
        <td>8</td>
        <td><button class="btn btn-danger" onclick="deleteStudent(${i})">Delete</button></td>
    </tr>
    `;
  }
  document.getElementById("info-student").innerHTML = string;
}
renderListStudent();

// Create
// Bước 1: gán sự kiện onclick cho button "Create student"
$btnCreate.onclick = function () {
  // Bước 2: Xử lý trong hàm
  // -Lấy được các thông tin người dùng nhập ở các input
  const name = $inputName.value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const math_score = $inputMathScore.value;
  const english_score = $inputEnglishScore.value;
  const literature_score = $inputLiteratureScore.value;
  // -Tạo một object newStudent
  const newStudent = {
    id: listStudent.length + 1,
    name: name,
    gender: gender,
    math_score: math_score,
    english_score: english_score,
    literature_score: literature_score,
  };
  console.log("newStudent: ", newStudent);
  // -Đẩy object newStudent vào mảng listStudent
  listStudent.push(newStudent);
  // -Gọi hàm renderListStudent để hiển thị lại danh sách học sinh
  renderListStudent();
};

// Bước 1: Gán sự kiện onclick cho các button delete
function deleteStudent(index) {
  // Bước 2: Xử lý trong hàm
  //     -Tìm index của học sinh trong danh sách
  //     -Xóa học sinh khỏi danh sách
  listStudent.splice(index, 1);
  //     -Gọi lại hàm renderListStudent để in ra danh sách mới nhất
  renderListStudent();
}


let string= ``;

for(let studen of liststudent){
    console.log(`student: `,liststudent);
    string +=
       `<tr>
          <th scope="row">${studen.id}</th>
          <td>${studen.name}</td>
          <td>Nam</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
        </tr>`
}

document.getElementById('infor-student').innerHTML = string;
