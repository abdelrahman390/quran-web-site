let logOutButton = document.querySelector(' .max-width .container .right .cont.logoutButton')

logOutButton.onclick = () => {
    doneMessage('../../assets/images/alarm.webp', 'هل انت متأكد من تسجيل الخروج', `loginPage.html`, "تسجيل الخروج", 'Done', 'Done');
}