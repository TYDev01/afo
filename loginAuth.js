const fullName = document.querySelector("#fullName");
const pwd = document.querySelector("#pwd");
const form = document.querySelector("#form");
const showPwd = document.querySelector("#showPwd");

form.addEventListener("change", (e) => {
  e.preventDefault();
  auth();
  valiAuth();
  // pAuth();
});

showPwd.addEventListener("click", () => {
  if (pwd.type === "password") {
    pwd.type = "text";
    showPwd.innerHTML = `<i class="fa-thin fa-eye"></i>`;
  } else {
    pwd.type = "password";
  }
});

function auth() {
  let lowerCas = /[a-z]/g;
  if (fullName.value.match(lowerCas)) {
    fullName.style.borderColor = "green";
    console.log("Valid input");
  } else {
    fullName.style.borderColor = "red";
    // alert("Add a small letter");
  }

  //   VALIDATE CAPITAL LETERS
  //   let capitLet = /[A-Z]/g;
  //   if (fullName.value.match(capitLet)) {
  //     console.log("Correct ✅");
  //   } else {
  //     console.log("You must add a capital letter");
  //   }
}

// function pAuth() {
//   let patterns = /[?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}]/g;
//   if (pwd.value.match(patterns)) {
//     console.log("Valid pwd");
//   } else {
//     console.log("Invalid pwd");
//   }
// }

// VALIDATION
// if (window.localStorage == !null) {
//   console.log("201");
// } else {
//   console.log("Sign up please");
// }

// let checki = JSON.parse(localStorage.getItem("myDats"));
// console.log(checki);

function valiAuth() {
  let checki = JSON.parse(localStorage.getItem("myDats"));
  if (fullName !== checki[0] || pwd !== checki[3]) {
    console.log("error info");
  } else {
    console.log("Success");
  }
}


let chngName = document.getElementById('chngName');
chngName.innerHTML = "My page";
chngName.className = "color: red";