$(() => {
function loginHelper(){
  const userNumber = $("usernumber").val();
  const loginForm = $('login_form').val();
  let urlLink = "http://localhost:8080/users/login/"
  urlLink = urlLink + userNumber;
  loginForm.action = urlLink
  console.log(urlLink)
}
});


function loginHelper(){
  const action_src = "http://localhost:8080/users/login/" + document.getElementsByName("usernumber")[0].value;
  let login_form = document.getElementById('login_form');
  login_form.action = action_src ; }
