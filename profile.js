if (window.localStorage == !null) {
  console.log("Not empty");
} else {
  console.log("Empty");
}
// pFname.innerHTML = `<p>Full name: ${locgt[0]}</p>`;
const man = JSON.parse(localStorage.getItem("myDats"));
console.log(man);

const pFname = document.querySelector("#pFname");
const pUserName = document.querySelector("#pUserName");
const pEmail = document.querySelector("#pEmail");
const pPwd = document.querySelector("#pPwd");

pFname.innerHTML = `<p>Full name: ${man[-1]}</p>`;
pUserName.innerHTML = `<p>Username: ${man[1]}</p>`;
pEmail.innerHTML = `<p>Email: ${man[2]}</p>`;
pPwd.innerHTML = `<p>Password: ${man[3]}</p>`;
