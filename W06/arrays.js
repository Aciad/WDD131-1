
//javascript array
let courses = ["WDD131", "TESOL PRACTICUM", "DS250", "CSE212", "WDD231"];

console.log(courses[0]);
console.log(courses[5]);

// let coursesAndGPA = ["WDD131", 3.7, "ITM220", 4];

//javascript object
let courseAndGPA = {
    courseName: "WDD131",
    courseGPA: 3.7,
    professor: "Brother Warner"
}

console.log(courseAndGPA);


let coursesAndGPA = [
    {
        courseName: "WDD131",
        courseGPA: 3.7,
        professor: "Brother Warner"
    },
    {
        courseName: "WDD212",
        courseGPA: 3.9,
        professor: "Brother Warner"
    },
    {
        courseName: "WDD231",
        courseGPA: 2.2,
        professor: "Brother Warner"
    }
]

console.log(coursesAndGPA);

//oowee hallenge

console.log(coursesAndGPA[2].courseName);


//trad for loop
for(let i = 0; i < coursesAndGPA.length; i++) {
    console.log(coursesAndGPA[i].courseGPA);
}

console.log("------------");

//foreach loop javascript
coursesAndGPA.forEach(item => {
    console.log(item.courseName);
    console.log(item.courseGPA);
});

//grabbing body ref
let body = document.querySelector('body');
//template literals
//build out HTML dynamically based on array contents
// const dynamicHTML = `
//     <div>
//         <h1>${course.courseName}</h1>
//         <h2>${course.courseGPA}</h2>
//     </div>
// `;

coursesAndGPA.forEach(course => {
    let dynamicHTML = `
    <div>
        <h1>${course.courseName}</h1>
        <h2>${course.courseGPA}</h2>
    </div>
    `;
    body.innerHTML += dynamicHTML;
});