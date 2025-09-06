document.addEventListener('DOMContentLoaded', () =>{
// let nav = document.querySelectorAll(".courses");
let logoutBox = document.querySelector(".logout-container");
let accountBtn = document.querySelector(".svg");
let logoutBtn = document.querySelector(".logout-button");
let navLinks = document.querySelectorAll(".links");
let coursesContainer = document.querySelector(".courses-container");
let studentContainer = document.querySelector(".student-content");
let courseBtn = document.querySelector(".courses");
let studentBtn = document.querySelector(".students");
let searchBtn = document.querySelector(".search-course-by-name"); 
let greetPart = document.querySelector(".welcome-main");
let addCourseBtn = document.querySelector(".add-course");
let addCourseSection = document.querySelector(".add-course-container");
let removeCourseBtn = document.querySelector(".remove-course"); 
let updateCourseInfoBtn = document.querySelector(".update-course-info");
let removeStudentBtn = document.querySelector(".remove-student-btn");
let updateStudentInfoBtn = document.querySelector(".update-student-info-btn");
let courseNameValue = document.querySelector(".course-name");
let courseCodeValue = document.querySelector(".course-code");
let courseCreditHours = document.querySelector(".course-cr-hrs");
let saveCourse = document.querySelector(".save-course-btn");
let allCourseBox = document.querySelector(".show-all-courses-box");
let adminPanelHeading =document.querySelector(".heading");
//Show All courses
let showAllCoursesContainer = document.querySelector(".show-all-courses-container");
let showAllCoursesBtn = document.querySelector(".show-all-courses");
// let allCoursesRow = document.querySelector(".row"); 
let courses = JSON.parse(localStorage.getItem("courses")) || [];
// Reove course (Grabs)
let removeCourseContainer = document.querySelector(".remove-course-container");
let removeCourseInput = document.querySelector(".search-course-input");
let ulAppendForRemoveSearch = document.querySelector('.ul-append-for-remove-search');

let searchCourseContainer = document.querySelector(".search-course-container");
let onlySearchInput = document.querySelector(".only-search-course-input");
let ulAppendForOnlySearch = document.querySelector(".ul-append-for-only-search");

let updateCourseInfoContainer = document.querySelector(".update-course-info-container");
let courseUpdationInputValue = document.querySelector(".update-course-info-search-input");
let ulAppendForCourseUpdation = document.querySelector(".ul-append-for-course-updation");

let removeStudentContainer = document.querySelector(".remove-student-container");
let removeStudentInput = document.querySelector(".remove-student-input");
let removeStudentUl = document.querySelector(".remove-student-ul");

let updateStudentInfoContainer = document.querySelector(".update-student-info-container");
let updateStudentInfoInput = document.querySelector(".update-student-info-input");
let updateStudentInfoUl = document.querySelector(".update-student-info-ul");

let showAllStudentsBtn = document.querySelector(".show-all-students-btn");
let showAllStudentsContainer = document.querySelector(".show-all-students-record-container");
let showAllStudentsUl = document.querySelector(".show-all-students-ul");


let exportAllDataBtn = document.querySelector(".export-all-data-btn");
let exportAllDataContainer = document.querySelector(".export-all-data-container");
let allStudentDataBtn = document.querySelector(".all-students-data-btn");
let allCoursesDataBtn = document.querySelector(".all-courses-data-btn");
let appendAllData = document.querySelector(".append-all-data");

let signUpBtn = document.querySelector(".add-student-info-btn");

// Admin page (Event Listeners)
adminPanelHeading.addEventListener('click', homePage)
accountBtn.addEventListener('mouseenter', showlogoutBox);
logoutBtn.addEventListener('click', logoutAdmin);
logoutBtn.addEventListener('mouseleave', hideLogoutBox);
courseBtn.addEventListener('mouseenter', showCourseContainer);
coursesContainer.addEventListener('mouseleave', hideCourseContainer);
studentBtn.addEventListener('mouseenter', showStudentContainer);
studentContainer.addEventListener('mouseleave', hideStudentContainer);
// Reove course (Event Listeners)
removeCourseBtn.addEventListener('click', showRemoveCourseSection);
removeCourseInput.addEventListener('input', showRemoveCourseSearchResult);
removeCourseInput.addEventListener('click', animatedSearchInput);
removeCourseInput.addEventListener('mouseleave', normalSearchInput);
//Search course (Event listeners)
searchBtn.addEventListener('click', showSearchContainer);
onlySearchInput.addEventListener('input', showSearchResult)

//Update course info course (Event listeners)
updateCourseInfoBtn.addEventListener('click', showUpdateCourseInfoSection);
courseUpdationInputValue.addEventListener('input', showCourseForUpdation);

//remove student (Event listeners)
removeStudentBtn.addEventListener('click', showRemoveStudetContainer);
removeStudentInput.addEventListener('input', showRemoveStudentSearchResult);
removeStudentInput.addEventListener('click', removeStudentInputClicked);
removeStudentInput.addEventListener('mouseleave', removeStudentInputLeaved);

//update student info (Event listeners)
updateStudentInfoBtn.addEventListener('click', showUpdateStudentInfoContainer);
updateStudentInfoInput.addEventListener('input', showUpdateStudentInfoSearch)


showAllStudentsBtn.addEventListener('click', showAllStudentsRecord);


exportAllDataBtn.addEventListener('click', showAllData);
allStudentDataBtn.addEventListener('click', showAllStudentsData);
allCoursesDataBtn.addEventListener('click', showAllCoursesData);

signUpBtn.addEventListener('click', () => {
    window.location.href = "../index/signup.html"
})

function homePage() {
    addCourseSection.classList.add('hidden');
    showAllCoursesContainer.classList.add('hidden');
    removeCourseContainer.classList.add('hidden');
    searchCourseContainer.classList.add('hidden');
    greetPart.classList.remove('hidden');
    updateCourseInfoContainer.classList.add('hidden');
    updateStudentInfoContainer.classList.add('hidden');
    removeStudentContainer.classList.add('hidden');
    showAllStudentsContainer.classList.add('hidden');
    exportAllDataContainer.classList.add('hidden');

}

function showlogoutBox() {
    logoutBox.classList.remove('hidden');
    coursesContainer.classList.add('hidden');
    studentContainer.classList.add('hidden');
}

function logoutAdmin() {
    window.location.href = "../index/index.html";
}

function hideLogoutBox() {
    logoutBox.classList.add('hidden');
}

function showCourseContainer() {
    courseBtn.style.color = "red";
    courseBtn.style.cursor = "pointer";
    coursesContainer.classList.remove('hidden');
    studentContainer.classList.add('hidden');
    updateStudentInfoContainer.classList.add('hidden');
    logoutBox.classList.add('hidden');
    exportAllDataContainer.classList.add('hidden');
}

function hideCourseContainer() {
    coursesContainer.classList.add('hidden');
    courseBtn.style.color = "#fff";
}

function showStudentContainer() {
    studentBtn.style.color = "red";
    studentBtn.style.cursor = "pointer";
    studentContainer.classList.remove('hidden');
    coursesContainer.classList.add('hidden')
    logoutBox.classList.add('hidden');
}

function hideStudentContainer() {
    studentContainer.classList.add('hidden');
    studentBtn.style.color = "#fff";
}

navLinks.forEach((i) => {
        i.addEventListener('click', () => {
            navLinks.forEach((link) => link.classList.remove('selected'))
            i.classList.add('selected')
        })
});

addCourseBtn.addEventListener('click', addCourse);

function addCourse() {
    greetPart.classList.add('hidden');
    coursesContainer.classList.add('hidden');
    showAllCoursesContainer.classList.add('hidden');
    addCourseSection.classList.remove('hidden');
    updateStudentInfoContainer.classList.add('hidden');
    updateCourseInfoContainer.classList.add('hidden');
    exportAllDataContainer.classList.add('hidden');
}

saveCourse.addEventListener('click', () => {
        let courseName = courseNameValue.value.trim();
        let courseCode = courseCodeValue.value.trim();
        let courseCredit = courseCreditHours.value.trim();
        let courseCreditToNumber = parseInt(courseCredit);
        if(courseName === "" || courseCode === "" || courseCredit === "" || courseCreditToNumber > 3 || courseCreditToNumber < 1) return;
        const saveCourseObj = {
            name: courseName,
            code: courseCode,
            crHrs: courseCreditToNumber,
        };
        courses.push(saveCourseObj);
        console.log(courses);
        saveCourseToLocal();
        alert("Course added Successfully!");
        courseNameValue.value = "";
        courseCodeValue.value = "";
        courseCreditHours.value ="";
    })

function saveCourseToLocal() {
    localStorage.setItem('courses', JSON.stringify(courses));
}
// let sum = 0;
showAllCoursesBtn.addEventListener('click', showAllCourses);


function showAllCourses() {
    greetPart.classList.add('hidden');
    addCourseSection.classList.add('hidden')
    showAllCoursesContainer.classList.remove('hidden');

    let getAllCourses = JSON.parse(localStorage.getItem("courses"));
    getAllCourses.forEach((course) => {
        let ul = document.createElement('ul');
        ul.style.margin = "15px 0px";
        ul.style.padding = "10px 10px";
        ul.style.cursor = "pointer";
        ul.style.transition = "0.3s ease";
        ul.style.border = "1px solid red";
            ul.style.borderRadius = "8px";
            ul.addEventListener('mouseenter', () => {
                ul.style.border = "none";
                ul.style.transform = "scale(1.03)";
            })
            ul.addEventListener('mouseleave', () => {
                ul.style.border = "2px solid red";
                ul.style.transform = "scale(1)";
            })
        let li = document.createElement('li');
        // let hr = document.createElement('hr');
        // hr.style.margin = "5px 0px"
        li.style.listStyle = "none";
        li.style.marginBottom = "10px";
        let h2 = document.createElement('h2');
        h2.innerHTML = `Course name: ${course.name}`;
        let p1 = document.createElement('p');
        p1.innerHTML = `Credit hours: ${course.crHrs}`;
        let p2 = document.createElement('p');
        p2.innerHTML = `Course code: ${course.code}`;
        li.appendChild(h2);
        li.appendChild(p1);
        li.appendChild(p2);
        ul.appendChild(li);
        allCourseBox.appendChild(ul);
        // allCourseBox.appendChild(hr)

    })
}

function showRemoveCourseSection() {
    removeCourseContainer.classList.remove('hidden');
    allCourseBox.classList.add('hidden');
    addCourseSection.classList.add('hidden');
    updateCourseInfoContainer.classList.add('hidden');
    logoutBox.classList.add('hidden');
    greetPart.classList.add('hidden');
    exportAllDataContainer.classList.add('hidden');
    updateStudentInfoContainer.classList.add('hidden');
}

function showRemoveCourseSearchResult() {
    ulAppendForRemoveSearch.textContent = "";
    let searchInput = removeCourseInput.value.trim().toLowerCase();
    let getItemSearch = JSON.parse(localStorage.getItem("courses"));
    getItemSearch.forEach((course) => {
        
        if(searchInput === course.name.toLowerCase() || searchInput === course.code.toLowerCase()) {
            console.log(course.name);
            console.log(course.code);
            console.log(course.crHrs);
            let ul = document.createElement('ul');
            ul.style.marginTop = "20px";
            ul.style.padding = "10px";
            ul.style.transition = "0.3s ease";
            ul.style.cursor = "pointer";
            ul.style.position = "relative";
            let li = document.createElement('li');
            li.style.listStyle = "none";
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            p1.style.fontSize = "21px";
            p1.style.marginTop = "10px";
            p2.style.fontSize = "21px";
            p2.style.marginTop = "10px";
            p3.style.fontSize = "21px";
            p3.style.marginTop = "10px";
            p1.innerHTML =`Course name: ${course.name}`;
            p2.innerHTML =`Course code: ${course.code}`;
            p3.innerHTML =`Credit hours: ${course.crHrs}`;
            let buttonDiv = document.createElement('div');
            let button = document.createElement('button');
            buttonDiv.appendChild(button);
            buttonDiv.style.position = "relative";
            button.textContent = "Delete";
            button.style.padding = "8px 14px";
            button.style.backgroundColor = "transparent";
            button.style.border = "2px solid red";
            button.style.borderRadius = "7px";
            button.style.cursor = "pointer";
            button.style.position = "absolute";
            button.style.right = "15px";
            button.style.top = "50px";
            button.style.transition = "0.3s ease";
            button.classList.add("search-button");
            button.addEventListener('click', () => {
                courses = courses.filter((c) => c.name.toLowerCase() !== course.name.toLowerCase());
                saveCourseToLocal();
                li.remove();
                removeCourseInput.value = "";
            });
            li.appendChild(p1);
            li.appendChild(p2);
            li.appendChild(p3);
            li.appendChild(button)
            ul.appendChild(li);
            ulAppendForRemoveSearch.appendChild(ul);
        }
    })
    
    // console.log(searchInput)
}


function normalSearchInput() {
    removeCourseInput.style.transform = "scale(1)";
    removeCourseInput.style.border = "1px solid #fff";
}

function animatedSearchInput() {
    removeCourseInput.style.transform = "scale(1.1)";
    removeCourseInput.style.border = "1px solid red";
}

function showSearchContainer() {
    greetPart.classList.add('hidden');
    removeCourseContainer.classList.add('hidden');
    allCourseBox.classList.add('hidden');
    addCourseSection.classList.add('hidden');
    logoutBox.classList.add('hidden');
    updateStudentInfoContainer.classList.add('hidden');
    exportAllDataContainer.classList.add('hidden');
    searchCourseContainer.classList.remove('hidden');
    updateCourseInfoContainer.classList.add('hidden');
}

function showSearchResult() {
    ulAppendForOnlySearch.textContent = "";
    let searchInput = onlySearchInput.value.trim().toLowerCase();
    let getItemSearch = JSON.parse(localStorage.getItem("courses"));
    getItemSearch.forEach((course) => {
        
        if(searchInput === course.name.toLowerCase() || searchInput === course.code.toLowerCase()) {
            console.log(course.name);
            console.log(course.code);
            console.log(course.crHrs);
            let ul = document.createElement('ul');
            ul.style.marginTop = "20px";
            ul.style.padding = "10px";
            ul.style.border = "2px solid red";
            ul.style.borderRadius = "8px";
            ul.addEventListener('mouseenter', () => {
                ul.style.border = "none";
                ul.style.transform = "scale(1.03)";
            })
            ul.addEventListener('mouseleave', () => {
                ul.style.border = "2px solid red";
                ul.style.transform = "scale(1)";
            })
            ul.style.transition = "0.3s ease";
            ul.style.cursor = "pointer";
            ul.style.position = "relative";
            let li = document.createElement('li');
            li.style.listStyle = "none";
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            p1.style.fontSize = "21px";
            p1.style.marginTop = "10px";
            p2.style.fontSize = "21px";
            p2.style.marginTop = "10px";
            p3.style.fontSize = "21px";
            p3.style.marginTop = "10px";
            p1.innerHTML =`Course name: ${course.name}`;
            p2.innerHTML =`Course code: ${course.code}`;
            p3.innerHTML =`Credit hours: ${course.crHrs}`;
            li.appendChild(p1);
            li.appendChild(p2);
            li.appendChild(p3);
            // li.appendChild(button)
            ul.appendChild(li);
            ulAppendForOnlySearch.appendChild(ul);
        }
    })
    
    // console.log(searchInput)
}

function showUpdateCourseInfoSection() {
    addCourseSection.classList.add('hidden');
    showAllCoursesContainer.classList.add('hidden');
    removeCourseContainer.classList.add('hidden');
    searchCourseContainer.classList.add('hidden');
    greetPart.classList.add('hidden');
    updateStudentInfoContainer.classList.add('hidden');
    updateCourseInfoContainer.classList.remove('hidden');
    showAllStudentsContainer.classList.add('hidden');
    alert("Entered update part")
}

function showCourseForUpdation() {
    ulAppendForCourseUpdation.innerHTML = "";
    let searchInput = courseUpdationInputValue.value.trim().toLowerCase();
    let getItemSearch = JSON.parse(localStorage.getItem("courses"));
    getItemSearch.forEach((course) => {
        
        if(searchInput === course.name.toLowerCase() || searchInput === course.code.toLowerCase()) {            
            console.log(course.name);
            console.log(course.code);
            console.log(course.crHrs);
            let ul = document.createElement('ul');
            ul.style.marginTop = "20px";
            ul.style.padding = "10px";
            ul.style.transition = "0.3s ease";
            ul.style.cursor = "pointer";
            ul.style.position = "relative";
            let li = document.createElement('li');
            li.style.listStyle = "none";
            let input1 = document.createElement('input');
            let input2 = document.createElement('input');
            let input3 = document.createElement('input');
            input1.style.fontSize = "21px";
            input1.style.width = "35vw";
            input1.style.marginTop = "10px";
            input1.style.type = "text";
            input1.style.display = "block";
            input1.style.transition = "0.3s ease";
            input1.style.backgroundColor = "transparent";
            input1.style.padding = "7px";
            input1.style.border = "none";
            input1.style.borderRadius = "7px";
            input1.style.color = "#fff";
            input1.style.outline = "none";
            //input2
            input2.style.fontSize = "21px";
            input2.style.marginTop = "10px";
            input2.style.type = "text";
            input2.style.display = "block";
            input2.style.transition = "0.3s ease";
            input2.style.backgroundColor ="transparent";
            input2.style.padding = "7px";
            input2.style.border = "none";
            input2.style.borderRadius = "7px";
            input2.style.color = "#fff";
            input2.style.display = "block";
            input2.style.outline = "none";
            input2.style.width = "35vw";
            //input3
            input3.style.fontSize = "21px";
            input3.style.marginTop = "10px";
            input3.style.display = "block";
            input3.style.type = "text";
            input3.style.display = "block";
            input3.style.transition = "0.3s ease";
            input3.style.backgroundColor ="transparent";
            input3.style.padding = "7px";
            input3.style.border = "none";
            input3.style.borderRadius = "7px";
            input3.style.color = "#fff";
            input3.style.outline = "none";
            input3.style.width = "35vw";
            input1.value =`Course name: ${course.name}`;
            input2.value =`Course code: ${course.code}`;
            input3.value =`Credit hours: ${course.crHrs}`;
            let buttonDiv = document.createElement('div');
            let button = document.createElement('button');
            let saveBtn = document.createElement('button');
            buttonDiv.appendChild(button);
            buttonDiv.appendChild(saveBtn);
            saveBtn.classList.add('hidden');
            buttonDiv.style.position = "relative";
            button.textContent = "Update";
            button.style.padding = "8px 14px";
            button.style.backgroundColor = "transparent";
            button.style.border = "2px solid red";
            button.style.borderRadius = "7px";
            button.style.cursor = "pointer";
            button.style.position = "absolute";
            button.style.right = "15px";
            button.style.top = "50px";
            button.style.transition = "0.3s ease";
            button.classList.add("search-button");
            // -- starting styling 
            saveBtn.textContent = "Save";
            saveBtn.style.padding = "8px 14px";
            saveBtn.style.backgroundColor = "transparent";
            saveBtn.style.border = "2px solid red";
            saveBtn.style.borderRadius = "7px";
            saveBtn.style.cursor = "pointer";
            saveBtn.style.position = "absolute";
            saveBtn.style.right = "15px";
            saveBtn.style.top = "50px";
            saveBtn.style.transition = "0.3s ease";
            saveBtn.classList.add("search-button");
            // -- styling ended
            // course updation update button code starting
            button.addEventListener('click', () => {
                button.classList.add('hidden');
                saveBtn.classList.remove('hidden');
                input1.style.border = "1px solid #fff";
                input1.style.outline = "none";
                input1.value = "";
                input1.placeholder = "Enter course name for " + course.name;
                input2.style.border = "1px solid #fff";
                input2.style.outline = "none";
                input2.value = "";
                input2.placeholder = "Enter course code " + course.name;   
                input3.style.border = "1px solid #fff";
                input3.style.outline = "none";
                input3.value = "";
                input3.placeholder = "Enter course credit hours " + course.name;
                input1.addEventListener('click', () => {
                input1.style.border = "1px solid red";
                input3.style.border = "1px solid #fff";
                input2.style.border = "1px solid #fff";
                input2.addEventListener('click', () => {
                input2.style.border = "1px solid red";
                input1.style.border = "1px solid #fff";
                input3.style.border = "1px solid #fff";
                input3.addEventListener('click', () => {
                input3.style.border = "1px solid red";
                input2.style.border = "1px solid #fff";
                input1.style.border = "1px solid #fff";
            })
            })
            })
            });
            // course updation update button code ended
             // course updation save button code starting
            saveBtn.addEventListener('click', () => {
                let updatedInput1Value = input1.value.trim();
                let updatedInput2Value = input2.value.trim();
                let updatedInput3Value = input3.value.trim();
                course.name = updatedInput1Value;
                course.code = updatedInput2Value;
                course.crHrs = updatedInput3Value;
                localStorage.setItem('courses', JSON.stringify(getItemSearch));
                saveBtn.classList.add('hidden');
                button.classList.remove('hidden');
            })
            // course updation save button code ended
            li.appendChild(input1);
            li.appendChild(input2);
            li.appendChild(input3);
            li.appendChild(button);
            li.appendChild(saveBtn);
            ul.appendChild(li);
            ulAppendForCourseUpdation.appendChild(ul);
        }
    })
}

function showRemoveStudetContainer() {
    addCourseSection.classList.add('hidden');
    showAllCoursesContainer.classList.add('hidden');
    removeCourseContainer.classList.add('hidden');
    searchCourseContainer.classList.add('hidden');
    greetPart.classList.add('hidden');
    updateCourseInfoContainer.classList.add('hidden');
    updateStudentInfoContainer.classList.add('hidden');
    exportAllDataContainer.classList.add('hidden');
    removeStudentContainer.classList.remove('hidden');
}

function showRemoveStudentSearchResult() {
    removeStudentUl.innerHTML = "";
    removeStudentUl.style.marginTop = "60px";
    removeStudentUl.style.position = "relative";
    let searchInput = removeStudentInput.value.trim().toLowerCase();
    let getStudentsData = JSON.parse(localStorage.getItem("studentsData")); 
    getStudentsData.forEach((student) => {
        if(searchInput === student.StudentsName.toLowerCase() || searchInput === student.RollNo) {
            let li = document.createElement('li');
            let div = document.createElement('div');
            let removeStudentBtn = document.createElement('button');
            div.appendChild(removeStudentBtn);
            div.style.position = "absolute";
            div.style.right = "15px";
            div.style.top = "40px";
            removeStudentBtn.innerHTML = "Remove";
            removeStudentBtn.style.padding = "8px 14px";
            removeStudentBtn.style.backgroundColor = "transparent";
            removeStudentBtn.style.border = "3px solid red";
            removeStudentBtn.style.borderRadius = "7px";
            removeStudentBtn.style.cursor = "pointer";
            removeStudentBtn.style.transition = "0.3s ease";
            removeStudentBtn.addEventListener('mouseenter', () => {
                removeStudentBtn.style.transform = "scale(1.1)";
            })
            removeStudentBtn.addEventListener('mouseleave', () => {
                removeStudentBtn.style.transform = "scale(1)";
            })
            removeStudentBtn.addEventListener('click', () => {
                getStudentsData = getStudentsData.filter(s => s.StudentsName !== student.StudentsName);
                localStorage.setItem("studentsData", JSON.stringify(getStudentsData));
                li.remove();
                alert("Student remoevd successfully!");
                removeStudentInput.value = "";
            })
            li.style.listStyle = "none";
            li.style.padding = "15px";
            li.style.border = "3px solid red"
            li.style.borderRadius = "7px";
            let h2 = document.createElement('h2');
            h2.style.marginBottom = "8px";
            let p1 = document.createElement('p');
            p1.style.marginBottom = "8px";
            let p2 = document.createElement('p');
            h2.textContent = `Student name: ${student.StudentsName}`;
            p1.textContent = `Student RollNo: ${student.RollNo}`;
            p2.textContent = `Student ID: ${student.ID}`;
            li.appendChild(h2);
            li.appendChild(p1);
            li.appendChild(p2);
            li.appendChild(div);
            removeStudentUl.appendChild(li);
        }
    })
}

function removeStudentInputClicked() {
    removeStudentInput.style.transition = "0.3s ease";
    removeStudentInput.style.transform = "scale(1.1)";
    removeStudentInput.style.border = "3px solid red";
}

function removeStudentInputLeaved() {
    removeStudentInput.style.transform = "scale(1)";
    removeStudentInput.style.border = "2px solid red"
}

function showUpdateStudentInfoContainer() {
    addCourseSection.classList.add('hidden');
    showAllCoursesContainer.classList.add('hidden');
    removeCourseContainer.classList.add('hidden');
    searchCourseContainer.classList.add('hidden');
    greetPart.classList.add('hidden');
    updateCourseInfoContainer.classList.add('hidden');
    removeStudentContainer.classList.add('hidden');
    updateStudentInfoContainer.classList.remove('hidden');
}

function showUpdateStudentInfoSearch() {
    updateStudentInfoUl.innerHTML = "";
    updateStudentInfoUl.style.marginTop = "60px";
    updateStudentInfoUl.style.position = "relative";
    let searchInput = updateStudentInfoInput.value.trim().toLowerCase();
    let getStudentsData = JSON.parse(localStorage.getItem("studentsData")); 
    getStudentsData.forEach((student) => {
        if(searchInput === student.StudentsName.toLowerCase() || searchInput === student.RollNo) {
            let li = document.createElement('li');
            let div = document.createElement('div');
            let updateStudentInfoBtnLi = document.createElement('button');
            updateStudentInfoBtnLi.addEventListener('mouseenter', () => {
                updateStudentInfoBtnLi.style.transform = "scale(1.1)";
            });
            updateStudentInfoBtnLi.addEventListener('click', () => {
                let saveBtnDiv = document.createElement('div');
                li.appendChild(saveBtnDiv);
                saveBtnDiv.style.position = "absolute";
                saveBtnDiv.style.right = "15px";
                saveBtnDiv.style.top = "50px";
                let saveBtn = document.createElement('button');
                saveBtn.textContent = "Save";
                // saveBtn.textContent = "Update";
                saveBtn.style.padding = "8px 14px";
                saveBtn.style.backgroundColor = "transparent";
                saveBtn.style.border = "3px solid red";
                saveBtn.style.borderRadius = "7px";
                saveBtn.style.cursor = "pointer";
                saveBtn.style.transition = "0.3s ease";
                updateStudentInfoBtnLi.classList.add('hidden');
                saveBtnDiv.appendChild(saveBtn);
                h2.value = "";
                p1.value = "";
                p2.value = "";
                h2.style.border = "3px solid red";
                h2.style.borderRadius = "7px";
                h2.style.padding = "5px";
                h2.placeholder = `Enter updated name of ${student.StudentsName}`;
                h2.style.fontSize = "14px";
                h2.style.fontWeight = "normal";
                p1.style.border = "3px solid red";
                p1.style.borderRadius = "7px";
                p1.style.padding = "5px";
                p1.placeholder = `Enter updated Roll No. of ${student.StudentsName}`
                p2.style.border = "3px solid red";
                p2.style.borderRadius = "7px";
                p2.style.padding = "5px";
                p2.placeholder = `Enter updated ID of ${student.StudentsName}`;
                saveBtn.addEventListener('click', () => {
                    saveBtn.classList.add('hidden');
                    updateStudentInfoBtnLi.classList.remove('hidden');
                    h2.style.border = "none";
                    h2.style.fontSize = "19px";
                    h2.style.fontWeight = "bold";
                    p1.style.border = "none";
                    p2.style.border = "none";
                    student.StudentsName = `${h2.value.trim()}`;
                    student.RollNo = `${p1.value.trim()}`;
                    student.ID = `${p2.value.trim()}`;
                    localStorage.setItem("studentsData", JSON.stringify(getStudentsData));
                    alert("Data Updated successfully!");
                    getStudentsData.forEach((s) => {
                        h2.value = s.StudentsName;
                        p1.value = s.RollNo;
                        p2.value = s.ID;
                    })
                })
            })
            div.appendChild(updateStudentInfoBtnLi);
            div.style.position = "absolute";
            div.style.right = "15px";
            div.style.top = "35px";
            updateStudentInfoBtnLi.textContent = "Update";
            updateStudentInfoBtnLi.style.padding = "8px 14px";
            updateStudentInfoBtnLi.style.backgroundColor = "transparent";
            updateStudentInfoBtnLi.style.border = "3px solid red";
            updateStudentInfoBtnLi.style.borderRadius = "7px";
            updateStudentInfoBtnLi.style.cursor = "pointer";
            updateStudentInfoBtnLi.style.transition = "0.3s ease";
            li.style.listStyle = "none";
            // li.style.position = "relative";
            li.style.padding = "15px";
            li.style.border = "3px solid red"
            li.style.borderRadius = "7px";
            let h2 = document.createElement('input');
            h2.style.marginBottom = "8px";
            h2.style.display = "block";
            h2.style.outline = "none";
            h2.style.border = "none";
            h2.style.backgroundColor = "transparent";
            h2.style.color = "#fff";
            h2.style.width = "35vw";
            h2.style.fontSize = "19px";
            h2.style.fontWeight = "bold";
            // h2.textContent = `Course name: ${}`;
            let p1 = document.createElement('input');
            p1.style.display = "block";
            p1.style.marginBottom = "8px";
            p1.style.outline = "none";
            p1.style.border = "none";
            p1.style.backgroundColor = "transparent";
            p1.style.color = "#fff";
            p1.style.width = "35vw"
            let p2 = document.createElement('input');
            p2.style.display = "block";
            p2.style.outline = "none";
            p2.style.border = "none";
            p2.style.backgroundColor = "transparent";
            p2.style.color = "#fff";
            p2.style.width = "35vw"
            h2.value = `Student name: ${student.StudentsName}`;
            p1.value = `Student RollNo: ${student.RollNo}`;
            p2.value = `Student ID: ${student.ID}`;
            li.appendChild(h2);
            li.appendChild(p1);
            li.appendChild(p2);
            li.appendChild(div);
            updateStudentInfoUl.appendChild(li);
        }
    })
}

function showAllStudentsRecord() {
    addCourseSection.classList.add('hidden');
    showAllCoursesContainer.classList.add('hidden');
    removeCourseContainer.classList.add('hidden');
    searchCourseContainer.classList.add('hidden');
    greetPart.classList.add('hidden');
    updateCourseInfoContainer.classList.add('hidden');
    updateStudentInfoContainer.classList.add('hidden');
    removeStudentContainer.classList.add('hidden');
    exportAllDataContainer.classList.add('hidden');
    showAllStudentsContainer.classList.remove('hidden');
    showAllStudents();
}

function showAllStudents() {
    let getAllStudents = JSON.parse(localStorage.getItem("studentsData"));
    getAllStudents.forEach((student) => {
        let li = document.createElement('li');
        li.style.listStyle = "none";
        li.style.padding = "15px";
        li.style.marginBottom = "10px";
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        p1.style.marginBottom = "8px";
        p2.style.marginBottom = "8px";
        p1.textContent = `Name: ${student.StudentsName}`;
        p2.textContent = `Roll No: ${student.RollNo}`;
        p3.textContent = `ID: ${student.ID}`;
        li.style.border = "2px solid red";
        li.style.borderRadius = "7px";
        li.style.transition = "0.3s ease";
        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);
        showAllStudentsUl.appendChild(li);
        li.addEventListener('mouseenter', () => {
            li.style.transform = "scale(1.06)";
            li.style.cursor = "pointer";
            li.style.backgroundColor = "#0d0e0e";
        })

        li.addEventListener('mouseleave', () => {
            li.style.transform = "scale(1)";
            li.style.cursor = "pointer";
            li.style.backgroundColor = "transparent";
        })
    })
}

function  showAllData() {
    addCourseSection.classList.add('hidden');
    showAllCoursesContainer.classList.add('hidden');
    removeCourseContainer.classList.add('hidden');
    searchCourseContainer.classList.add('hidden');
    greetPart.classList.add('hidden');
    updateCourseInfoContainer.classList.add('hidden');
    updateStudentInfoContainer.classList.add('hidden');
    removeStudentContainer.classList.add('hidden');
    showAllStudentsContainer.classList.add('hidden');
    exportAllDataContainer.classList.remove('hidden');
}

function showAllStudentsData() {
    appendAllData.innerHTML = "";
    appendAllData.style.marginTop = "20px";
    let getALlStudentsData = JSON.parse(localStorage.getItem("studentsData"));
    getALlStudentsData.forEach((student) => {
        let li = document.createElement('li');
        li.style.listStyle = "none";
        li.style.padding = "15px";
        li.style.marginBottom = "10px";
        li.style.border = "2px solid red";
        li.style.borderRadius = "7px";
        li.style.transition = "0.3s ease";
        li.addEventListener('mouseenter', () => {
            li.style.transform = "scale(1.03)";
            li.style.cursor ="pointer";
            li.style.backgroundColor = "#0d0e0e";
        })
        li.addEventListener('mouseleave', () => {
            li.style.transform = "scale(1)";
            li.style.backgroundColor = "transparent";
        })
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        p1.style.marginBottom = "8px";
        p2.style.marginBottom = "8px";
        p1.textContent = `Name: ${student.StudentsName}`;
        p2.textContent = `RollNo: ${student.RollNo}`;
        p3.textContent = `ID: ${student.ID}`;
        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);
        appendAllData.appendChild(li);
    })
}

function showAllCoursesData() {
    appendAllData.innerHTML = "";
    appendAllData.style.marginTop = "20px";
    let getALlCoursesData = JSON.parse(localStorage.getItem("courses"));
    getALlCoursesData.forEach((course) => {
        let li = document.createElement('li');
        li.style.listStyle = "none";
        li.style.padding = "15px";
        li.style.marginBottom = "10px";
        li.style.border = "2px solid red";
        li.style.borderRadius = "7px";
        li.style.transition = "0.3s ease";
        li.addEventListener('mouseenter', () => {
            li.style.transform = "scale(1.05)";
            li.style.cursor ="pointer";
            li.style.backgroundColor = "#0d0e0e";
        })
        li.addEventListener('mouseleave', () => {
            li.style.transform = "scale(1)";
            li.style.backgroundColor = "transparent";
        })
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        p1.style.marginBottom = "8px";
        p2.style.marginBottom = "8px";
        p1.textContent = `Name: ${course.name}`;
        p2.textContent = `Code: ${course.code}`;
        p3.textContent = `Credit Hours: ${course.crHrs}`;
        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);
        appendAllData.appendChild(li);
})
}
})