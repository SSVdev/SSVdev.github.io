
function submitLogin() {
    // use HTML DOM
     //let email = document.getElementById('exampleInputEmail').value;
     //let password = document.getElementById('exampleInputPassword').value;

    // use jquery
    let email = $('#exampleInputEmail').val();
    let password = $('#exampleInputPassword').val();
    // general
    console.log('submitLogin: email = ', email);
    console.log('submitLogin: password = ', password);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
    //console.log('read secsion email = ' + sessionStorage.getItem('email'));
    //window.location.replace('index.html');

    // use jquery: kiểm tra login
    $.post('https://codelaghien.club/web/login.asp', {
           username: email,
           password: password
    })  
        .done(function(returnedData) {
            //console.log(returnedData);
            const myData = JSON.parse(returnedData);
            console.log(myData);
            if(myData['secret-key']) {
                // login thành công thì cho vào 
                window.location.replace('index.html');
            } else {
                alert('Invalid Password! Please re-enter the correct password');
            }
        })
        .fail(function(xhr, status, error) {
            console.log(error);
        })
       
}

function logout() {
    sessionStorage.setItem("email", '');
    sessionStorage.setItem("password", '');
    window.location.replace('login.html');
}