document.addEventListener('DOMContentLoaded', () => {
    let usernameInput = document.querySelector(".username");
    let rollNoInput = document.querySelector(".rollno");
    let newPasswordInput = document.querySelector(".password");
    let confirmPasswordInput = document.querySelector(".confirm-password");
    let updatePasswordBtn = document.querySelector(".forgot-btn")
    let savePasswordBtn = document.querySelector(".save-password");
    let getStudentsData = JSON.parse(localStorage.getItem("studentsData") || [])

updatePasswordBtn.addEventListener('click', () => {
    let username = usernameInput.value.trim();
    let rollNo = rollNoInput.value.trim();
    

    if(username === "" || rollNo === "") return;

    getStudentsData.forEach((student) => {
        if(student.studentsUsername === username && student.RollNo === rollNo){
            console.log(student.StudentsName)
            newPasswordInput.classList.remove('hidden');
            confirmPasswordInput.classList.remove('hidden');
            updatePasswordBtn.classList.add('hidden')
            savePasswordBtn.classList.remove('hidden');
            savePasswordBtn.addEventListener('click', () => {
            let newPassword = newPasswordInput.value.trim();
            let confirmPassword = confirmPasswordInput.value.trim();
            if(newPassword === "" || confirmPassword === "") return;
            else if(newPassword !== confirmPassword) {
                alert("New password does not match")
                return
            }else{
                student.studentsPassword = confirmPassword;
                localStorage.setItem("studentsData", JSON.stringify(getStudentsData))
                alert("Password changed successfully!")
                window.location.href = "../index/index.html"
            } 

         })
        }
    })

})
})