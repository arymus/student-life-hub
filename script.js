// --- GLOBAL VARIABLES ---
let student = {
  fname: "",
  lname: "",
  grade: 0,
  bio: "",
};

// --- FORMS ---
const basicInfoForm = document.querySelector("#basic-info > form");
const moreInfoForm = document.querySelector("#more-info > form");
const scheduleForm = document.querySelector("#schedule > form");
const toDoForm = document.querySelector("#tasks > form");

// --- EVENT LISTENERS ---
basicInfoForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop the page from reloading
  const formData = new FormData(basicInfoForm); // Get the data from the form
  
  // Get the data from the form and update the data in the student object
  const fname = formData.get("fname");
  const lname = formData.get("lname");
  const grade = +formData.get("grade"); // The + attempts to convert the grade to a Number type
  
  student.fname = fname;
  student.lname = lname;
  student.grade = grade;
  
  // Update HTML to show the new data
  const nameParagraph = document.getElementById("my-name");
  nameParagraph.innerText = `Name: ${student.lname}, ${student.fname}`;
  
  const gradeParagraph = document.getElementById("my-grade");
  gradeParagraph.innerText = `Grade: ${student.grade}`;
});

moreInfoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(moreInfoForm);
  
  const bio = formData.get("bio");
  student.bio = bio;
  
  const bioParagraph = document.getElementById("my-bio");
  bioParagraph.innerHTML = `My bio:<br />${student.bio}`; // Edit innerHTML to insert line break
});

scheduleForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(scheduleForm);
  const myClasses = document.getElementById("my-classes");
  
  const newClass = {
    className: formData.get("className"),
    period: +formData.get("period"), // The + turns the formData into a Number type
    roomNumber: +formData.get("roomNumber"),
    teacher: formData.get("teacher")
  };
  
  student.classes.push(newClass);
  const classListItem = document.createElement("li");
  classListItem.innerText = `${newClass.className}, ${newClass.teacher} ${newClass.roomNumber}, period ${newClass.period}`;
  classListItem.addEventListener("click", () => classListItem.remove());
  myClasses.appendChild(classListItem);
});

toDoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(toDoForm);
    const toDo = document.getElementById("my-tasks");

    const taskName = formData.get("taskName");
    const taskListItem = document.createElement("li");
    taskListItem.innerText = taskName;
    taskListItem.addEventListener("click", () => taskListItem.remove());
    toDo.appendChild(taskListItem);
});