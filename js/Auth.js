// kiểm tra các trang trong web xem login hay chưa
// nếu chưa, thì trở về trang login
window.onload = function() {
    const email = sessionStorage.getItem('email');
    if(!email || email === '') {
        window.location.replace('login.html');
    }
    // kiểm tra nếu có id loginAs thì mới set value là email
    if($('#loginAs')) {
        $('#loginAs').html(email);
    }
}