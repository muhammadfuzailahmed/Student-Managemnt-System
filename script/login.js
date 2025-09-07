let loginBtn = document.querySelector(".login");
let lock = document.querySelector(".lock");
let unLock = document.querySelector(".unlock");
let usernameInput = document.querySelector(".username");
let passwordInput = document.querySelector(".password");
let forgotPassword = document.querySelector(".forgot-poassword");
let error = document.querySelector(".error");
let errorContainer = document.querySelector(".error-container");
let loginBtnContainer = document.querySelector(".btn");
let found = false;


errorContainer.classList.add('hidden');
error.classList.add('hidden');

const admin = {
    username: "admin",
    password: "admin123",
};

loginBtn.addEventListener('click', loginUser);
lock.addEventListener('click', showPassword);
unLock.addEventListener('click', hidePassword);
forgotPassword.addEventListener('click', forgotPasswordFunc);


function loginUser() {
    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();
    if(username === "" || password === "") return;
    else if(username === admin.username && password === admin.password) {
        alert("Admin panel logged in");
        window.location.href = "./index/admin-panel.html";
        usernameInput.value = "";
        passwordInput.value = "";
    }else {
        let passPassword = passwordInput.value;
        let getItem = JSON.parse(localStorage.getItem("studentsData"));
        getItem.forEach((student) =>  {
            if(username === student.studentsUsername && password === student.studentsPassword) {
                found = true;
                // console.log(student.StudentsName);
                error.classList.add('hidden');
                alert("Student portal logged in!");
                usernameInput.value = "";
                passwordInput.value = "";
                localStorage.setItem('sessionUser',JSON.stringify(
                    {
                        currentName: student.StudentsName,
                        currentRollNo: student.RollNo,
                        currentStudentCourses: [],
                        password: passPassword,
                        totalCreditHours: 0,
                    }
                ))
                window.location.href = "./index/student-panel.html";
            }
        });
        if(!found) {
            error.classList.remove('hidden');
            errorContainer.classList.remove('hidden');
            error.style.color = "red";
            error.textContent = `Invalid username or password`;
            loginBtnContainer.style.marginTop = "20px";
        }
    }
}

function showPassword() {
    passwordInput.type = "text";
    lock.classList.add('hidden');
    unLock.classList.remove('hidden');
}

function hidePassword() {
    passwordInput.type = "password";
    lock.classList.remove('hidden');
    unLock.classList.add('hidden');
}

function forgotPasswordFunc() {
    window.location.href = "./index/forgot.html"
}