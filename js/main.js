function User({ email, name, option, message }) {
  this.email = email;
  this.name = name;
  this.option = option;
  this.message = message;
  return this;
}












function validateForm() {
  // debugger;

  let email = document.forms['myForm']['email'].value;
  let name = document.forms['myForm']['firstname'].value;
  let option = document.forms['myForm']['droplist'].value;
  let message = document.forms['myForm']['text'].value;
  let newUser = new User({ email, name, option, message });
  if (email.length !== 0 && name.length !== 0) {
    console.log(newUser);
    //let jsonUser = JSON.stringify(newUser);
    setUser(newUser);
  } else {
    alert('Neher pisat herny!')
  }

}

function getUser() {
  let users = localStorage.getItem('user');
  let newUsersArray = JSON.parse(users)
  console.log(newUsersArray);
}

function setUser(user) {
  //debugger;
  let array = [];
  let getLocalUsers = localStorage.getItem('user');
  if (getLocalUsers === null) {
    array.push(user);
  }
  if (getLocalUsers !== null) {
    array = JSON.parse(getLocalUsers);
    array.push(user);
  }
  let usersValue = JSON.stringify(array);
  localStorage.setItem('user', usersValue)

}

function showUser() {
  debugger;
  let divValue = document.getElementById('test');
  console.log(divValue.value);
}