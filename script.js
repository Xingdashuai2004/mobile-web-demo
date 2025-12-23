let userList = [];

function addUser() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    if (name === "" || phone === "") {
        alert("请输入完整信息");
        return;
    }

    userList.push({ name, phone });
    renderList();

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
}

function renderList() {
    let ul = document.getElementById("userList");
    ul.innerHTML = "";

    userList.forEach((user, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${user.name} - ${user.phone}
        <button onclick="deleteUser(${index})">删除</button>`;
        ul.appendChild(li);
    });
}

function deleteUser(index) {
    userList.splice(index, 1);
    renderList();
}
