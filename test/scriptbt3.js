let users = [
	{
		id: one,
		first_name: 'Peter',
		last_name: 'Mana',
		email: 'anhcohoa@gmail.com',
		password: '88888888',
	},
	{
		id: two,
		first_name: 'Paker',
		last_name: 'Mina',
		email: 'tranthibanh@gmail.com',
		password: '88888888',
	},
	{
		id: three,
		first_name: 'Chrismirt',
		last_name: 'Nakarot',
		email: 'nguyenvanxautrai@gmail.com',
		password: '88888888',
	},
	{
		id: for,
		first_name: 'nâtlya',
		last_name: 'Ansteys',
		email: 'chuyendipha@gmail.com',
		password: '88888888',
	},
	{
		id: five,
		first_name: 'toro',
		last_name: 'Barbosa',
		email: 'vodung@gmail.com',
		password: '88888888',
	},
	{
		id: six,
		first_name: 'Zita',
		last_name: 'Triner',
		email: 'votri@gmail.com',
		password: '88888888',
	},
	{
		id: seven,
		first_name: 'Omega',
		last_name: 'Pilcher',
		email: 'nhachaymoingay@gmail.com',
		password: '88888888',
	},
	{
		id: eight,
		first_name: 'Lylyana',
		last_name: 'Fockes',
		email: 'loket@gmail.com',
		password: '88888888',
	},
	{
		id: nine,
		first_name: 'Haryposter',
		last_name: 'Olifaunt',
		email: 'tranvanb@gmail.com',
		password: '88888888',
	},
	{
		id: ten,
		first_name: 'Nobita',
		last_name: 'Duncanson',
		email: 'nduncanson9@gmail.com',
		password: '88888888',
	},
];
function login() {
            const email = document.getElementById("loginEmail").value.trim();
            const password = document.getElementById("loginPassword").value.trim();

            if (!email || !password) {
                document.getElementById("loginMessage").innerText = "Hãy nhập đầy đủ thông tin";
                return;
            }

            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                document.getElementById("loginMessage").innerText = `Xin chào ${user.first_name} ${user.last_name}`;
            } else {
                document.getElementById("loginMessage").innerText = "Thông tin tài khoản không chính xác";
            }
        }

function register() {
           
            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const email = document.getElementById("registerEmail").value.trim();
            const password = document.getElementById("registerPassword").value.trim();

            if (!firstName || !lastName || !email || !password) {
                document.getElementById("registerMessage").innerText = "Hãy nhập đầy đủ thông tin";
                return;
            }

            const existingUser = users.find(user => user.email === email);

            if (existingUser) {
                document.getElementById("registerMessage").innerText = "Email này đã có tài khoản";
                return;
            }

            const newUser = {
                id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password
            };
      
            users.push(newUser);

            document.getElementById("registerMessage").innerText = `Đăng ký thành công! Xin chào ${newUser.first_name} ${newUser.last_name}`;
        }
        function searchUsers() {
            const keyword = document.getElementById("keyword").value.trim().toLowerCase();
            const userList = document.getElementById("userList");

            userList.innerHTML = "";

            const filteredUsers = users.filter(user => 
                user.first_name.toLowerCase().includes(keyword) ||
                user.last_name.toLowerCase().includes(keyword) ||
                user.email.toLowerCase().includes(keyword)
            );

            const usersToDisplay = keyword === "" ? users : filteredUsers;

            usersToDisplay.forEach(user => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.first_name} ${user.last_name}</td>
                    <td>${user.email}</td>
                `;
                userList.appendChild(row);
            });
        }

    