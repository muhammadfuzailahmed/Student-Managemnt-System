document.addEventListener('DOMContentLoaded', () => {
let navLinks = document.querySelectorAll(".link");
let greetSection = document.querySelector(".greeting-section");
let enrollCourseSection = document.querySelector(".enroll-course-section");
let enrollCourseBtn = document.querySelector(".enroll-course-btn");
let myCoursesBtn = document.querySelector(".my-courses-btn");
let feesBtn = document.querySelector(".fees-btn");
let enrollCourseInput = document.querySelector(".enroll-course-input");
let enrollCourseUl = document.querySelector(".enroll-course-ul");
let usersName = document.querySelector(".current-user-roll");
let currentSessionUser = JSON.parse(localStorage.getItem('sessionUser')) || null;
currentSessionUser.currentStudentCourses = currentSessionUser.currentStudentCourses || [];
let sum = Number(currentSessionUser.totalCreditHours) || 0; 

let myCoursesSection = document.querySelector(".my-courses-container");
let appendRegisteredCoursesUl = document.querySelector(".append-registerd-courses-ul");

let searchCOurseBtn = document.querySelector(".search-course-btn");
let searchCourseContainer = document.querySelector(".serach-course-container");
let searchInput = document.querySelector(".search-course-input");
let appendSearchCourseResult = document.querySelector(".append-search-course-ul");

let resetPasswordContainer = document.querySelector(".reset-password-container");
let newPasswordInput = document.querySelector(".new-password");
let confirmNewPasswordInput = document.querySelector(".confirm-new-password");
let resetPasswordContainerBtn = document.querySelector(".reset-password-section-btn");
let resetPasswordBtn = document.querySelector(".cofirm-password-btn");


let logoutContainer = document.querySelector(".logout-container");
let logoutSectionBtn = document.querySelector(".logout-section-btn");
let logoutBtn = document.querySelector(".logout-btn");

let feesContainer = document.querySelector(".fees-container");
let appendFeesInfo = document.querySelector(".fees-info");


usersName.textContent = `2025F - ${currentSessionUser.currentRollNo}`;
console.log(currentSessionUser.currentStudentCourses);

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.forEach((l) => l.classList.remove('active-link'));
        link.classList.add('active-link')
    })
})

enrollCourseBtn.addEventListener('click', showenrolCourseSection);
myCoursesBtn.addEventListener('click', showMyCoursesSection)
// tempBtn.addEventListener('click', showRegisteredCourses)

searchCOurseBtn.addEventListener('click', showSearchSection);
searchInput.addEventListener('click', showSearchResult);
searchInput.addEventListener('mouseleave', hideSearchResult);
searchInput.addEventListener('input', searchResult);


resetPasswordBtn.addEventListener('click', resetPassword);
resetPasswordContainerBtn.addEventListener('click', showResetPasswordSection);
newPasswordInput.addEventListener('click', passwordInputClicked);
confirmNewPasswordInput.addEventListener('click', confoirmPasswordInputClicked);
newPasswordInput.addEventListener('mouseleave', passwordInputLeaved);
confirmNewPasswordInput.addEventListener('mouseleave', confoirmPasswordInputLeaved);


logoutSectionBtn.addEventListener('click', showLogoutContainer);
logoutBtn.addEventListener('click', logoutUser);

feesBtn.addEventListener('click', showFeesCotainer);


function showenrolCourseSection() {
    greetSection.classList.add('hidden');
    myCoursesSection.classList.add('hidden');
    searchCourseContainer.classList.add('hidden');
    enrollCourseSection.classList.remove('hidden');
    logoutContainer.classList.add('hidden');
    feesContainer.classList.add('hidden');
    resetPasswordContainer.classList.add('hidden');
}

enrollCourseInput.addEventListener('click', () => {
    enrollCourseInput.style.transform = "scale(1.06)";
    enrollCourseInput.style.border = "2px solid navy";
})

enrollCourseInput.addEventListener('mouseleave', () => {
    enrollCourseInput.style.transform = "scale(1)";
})

enrollCourseInput.addEventListener('input', searchForCourseToEnroll);

function searchForCourseToEnroll() {
    enrollCourseUl.innerHTML = "";
    enrollCourseUl.style.border = "none";
    let searchedCourse = enrollCourseInput.value.trim().toLowerCase();
    let availableCourses =JSON.parse(localStorage.getItem("courses"));
    availableCourses.forEach((course) => {
        if(searchedCourse === course.name.toLowerCase()){
            console.log(course.name)
            console.log(course.code)
            console.log(course.crHrs)
            let li = document.createElement('li');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let div = document.createElement('div');
            let addCourseBtn = document.createElement('button');
            addCourseBtn.textContent = "Add Course";
            addCourseBtn.style.padding = "8px 14px";
            addCourseBtn.style.border= "2px solid navy";
            addCourseBtn.style.borderRadius = "7px";
            addCourseBtn.style.backgroundColor = "transparent";
            addCourseBtn.style.color = "#fff";
            addCourseBtn.style.transition = "0.3s ease";
            div.appendChild(addCourseBtn);
            div.style.position = "absolute";
            div.style.right = "12px";
            div.style.top ="35px";
            addCourseBtn.addEventListener('mouseenter', () => {
                addCourseBtn.style.transform = "scale(1.1)"
                addCourseBtn.style.cursor = "pointer";
            })
            addCourseBtn.addEventListener('mouseleave', () => {
                addCourseBtn.style.transform = "scale(1)"
            })
            addCourseBtn.addEventListener('click', () => {
                const cr = Number(course.crHrs) || 0;
                sum += cr;
                currentSessionUser.totalCreditHours = sum;
                localStorage.setItem("sessionUser", JSON.stringify(currentSessionUser));
                let currentStudentNewCourse = {
                    courseName: course.name,
                    courseCode: course.code,
                    corseCrHrs: parseInt(course.crHrs),
                };
                currentSessionUser.currentStudentCourses.push(currentStudentNewCourse);
                localStorage.setItem("sessionUser", JSON.stringify(currentSessionUser));
                alert("Course added");
                enrollCourseInput.value= "";
                console.log(currentSessionUser.currentStudentCourses);
                enrollCourseUl.innerHTML = "";
                enrollCourseUl.style.border = "none";
            })
            li.style.listStyle = "none";            
            li.style.padding = "15px";
            h2.textContent = course.name;
            h2.style.marginBottom ="8px";
            p1.textContent = course.code;
            p1.style.marginBottom ="8px";
            p2.textContent = course.crHrs;
            li.appendChild(h2);
            li.appendChild(p1);
            li.appendChild(p2);
            li.appendChild(div);
            enrollCourseUl.style.border = "2px solid navy";
            enrollCourseUl.style.borderRadius = "7px";
            enrollCourseUl.style.position = "relative";
            enrollCourseUl.appendChild(li);
        }
    })
} 

function showMyCoursesSection() {
    greetSection.classList.add('hidden');
    enrollCourseSection.classList.add('hidden');
    myCoursesSection.classList.remove('hidden');
    searchCourseContainer.classList.add('hidden');
    logoutContainer.classList.add('hidden');
    feesContainer.classList.add('hidden');
    resetPasswordContainer.classList.add('hidden');
    showRegisteredCourses();
}

function showRegisteredCourses() {
    console.log(sum);
    appendRegisteredCoursesUl.innerHTML = "";
    currentSessionUser.currentStudentCourses.forEach((course) => {
        let li = document.createElement('li');
        li.style.padding = "15px";
        li.style.listStyle = "none";
        li.style.border = "2px solid navy";
        li.style.borderRadius = "7px";
        li.style.marginBottom = "12px";
        li.style.transition = "0.3s ease";
        li.addEventListener('mouseenter', () => {
            li.style.transform = "scale(1.03)";
            li.style.cursor = "pointer";
            li.style.backgroundColor = "#000";
        })
        li.addEventListener('mouseleave', () => {
            li.style.transform = "scale(1)";
            li.style.backgroundColor = "transparent";
        })
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        h2.textContent = `Course Name: ${course.courseName}`;
        h2.style.marginBottom = "8px";
        p1.textContent = `Course Code: ${course.courseCode}`;
        p1.style.marginBottom = "8px";
        p2.textContent = `Course Credit Hours: ${course.corseCrHrs}`;
        li.appendChild(h2);
        li.appendChild(p1);
        li.appendChild(p2);
        appendRegisteredCoursesUl.appendChild(li);
    })
}

function showSearchSection() {
    greetSection.classList.add('hidden');
    myCoursesSection.classList.add('hidden');
    enrollCourseSection.classList.add('hidden');
    searchCourseContainer.classList.remove('hidden');
    logoutContainer.classList.add('hidden');
    feesContainer.classList.add('hidden');
    resetPasswordContainer.classList.add('hidden');
}

function showSearchResult() {
    searchInput.style.transform = "scale(1.1)"; 
    searchInput.style.border = "2px solid navy";
}

function hideSearchResult() {
    searchInput.style.transform = "scale(1)";
}

function searchResult(){
    let searchItem = searchInput.value.trim().toLowerCase(); 
    let getItem = JSON.parse(localStorage.getItem("courses"));
    getItem.forEach((course) => {
        if(searchItem === course.name.toLowerCase() || searchItem === course.code.toLowerCase()){
            let li = document.createElement('li');
            li.style.listStyle = "none";
            li.style.padding = "15px";
            li.style.border = "2px solid navy";
            li.style.borderRadius = "7px";
            li.style.transition = "0.3s ease";
            li.addEventListener('mouseenter', () => {
                li.style.transform = "scale(1.03)";
                li.style.cursor = "pointer";
                li.style.backgroundColor = "#000";
            })
            li.addEventListener('mouseleave', () => {
                li.style.transform = "scale(1)";
                li.style.backgroundColor = "transparent";
            })
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            h2.textContent = `Course name: ${course.name}`;
            h2.style.marginBottom = "8px";
            p1.textContent = `Course code: ${course.code}`;
            p1.style.marginBottom = "8px";
            p2.textContent = `Course Credit Hours: ${course.crHrs}`;
            li.appendChild(h2);
            li.appendChild(p1);
            li.appendChild(p2);
            appendSearchCourseResult.appendChild(li);
        }
    })
}

function showResetPasswordSection() {
    resetPasswordContainer.classList.remove('hidden');
    greetSection.classList.add('hidden');
    myCoursesSection.classList.add('hidden');
    enrollCourseSection.classList.add('hidden');
    searchCourseContainer.classList.add('hidden');
    logoutContainer.classList.add('hidden');
    feesContainer.classList.add('hidden');
}

function passwordInputClicked() {
    newPasswordInput.style.transition = "0.3s ease";
    newPasswordInput.style.transform = "scale(1.1)";
    newPasswordInput.style.border = "3px solid navy";
}

function passwordInputLeaved() {
    newPasswordInput.style.transform = "scale(1)";
    newPasswordInput.style.border = "2px solid navy";
}

function confoirmPasswordInputClicked(){
    confirmNewPasswordInput.style.transition = "0.3s ease";
    confirmNewPasswordInput.style.transform = "scale(1.1)";
    confirmNewPasswordInput.style.border = "3px solid navy";
}

function confoirmPasswordInputLeaved() {
    confirmNewPasswordInput.style.transform = "scale(1)";
    confirmNewPasswordInput.style.border = "2px solid navy";
}

function resetPassword() {
    let newPassword = newPasswordInput.value.trim();
    let confirmNewPassword = confirmNewPasswordInput.value.trim();
    if(newPassword === "" || confirmNewPassword === "") return;
    else if(newPassword !== confirmNewPassword) alert("Password doesnot match");
    else{
        // let originalPassword = currentSessionUser.password;
        let studentDetails = JSON.parse(localStorage.getItem("studentsData"));
        studentDetails.forEach((student) => {
            console.log(student.RollNo);
            console.log(currentSessionUser.currentRollNo);
            if(student.RollNo === currentSessionUser.currentRollNo){
                student.studentsPassword = newPassword;
                currentSessionUser.password = newPassword;
                localStorage.setItem('sessionUser', JSON.stringify(currentSessionUser));
                localStorage.setItem('studentsData', JSON.stringify(studentDetails));
                console.log(currentSessionUser.password)
                alert("Password updated successfully!");
                window.location.href = "../index.html"; 
            }
        })
    }
}


function showLogoutContainer() {
    resetPasswordContainer.classList.add('hidden');
    greetSection.classList.add('hidden');
    myCoursesSection.classList.add('hidden');
    enrollCourseSection.classList.add('hidden');
    searchCourseContainer.classList.add('hidden');
    logoutContainer.classList.remove('hidden');
}

function logoutUser() {
    alert("Loggedout Succesfully!");
    window.location.href = "../index.html";
}

function showFeesCotainer() {
    feesContainer.classList.remove('hidden');
    resetPasswordContainer.classList.add('hidden');
    greetSection.classList.add('hidden');
    myCoursesSection.classList.add('hidden');
    enrollCourseSection.classList.add('hidden');
    searchCourseContainer.classList.add('hidden');
    logoutContainer.classList.add('hidden');
    showSemesterFees();
}

function showSemesterFees() {
    appendFeesInfo.innerHTML = "";
    let perCreditHourFee = 7500;
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let h3 = document.createElement('h3');
    p1.style.marginTop = "95px";
    p1.textContent = `Current total credit hours: ${sum}`;
    p2.style.marginTop = "10px";
    appendFeesInfo.appendChild(p1);
    appendFeesInfo.appendChild(p2);
    appendFeesInfo.appendChild(h3);
    h3.style.fontWeight = "bolder";
    p2.style.display = "inline-block";
    h3.style.display = "inline-block";
    h3.style.marginLeft = "6px";
    h3.textContent = `${sum * perCreditHourFee}`
    p2.textContent = `Fees to be paid: `;
}
})