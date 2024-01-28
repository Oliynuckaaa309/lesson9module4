let login = document.getElementById('loginItem');
let password = document.getElementById('passwordItem');
let email = document.getElementById('emailItem');
let addItem = document.getElementById('addItem');
let tableItem = document.getElementById('tableContainer');
let saveButton = document.getElementById('saveItem');
let userArray = [];
let userIndex;
addItem.addEventListener("click", function addUser() {
    let user = {
        loginUser: login.value,
        passUser: password.value,
        userEmail: email.value
    };
    if (login.value != '' && password.value != '' && email.value != '') {
        userArray.push(user);
        console.log(userArray)
        render();
    }
    login.value = '';
    password.value = '';
    email.value = '';
});

function render() {
    tableItem.innerHTML = "";
    userArray.forEach((user, index) => {
        let row = document.createElement('tr');
        let idCell = document.createElement('td');
        idCell.innerHTML = ` ${index + 1}`;
        row.appendChild(idCell);
        let loginCell = document.createElement('td');
        loginCell.textContent = user.loginUser,
            row.appendChild(loginCell);
        let passwordCell = document.createElement('td');
        passwordCell.textContent = user.passUser;
        row.appendChild(passwordCell);
        let emailCell = document.createElement('td');
        emailCell.innerHTML = user.userEmail;
        row.appendChild(emailCell);
        let editCell = document.createElement('td');
        let editButton = document.createElement('button');
        editButton.onclick = () => {
            login.value = userArray[index].loginUser;
            password.value = userArray[index].passUser;
            email.value = userArray[index].userEmail;
            userIndex = index;
            saveButton.style.display = 'block';
            addItem.style.display = 'none'
            saveButton.onclick = () => {
                let userEdit = {
                    loginUser: login.value,
                    passUser: password.value,
                    userEmail: email.value
                }
                userArray[index] = userEdit;
                render();
                login.value = '';
                password.value = '';
                email.value = '';


            }


        }
        editCell.appendChild(editButton);
        editButton.textContent = 'Edit';
        row.appendChild(editCell);
        editButton.setAttribute('class', 'edit-style');
        editButton.setAttribute('id', 'edit1-style');
        let deleteCell = document.createElement('td');
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.setAttribute('class', 'delete-style');
        deleteButton.onclick = () => {
            deleteUser(index)
            render();
        };
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);
        tableItem.appendChild(row);
    });
}
function deleteUser(index) {
    if (index > -1) {
        userArray.splice(index, 1);
    }

}
saveButton.onclick = () => {
    console.log(this.login.value)


}
//# sourceMappingURL=main.js.map