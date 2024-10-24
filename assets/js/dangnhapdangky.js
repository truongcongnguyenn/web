let accounts = JSON.parse(localStorage.getItem("accounts")) || []

function dangKy(tendangnhap, mail ,mk){

    let isExistiedAccount = accounts.find(account => account.username === tendangnhap);
    if (isExistiedAccount) {
        alert('Tài khoản đã tồn tại.');
        return false;
    }

    let newAccount = {username: tendangnhap, email: mail, password: mk};
    accounts.push(newAccount);
    localStorage.setItem("accounts", JSON.stringify(accounts)); // Lưu lại danh sách tài khoản vào localStorage
    console.log("Check account: "+accounts);
    return true;
}

function dangNhap(username, password) {
    console.log("Check account dang nhap: " + accounts);
    let foundAccount = accounts.find(account => account.username === username && account.password === password);
    if (foundAccount) {
        return true;
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng.")
        return false;
    }
}


function resetAccounts() {
    localStorage.removeItem("accounts");
    accounts = [];
    console.log("Đã xóa toàn bộ tài khoản!");
}
