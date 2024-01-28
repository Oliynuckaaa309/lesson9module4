let login = document.getElementById('loginItem') as HTMLInputElement;
let password = document.getElementById('passwordItem') as HTMLInputElement;
let email = document.getElementById('emailItem') as HTMLInputElement;
let addItem = document.getElementById('addItem');
let tableItem = document.getElementById('tableContainer');
let saveButton = document.getElementById('saveItem');
let userArray: IUser[] = [];
let userIndex: number;

interface IUser {
    id?: number;
    loginUser: string;
    passUser: string;
    userEmail: string;
}

addItem.addEventListener("click", function addUser() {
    let user: IUser = {
        loginUser: login.value,
        passUser: password.value,
        userEmail: email.value
    };
    if (login.value != '' && password.value != '' && email.value != '') {
        userArray.push(user);

        render();

    }
    console.log(userArray)



    login.value = '';
    password.value = '';
    email.value = '';


});


function render() {
    tableItem.innerHTML = "";

    userArray.forEach((user, index) => {
        let row = document.createElement('tr');
        let loginCell = document.createElement('td');
        loginCell.textContent = user.loginUser;
        row.appendChild(loginCell);

        let passwordCell = document.createElement('td');
        passwordCell.textContent = user.passUser;
        row.appendChild(passwordCell);

        let emailCell = document.createElement('td');
        emailCell.innerHTML = user.userEmail;
        row.appendChild(emailCell);

        let editCell = document.createElement('td');
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => {
            login.value = userArray[index].loginUser;
            password.value = userArray[index].passUser;
            email.value = userArray[index].userEmail;
            userIndex = index;
            saveButton.style.display = 'block';
            addItem.style.display = 'none'
        }
        editCell.appendChild(editButton);
        editButton.setAttribute('class', 'edit-style');

        row.appendChild(editCell);
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

        let deleteCell = document.createElement('td');
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.setAttribute('class', 'delete-style');
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);
        deleteButton.addEventListener('click', () => {
            deleteUser(index);
            render();
        });

        tableItem.appendChild(row);
    });
}
function deleteUser(index: number): void {
    if (index > -1) {
        userArray.splice(index, 1);
    }
}
