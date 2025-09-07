document.addEventListener('DOMContentLoaded', () =>{
    
let studentName = document.querySelector(".name");
let studentRollNo = document.querySelector(".roll-no");
let usernameInput = document.querySelector(".username");
let passwordValue = document.querySelector(".password");
let confirmPasswordValue = document.querySelector(".confirm-password");
let signUpBtn = document.querySelector(".sign-up-btn");
let passLock = document.querySelector(".pass-lock");
let passUnlock = document.querySelector(".pass-unlock");
let confirmPassLock =document.querySelector(".confirm-pass-lock");
let confirmPassUnlock = document.querySelector(".confirm-pass-unlock");
let students = JSON.parse(localStorage.getItem('studentsData')) || [];

signUpBtn.addEventListener('click', signUpUser);
passLock.addEventListener('click', showPassword);
passUnlock.addEventListener('click', hidePassword);
confirmPassLock.addEventListener('click', confirmShowPassword);
confirmPassUnlock.addEventListener('click', confirmHidePassword);

function showPassword() {
    passLock.classList.add('hidden');
    passUnlock.classList.remove('hidden');
    passwordValue.type = "text";
}

function hidePassword() {
    passUnlock.classList.add('hidden');
    passLock.classList.remove('hidden');
    passwordValue.type = "password";
}

function confirmShowPassword() {
    confirmPassLock.classList.add('hidden');
    confirmPassUnlock.classList.remove('hidden');
    confirmPasswordValue.type = "text";
}

function confirmHidePassword() {
    confirmPassUnlock.classList.add('hidden');
    confirmPassLock.classList.remove('hidden');
    confirmPasswordValue.type = "password";
}

function signUpUser() {
    let name = studentName.value.trim();
    let rollNo = studentRollNo.value.trim();
    let username = usernameInput.value.trim();
    let passwrod = passwordValue.value.trim();
    let confirmPassword = confirmPasswordValue.value.trim();

    if(username === "" || passwrod === "" || confirmPassword === "" || name === "" || rollNo === "") alert("fill all fields"); 
    else if(passwrod !== confirmPassword) alert("passwords are not same");
    else if(rollNo <= 0 || rollNo > 250) alert("Enter correct roll number");
    else{
        const studentsDetails = {
            StudentsName: name,
            RollNo: rollNo,
            studentsUsername: username,
            studentsPassword: passwrod,
            ID: Date.now(),
        };

        students.push(studentsDetails);
        saveStudentDataToLocal();
        alert("Account created successfully, You will be redirected to login page once you press Ok");
        studentName.value = "";
        studentRollNo.value = "";
        usernameInput.value = "";
        passwordValue.value = "";
        confirmPasswordValue.value = "";
        window.location.href = "../index.html";
    }
} 

function saveStudentDataToLocal() {
    localStorage.setItem('studentsData', JSON.stringify(students));
}

})