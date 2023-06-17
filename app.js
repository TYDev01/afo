const fullName = document.querySelector("#full-name");
const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const pwd = document.querySelector("#password");
const myForm = document.querySelector("#my-form");

const pFname = document.querySelector("#pFname");
const pUserName = document.querySelector("#pUserName");
const pEmail = document.querySelector("#pEmail");
const pPwd = document.querySelector("#pPwd");

// const locale = localStorage;

// console.log(locale);
const myDats = [];

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  isDuplicate();
});

// TO CCHECK IF IT'S DUPLICATE

function isDuplicate() {
  myDats.push(fullName.value, userName.value, email.value, pwd.value);
  let dupli = myDats.some((userInf) => userInf.value === myDats);
  if (dupli) {
    alert("User already exist");
  } else {
    localStorage.setItem("UserSignup", JSON.stringify(myDats));
  }
}

// myForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   myDats.push(fullName.value, userName.value, email.value, pwd.value);
//   console.log(myDats);
//   localStr();
// });

// if (fullName.value || userName.value || email.value === localStorage.getItem("myDats")) {
// }

// SETTING THE LOCALSTORAGE

// const age = myDats.find

// function localStr() {
//   const isDuplicate = myDats.some((dataInf)=>myDats.value)
//   myDats.forEach((elem) => {
//     if (elem.email === email) {
//       alert("Email in use");
//     }else{
//       localStorage.setItem("myDats", JSON.stringify(myDats));
//     }
//   });
// }

// DISPLAYING TO THE PROFILE
// const locgt = JSON.parse(localStorage.getItem("myDats"));

// console.log(locgt);

// pFname.innerHTML = `<p>Full name: ${locgt[0]}</p>`;

let greet = document.querySelector("#greetin");

let curDate = new Date();
let curHrs = curDate.getHours();
let greetin;
let mthz = curDate.getDate();
console.log(curDate);
console.log(mthz);

const timestamp = 1643200384959;

const date = new Date(timestamp);
console.log(date); // 👉️ Wed Jan 26 2022

const year = date.getFullYear();
console.log(year); // 👉️ 2022

const month = date.getMonth();
console.log(month); // 👉️ 0 (January = 0, February = 1, etc)

const monthName = date.toLocaleString("default", {
  month: "long",
});
console.log(monthName); // 👉️ "January"

const day = date.getDate();
console.log(day); // 👉️ 26

let nameOfMonth = new Intl.DateTimeFormat("en-us", { month: "long" }).format(
  new Date()
);
console.log(nameOfMonth);

if (curHrs < 7) {
  greetin = "Good Morning";
} else if (curHrs >= 7 && curHrs <= 12) {
  greetin = "Good Afternoon";
} else {
  greetin = "Good Evening";
}

// greet.innerHTML = `<b>${greetin}</b>  Anthony `;

let btnBtn = document.querySelector(".btn-btn");
let modal = document.querySelector(".modal");
let closem = document.querySelector(".close");

btnBtn.addEventListener("click", () => {
  modal.classList.add("bg-active");
  closem.classList.remove("bg-active");
});
closem.addEventListener("click", () => {
  modal.classList.remove("bg-active");
});

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

const countDate = () => {
  const mdate = new Date();
  mdate.toLocaleString("default", {
    month: "long",
    hour: "numeric",
    hour12: true,
  });
  const mday = date.getDate();
  const currentHour = addZero(mdate.getHours());
  const currentMinutes = addZero(mdate.getMinutes());
  const currentSeconds = addZero(mdate.getSeconds());
  const currentTime = currentHour + ":" + currentMinutes + ":" + currentSeconds;
  console.log(currentTime);
};

setInterval(countDate(), 1000);

setInterval(() => {
  let timeD = new Date();
  let myTime = document.querySelector("#myTime");
  myTime.innerHTML =
    timeD.getDate() +
    ":" +
    addZero(timeD.getHours()) +
    ":" +
    addZero(timeD.getMinutes()) +
    ":" +
    addZero(timeD.getSeconds());
}, 1000);

function check() {
  console.log("My check");
}

// console.log(check(man))

let feedback = prompt();
if(feedback >= 5 && feedback <= 10){
  console.log("Safe")
}else if (feedback < 5){
  console.log("Not Safe")
}

