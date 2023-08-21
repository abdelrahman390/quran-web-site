let packegesDeleteButton = document.querySelectorAll(".account-subscription .max-width .container .lift .box button"),
    overLay = document.querySelector('.overLay'),
    deleteButtonFromMessage,
    removeBox;

packegesDeleteButton.forEach(element => {
    element.onclick = () => {
        doneMessage('../../assets/images/alarm.webp', 'هل انت متأكد من مسح الباقة', "#", 'موافق', '', 'done')
        removeBox = element.parentElement;
        removePackage()
    }
});


function removePackage() {
    deleteButtonFromMessage = document.querySelector('.overLay .container a'),
        overLay = document.querySelector('.overLay');
    deleteButtonFromMessage.addEventListener('click', function () {
        removeBox.remove();
        overLay.remove();
    })
}