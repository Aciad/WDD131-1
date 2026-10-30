const body = document.querySelector("body");
const main = document.querySelector("main");
const section = document.querySelector("section");
const studentId = document.querySelector("#sub-id");
const accessCode = document.querySelector("#sub-accesscode");

const form = document.querySelector("#input-form");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const date = document.querySelector("event-date")
const tickettype = document.querySelector("#ticket-type")
const acode = document.querySelector("#acode");
const idnum = document.querySelector("#idnum");
const output = document.querySelector("#output");

tickettype.addEventListener("change", showType);
console.log("UPSTART");


function showType() {
    console.log(tickettype.value)
    accessCode.classList.add("hidden");
    studentId.classList.add("hidden");
    acode.removeAttribute("required");
    idnum.removeAttribute("required");
    form.acode.value = "";
    form.idnum.value = "";
    switch (tickettype.value) {
        case "default":
            break;
        case "student":
            studentId.classList.remove("hidden");
            // accessCode.toggleAttribute("required");
            idnum.setAttribute("required", true);
            console.log("toggle student id");
            break;
        case "guest":
            accessCode.classList.remove("hidden");
            // accessCode.toggleAttribute("required");
            acode.setAttribute("required", true);
            console.log("toggle access code");
            break;
    }
}

function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "";

    const firstName = form.fname.value.trim();
    const lastName = form.lname.value.trim();
    const email = form.email.value.trim();
    const eventCode = form.acode.value.trim();
    const applicantType = tickettype.value;
    const studentId = form.idnum.value.trim();
    const startDate = form.date.value;

    if (firstName.length == 0 || lastName.length == 0){
        output.textContent = "You must input a first or last name.";
    }
    else if (isPastDate(startDate)) {
        output.textContent = "You must choose a date past today";
    }
    else if (eventCode != "EVENT131" && form.acode.required) {
        output.textContent = "You must enter a valid access code.";
    }
    else if (studentId.length != 7 && form.idnum.required) {
        output.textContent = "You must enter a valid Student ID.";
    }
    else if (tickettype.value == "default") {
        output.textContent = "Please choose a non-default type option";
    }
    else {
        output.textContent = "";

        let successfulSubmit = `
        <section>
        <h2>Ticket Created</h2>
        <p> ${firstName} ${lastName}   </br>
            ${applicantType}    </br>
            ${date}    </br>
        </p>
        </section>
        `;
        console.log("supposed to be a successful submit");
        main.innerHTML += successfulSubmit;
    }



});