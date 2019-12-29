const userMail = 'user@gmail.com';
const adminMail = 'admin@gmail.com';
const mailLength = 5;
const newPassLength = 6;
const userPass = 'UserPass';
const adminPass = 'AdminPass';

let changePass, oldPass, newPass, newPassConfirm;
let login = prompt('Please, enter your e-mail', '');

while (login !== userMail || login !== adminMail) {
    if (login === null || login === '') {
        alert('Canceled');
    } else if (login.length < mailLength) {
        alert('I don’t know any emails having name length less than 5 symbols');
    } else if (login === userMail || login === adminMail ) {
        let password = prompt('Enter your password', '');
        if (password === null || password === '') {
            alert('Canceled');
        } else if (login === userMail && password === userPass || login === adminMail && password === adminPass) {
            changePass = confirm('Do you want to change your password?', '');
            if (!changePass) {
                alert('You have failed the change.');
            } else {
                oldPass = prompt('Please, enter an old password', '');
                if (oldPass === userPass && login === userMail || oldPass === adminPass && login === adminMail) {
                    newPass = prompt('Please, enter a new password', '');
                    if (newPass === null || newPass === '') {
                        alert('Canceled');
                    } else if (newPass.length < newPassLength) {
                        alert('It’s too short password. Sorry.');
                    } else {
                        newPassConfirm = prompt('Please, enter a new password again');
                        if (newPassConfirm === newPass) {
                            alert('You have successfully changed your password.');
                        } else {
                            alert('You wrote the wrong password.');
                        }
                    }
                } else {
                    alert('Wrong password');
                }
            }
        } else {
            alert('Wrong password');
        }
    } else {
        alert('I don’t know you');
        login = prompt('Please, enter your e-mail', '');
    }
}