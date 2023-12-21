const ulclassTag = document.querySelector(".ulclass");
const btnclassTag = document.querySelector(".btnclass");
const inputBoxTag = document.getElementById("input-box");

function checked() {
  if (inputBoxTag.value == "") {
    alert("Please Enter Something");
  } else {
    const name = inputBoxTag.value;
    const radioTag = document.createElement("input");
    radioTag.classList.add("radioclass");
    radioTag.type = "radio";
    radioTag.value = "test";

    const liTag = document.createElement("li");
    const ptag = document.createElement("p");
    ptag.classList.add("pclass");
    liTag.classList.add("liclass");
    ptag.innerHTML = name;
    liTag.append(radioTag);
    liTag.append(ptag);
    ulclassTag.append(liTag);
    clickone();
  }
}
btnclassTag.addEventListener("click", () => {
  checked();
});

function clickone() {
  ulclassTag.addEventListener(
    "click",
    (e) => {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
      } else if (e.target.tagName === "p") {
        e.target.parentElement.remove();
      }
    },
    false
  );
}
