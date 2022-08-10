// var name = document.getElementById("name")
// console.log(username.value)

(function validateForm() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var age = document.getElementById("age");
    var preferences = document.getElementById("preferences");
    var checkTerms = document.getElementById("checkTerms");
    var checkNews = document.getElementById("checkNews");
    var errorMsg = document.getElementById("errorMsg");
    var button = document.getElementById("submit");


    let warningName = document.querySelector(".warningName");
    let warningEmail = document.querySelector(".warningEmail");
    let warningPhone = document.querySelector(".warningPhone");
    let warningAge = document.querySelector(".warningAge");
    let warningPref = document.querySelector(".warningPref");

    let counter = 0;

    button.addEventListener("click", (e) => {
        e.preventDefault();
        warningName.style.display = "none";
        warningEmail.style.display = "none";
        warningPhone.style.display = "none";
        warningAge.style.display = "none";
        warningPref.style.display = "none";
        counter = 1;

      if (name.value.length < 5 || !(isNaN(name.value))) {
        warningName.style.display = "block";
        warningName.style.color = "red";
        warningName.style.fontSize = "12px";
        warningName.style.paddingTop = "3px";
        counter--;
      }
      // warningName.innerHTML = "";

      if (!email.value.includes("@")) {
        warningEmail.style.display = "block";
        warningEmail.style.color = "red";
        warningEmail.style.fontSize = "12px";
        warningEmail.style.paddingTop = "3px";
        counter--;
      }

      if (isNaN(phone.value) || phone.value == "" || phone.value.length < 8 || phone.value.length > 15) {
        warningPhone.style.display = "block";
        warningPhone.style.color = "red";
        warningPhone.style.fontSize = "12px";
        warningPhone.style.paddingTop = "3px";
        counter--;
      }

      if (age.value <= 10) {
        warningAge.style.display = "block";
        warningAge.style.color = "red";
        warningAge.style.fontSize = "12px";
        warningAge.style.paddingTop = "3px";
        counter--;
      }

      if (preferences.value === "default") {
        warningPref.style.display = "block";
        warningPref.style.color = "red";
        warningPref.style.fontSize = "12px";
        warningPref.style.paddingTop = "3px";
        counter--;
      }

      if(!checkTerms.checked) {
        alert("Please check terms and conditions");
        counter--;
      }
      if(!checkNews.checked) {
        alert("Please check receive newsletters from us");
        counter--;
      }
      if(counter == 1){
        alert("Sucessfully subscribed to newsletter, please check your email. Happy Shopping!");
        window.location.reload();
      }
    });

  })();


      //  if (isNum()) {
    //    warningPhone.style.display = "block";
    //    warningPhone.style.color = "red";
    //    warningPhone.style.fontSize = "12px";
    //    warningPhone.style.paddingTop = "3px";

    // }
      // if (!isNaN(phone.value)) {
      // }

      // if (!(Number.isInteger(parseInt(phone.value)))) {
      //   // console.log(Number.isInteger(parseInt(phone.value)));
      //   warningPhone.style.display = "block";
      //   warningPhone.style.color = "red";
      //   warningPhone.style.fontSize = "12px";
      //   warningPhone.style.paddingTop = "3px";
      // }
      // } else if(phone.isInteger(parseInt(phone.value))){
      //   warningPhone.innerHTML = "";
      // }