let lis = document.querySelectorAll("header ul li"),
// #############
secondPageToggel = document.querySelector(".secondPage .max-width .toggle-box"),
secondPageTogglRight = document.querySelector(".secondPage .max-width .toggle-box .right"),
secondPageTogglLeft = document.querySelector(".secondPage .max-width .toggle-box .left"),
secondPageFirstPlansCont = document.querySelector(".secondPage .packedges-cont"),
secondPageSecondPlansCont = document.querySelector(".secondPage .packedges-cont-second"),
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


if (currentPageName === 'packeges.html'){
    function firstPageToggle() {
        // console.log(secondPageToggel.children)
        secondPageToggel.childNodes.forEach(element => {
            element.onclick = (e) => {
                if(e.currentTarget.classList.contains("right")){
                    secondPageTogglLeft.classList.remove("checked")
                    secondPageTogglRight.classList.add("checked")
                    secondPageSecondPlansCont.style.display = "none"
                    secondPageFirstPlansCont.style.display = "flex"
                } else if (e.currentTarget.classList.contains("left")){
                    secondPageTogglRight.classList.remove("checked")
                    secondPageTogglLeft.classList.add("checked")
                    secondPageFirstPlansCont.style.display = "none"
                    secondPageSecondPlansCont.style.cssText  = "display: unset !important"
                }
            }
        });
    }
    firstPageToggle() 
}


if (currentPageName === 'systems.html'){
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

if (currentPageName === 'Frequently-Asked-Questions.html'){


    fifthPageBoxes.forEach((element, index) => {
        // const before = element.querySelector(".con" ).children;
        // console.log( before );
        // before.style.color = "#f00";
        
        element.onclick = (e) => {

            if (!(e.currentTarget.classList.contains('checked'))){

                fifthPageExpandedText[index].style.display = 'flex'
                e.currentTarget.classList.add("checked")

            } else if (e.currentTarget.classList.contains('checked')){

                fifthPageExpandedText[index].style.display = 'none'
                e.currentTarget.classList.remove("checked")

            }


        }
    });

}