let lis = document.querySelectorAll("header ul li"),
    // #############
    secondPageToggel = document.querySelector(".secondPage .max-width .toggle-box"),
    secondPageToggleRight = document.querySelector(".secondPage .max-width .toggle-box .right"),
    secondPageTogglLeft = document.querySelector(".secondPage .max-width .toggle-box .left"),
    secondPageFirstPlansCont = document.querySelector(".secondPage .packages-cont"),
    secondPageSecondPlansCont = document.querySelector(".secondPage .packages-cont-second"),
    // ##############
    therdPageMainTitle = document.querySelector(".therdPage .max-width > h1"),
    therdPageMainBoxes = document.querySelectorAll(".therdPage .max-width .boxes-container > .box"),
    therdPageMainInsideBoxes = document.querySelectorAll(".therdPage .max-width .boxes-container > .box .main"),
    therdPageSecondboxes = document.querySelectorAll(".therdPage .max-width .boxes-container > .box .second-page"),
    therdPageSecondboxesPrevios = document.querySelectorAll(".therdPage .boxes-container > .box .second-page .links-cont h4:last-child a");
// ##############
let fifthPageBoxes = document.querySelectorAll('.fifthPage .max-width .boxes-cont .box'),
    fifthPageExpandedText = document.querySelectorAll('.fifthPage .max-width .boxes-cont .box .opened');


const currentPageName = window.location.pathname.split('/').pop();
console.log()


const width = window.innerWidth || document.documentElement.clientWidth;
let header = document.querySelector('header');
let burger = document.querySelector('header .max-width .links_container .burgerIcon');
let ul = document.querySelector('header .links_container ul');
let settingIcon = document.querySelector('header .max-width .links_container  img')
let settingIconBox = document.querySelector('header .links_container .setting .box')
let settingIconBoxColors = document.querySelectorAll('header .links_container .setting .box span')




if (width < 1150) {
    burger.onclick = function burgerClick() {

        if (burger.classList.contains("checked")) {
            burger.classList.remove("checked")
            ul.style.cssText = 'max-height: 0; padding: 0; transition: 1s; display: flex;'
            header.style.marginBottom = '0'
            header.style.transition = '1s'
            ul.style.display = 'none'
            settingIcon.style.display = 'none';

            settingIconBox.classList.remove('open')

        } else if (!(burger.classList.contains("checked"))) {
            burger.classList.add("checked")

            if (width < 900) {
                header.style.marginBottom = '320px';
            } else {
                header.style.marginBottom = '155px'
            }

            header.style.transition = '1s'

            function headerTimeOut() {
                // ul.style.cssText = 'display: flex; max-height: 150px; padding: 25px; transition: 0.5s; padding-right: 75px;'
                if (width < 900) {
                    settingIcon.style.cssText = 'display: flex;';
                    ul.style.cssText = 'display: flex; max-height: 150px; padding: 25px; transition: 0.5s; padding-right: 75px; padding-top: 75px; ';
                } else {
                    settingIcon.style.cssText = 'display: flex; margin-left: 15px; bottom: -65px; z-index: 11; right: 25px;';
                    ul.style.cssText = 'display: flex; max-height: 150px; padding: 25px; transition: 0.5s; padding-right: 75px; padding-top: 70px; ';
                }
            }
            setTimeout(headerTimeOut, 500);

        }
    }
}

settingIcon.onclick = () => {
    if (!(settingIconBox.classList.contains('open'))) {
        settingIconBox.classList.add('open')
    } else {
        settingIconBox.classList.remove('open')
    }
}

settingIconBoxColors.forEach(element => {
    element.onclick = () => {
        document.documentElement.style.setProperty(`--primary-color`, `${element.getAttribute('data-color')}`);
    }
});


function doneMessage(amgSrc, messageCont, nextPage, buttonText) {
    const messageOverLay = document.createElement('div');
    messageOverLay.classList = 'overLay';

    const messageBox = document.createElement('div');
    messageBox.classList = 'container';

    const img = document.createElement("img");
    img.setAttribute("src", `${amgSrc}`);
    messageBox.appendChild(img)

    const H2Text = document.createElement('h2')
    H2Text.innerText = messageCont
    messageBox.appendChild(H2Text)

    const button = document.createElement('a')
    const buttonInnerText = document.createTextNode(buttonText)
    button.appendChild(buttonInnerText)
    button.setAttribute("href", `${nextPage}`);
    messageBox.appendChild(button)

    messageOverLay.appendChild(messageBox)
    document.body.appendChild(messageOverLay)
}


if (currentPageName === 'packeges.html') {
    function firstPageToggle() {
        console.log(secondPageToggel.children)
        secondPageToggel.childNodes.forEach(element => {
            element.onclick = (e) => {
                if (e.currentTarget.classList.contains("right")) {
                    secondPageTogglLeft.classList.remove("checked")
                    secondPageToggleRight.classList.add("checked")
                    secondPageSecondPlansCont.style.display = "none"
                    secondPageFirstPlansCont.style.display = "flex"
                } else if (e.currentTarget.classList.contains("left")) {
                    secondPageToggleRight.classList.remove("checked")
                    secondPageTogglLeft.classList.add("checked")
                    secondPageFirstPlansCont.style.display = "none"
                    secondPageSecondPlansCont.style.cssText = "display: unset !important"
                }
            }
        });
    }
    firstPageToggle()

    let packagesButtons = document.querySelectorAll('.secondPage .packages-cont .left-box a, .secondPage .packages-cont .mid-box a, .secondPage .packages-cont .right-box a, .secondPage .packages-cont-second .left-box a, .secondPage .packages-cont-second .mid-box a, .secondPage .packages-cont-second .right-box a');
    packagesButtons.forEach(element => {
        element.onclick = () => {
            doneMessage('../assets/images/Done.png', 'تم إضافة اشتراك الباقة إلى السلة', "../pages/cart/cart.html", 'حسناً')
        }
    });

}

if (currentPageName === 'technical-support.html') {
    const technicalSupportButton = document.querySelector('.fourthPage .max-width .container .right form button ');
    const form = document.querySelector('.fourthPage .max-width .container .right form')

    technicalSupportButton.onclick = () => {

        // Check if the form is valid
        if (form.checkValidity() === true) {
            event.preventDefault();
            event.stopPropagation();
            doneMessage('../assets/images/Done.png', 'تم إرسال رسالتك وسوف يتم التواصل معك في أقرب وقت', "technical-support.html", 'حسناً')
        }
    }
}

if (currentPageName === 'pay.html') {
    const payButton = document.querySelector('.pay .max-width .container > .right > .box button');
    payButton.onclick = () => {
        doneMessage('../../assets/images/Done.png', 'تم الدفع والاشتراك في الخدمات بنجاح', "../../index.html", 'اشتراكاتي')
    }
}

if (currentPageName === 'Add-a-central-test-and-register-for-the-test.html') {
    const centralTest = document.querySelector('.Add-a-central-test-and-register-for-the-test .max-width .bottom-container button');
    centralTest.onclick = () => {
        doneMessage('../../../../assets/images/Done.png', 'تمت حفظ التعديلات بنجاح', "Add-a-central-test-and-register-for-the-test.html", 'حسناً')
    }
}

if (currentPageName === 'systems.html') {
    function therdPageCards() {

        therdPageMainInsideBoxes.forEach((element, index) => {
            element.onclick = (e) => {

                therdPageMainTitle.style.display = 'none'
                therdPageMainInsideBoxes.forEach(element => {
                    element.style.display = 'none'
                });
                therdPageMainBoxes.forEach(element => {
                    element.style.display = 'none'
                });
                therdPageMainBoxes[index].style.display = 'flex'
                e.currentTarget.style.display = 'flex'
                e.currentTarget.style.display = 'none'

                e.currentTarget.nextElementSibling.style.cssText = 'display: flex !important'

            }
        });


    }
    therdPageCards()

    // handle therd page nested pages
    therdPageSecondboxesPrevios.forEach((element, index) => {
        element.onclick = (e) => {
            console.log(index)
            therdPageSecondboxes[index].style.removeProperty("display")
            therdPageMainTitle.style.display = 'flex'

            therdPageMainBoxes.forEach(element => {
                element.style.display = 'flex'
            });
            therdPageMainInsideBoxes.forEach(element => {
                element.style.display = 'flex'
            });
        }
    });

}

if (currentPageName === 'Frequently-Asked-Questions.html') {


    fifthPageBoxes.forEach((element, index) => {

        element.onclick = (e) => {

            if (!(e.currentTarget.classList.contains('checked'))) {

                fifthPageExpandedText[index].style.cssText = 'max-height: 175px; padding: 25px;'
                // console.log(fifthPageExpandedText[0])
                e.currentTarget.classList.add("checked")

            } else if (e.currentTarget.classList.contains('checked')) {

                fifthPageExpandedText[index].style.cssText = ' '
                e.currentTarget.classList.remove("checked")

            }



        }
    });

}

if (currentPageName === 'account.html') {
    const accountButtons = document.querySelector('.account .max-width .container .lift button');
    accountButtons.onclick = () => {
        doneMessage('../../assets/images/Done.png', 'تمت العملية بنجاح', "account.html", 'حسناً')
    }
}

if (currentPageName === 'account-new-password.html') {
    const accountNewPasswordButtons = document.querySelector('.account-new-password .max-width .container .lift button');
    accountNewPasswordButtons.onclick = () => {
        doneMessage('../../assets/images/Done.png', 'تم تغيير كلمة المرور بنجاح', "account.html", 'حسناً')
    }
}

if (currentPageName === 'newPassword.html') {
    const newPasswordButtons = document.querySelector('.newPassword .container .right .button');
    newPasswordButtons.onclick = () => {
        doneMessage('../../assets/images/Done.png', 'تم تغيير كلمة المرور بنجاح', "../account/loginPage.html", 'تسجيل دخول')
    }
}

const currentPageNameForNestedPages = window.location.pathname.split('/');
if (currentPageNameForNestedPages[currentPageNameForNestedPages.length - 2] === 'Nested') {

    const systemsSubmitButtons = document.querySelectorAll('.systemsSubmitButtons');
    const overlayButton = document.querySelector('.overLay .container a ');
    systemsSubmitButtons.forEach(element => {
        element.onclick = () => {
            doneMessage('../../../../assets/images/Done.png', 'تمت العملية بنجاح', '', 'حسناً')
        }
        overlayButton.onclick = () => {
            // window.history.back()
        }
    });
}
