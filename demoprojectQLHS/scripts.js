// Danh sách học sinh ban đầu
const listStudent = [
  {
      id: 1,
      name: 'Nguyễn Văn A',
      gender: 'Nam',
      math_score: 8,
      english_score: 8,
      literature_score: 8,
  },
  {
      id: 2,
      name: 'Nguyễn Thị A',
      gender: 'Nữ',
      math_score: 8,
      english_score: 8,
      literature_score: 8,
  },
];

// Khởi tạo DOM
const $btnCreate = document.getElementById("create");
const $inputName = document.getElementById("name");
const $inputGender = document.querySelector('input[name="gender"]:checked');
const $inputMathScore = document.getElementById("math_score");
const $inputEnglishScore = document.getElementById("english_score");
const $inputLiteratureScore = document.getElementById("literature_score");

// Hiển thị danh sách học sinh
function renderListStudent() {
  let string = "";
  for (let i = 0; i < listStudent.length; i++) {
      string += `
      <tr>
          <th scope="row">${listStudent[i].id}</th>
          <td>${listStudent[i].name}</td>
          <td>${listStudent[i].gender}</td>
          <td>${listStudent[i].math_score}</td>
          <td>${listStudent[i].english_score}</td>
          <td>${listStudent[i].literature_score}</td>
          <td>${(
              (listStudent[i].math_score + listStudent[i].english_score + listStudent[i].literature_score) / 3
          ).toFixed(2)}</td>
          <td><button class="btn btn-danger" onclick="deleteStudent(${i})">Delete</button></td>
      </tr>
      `;
  }
  document.getElementById("infor-student").innerHTML = string;
}
renderListStudent();

// Thêm học sinh mới
$btnCreate.onclick = function () {
  const name = $inputName.value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const math_score = parseFloat($inputMathScore.value);
  const english_score = parseFloat($inputEnglishScore.value);
  const literature_score = parseFloat($inputLiteratureScore.value);

  const newStudent = {
      id: listStudent.length + 1,
      name: name,
      gender: gender,
      math_score: math_score,
      english_score: english_score,
      literature_score: literature_score,
  };

  listStudent.push(newStudent);
  renderListStudent();
};

// Xóa học sinh
function deleteStudent(index) {
  listStudent.splice(index, 1);
  renderListStudent();
}
