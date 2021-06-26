// hàm kiểm tra login
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

    
    /* https://codelaghien.club/web/login.asp dịch vụ API codelaghien làm sẵn
       để cung cấp secret-key khi login
    */
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

// hàm logout
function logout() {
    sessionStorage.setItem("email", '');
    sessionStorage.setItem("password", '');
    window.location.replace('login.html');
}

// hàm tạo bảng dùng jquery và thư viện DataTable
function refreshData() {
    //console.log('refreshData');
    $('#dataTable_wrapper').remove();
    $('#myTableData').append(
        '<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0"></table>'
    );

    // use Lib DataTable
    const columns = [
        {data: 'name.first', title: 'name'},
        {data: 'gender', title: 'gender'},
        {data: 'email', title: 'email'},
        {data: 'phone', title: 'phone'},
        {
            data: 'picture.thumbnail',
            title: 'picture',
            render: function(url,type,full) {
                return '<img height="50" src="'+ url +'"/>';
            }
        } 
    ];

    $('#dataTable').DataTable( {
        ajax: {
            url: 'https://randomuser.me/api/?results=100',
            dataSrc: 'results'
        },
        columns: columns,
    });
}