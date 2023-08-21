let toggleBox = document.querySelector(".packeges .max-width .toggle-box"),
    packegesToggleRight = document.querySelector(".packeges .max-width .toggle-box .right"),
    packegesToggleLeft = document.querySelector(".packeges .max-width .toggle-box .left"),
    packegesFirstPlansCont = document.querySelector(".packeges .packeges-cont"),
    packegesSecondPlansCont = document.querySelector(".packeges .packeges-cont-second"),
    packagesButtons = document.querySelectorAll('.packeges .max-width .packeges-cont button, .packeges .max-width .packeges-cont-second button');


function package() {
    toggleBox.childNodes.forEach(element => {
        element.onclick = (e) => {
            if (e.currentTarget.classList.contains("right")) {
                packegesToggleLeft.classList.remove("checked")
                packegesToggleRight.classList.add("checked")
                packegesSecondPlansCont.style.display = "none"
                packegesFirstPlansCont.style.display = "flex"
            } else if (e.currentTarget.classList.contains("left")) {
                packegesToggleRight.classList.remove("checked")
                packegesToggleLeft.classList.add("checked")
                packegesFirstPlansCont.style.display = "none"
                packegesSecondPlansCont.style.cssText = "display: unset !important"
            }
        }
    });
}
package()
packagesButtons.forEach(element => {
    element.onclick = () => {
        doneMessage('../assets/images/Done.webp', 'تم إضافة اشتراك الباقة إلى السلة', "../pages/cart/cart.html", 'حسناً')
    }
});