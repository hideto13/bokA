var form = document.querySelector("form");
var email = document.querySelector("[name=email]");
var password = document.querySelector("[name=password]");

var isStorageSupport = true;
var emailStorage = "";


document.documentElement .classList.replace('no-js', 'js');
  
try {
    emailStorage = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }


email.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (emailStorage) {
        email.value = emailStorage;
    }
  });

form.addEventListener("submit", function (evt) {
    if (!email.value || !password.value) {
      evt.preventDefault();
      console.log("Нужно заполнить все поля");
    } else { if (isStorageSupport) {
      localStorage.setItem("email", email.value); }
    }
  });
