export default function tabsNavigation() {
    const btns = document.querySelectorAll("#tabsNav button");
    const contentImgs = document.querySelectorAll("#tabsContentImgs > img");
    const contentTexts = document.querySelectorAll("#tabsContentTexts > div");

    function showTabContents(index) {
        if (!contentImgs[index].classList.contains("show") && !contentTexts[index].classList.contains("show")) {

            function show(element) {
                element.forEach((item) => {
                    item.classList.remove("show");
                    setTimeout(() => {
                        item.style.display = "none";
                    }, 300);
                });

                setTimeout(() => {
                    element[index].style.display = "block";
    
                    setTimeout(() => {
                        element[index].classList.add("show");
                    }, 20);
                }, 300);
            }
            show(contentImgs);
            show(contentTexts);
        }
    }
    btns.forEach((item, index) => {
        item.addEventListener("click", () => {
            showTabContents(index);

            btns.forEach(element => {
                element.parentElement.classList.remove("active");
            });
            item.parentElement.classList.add("active");
        });
    });
    btns[0].parentElement.classList.add("active");
    contentImgs[0].style.display = "block";
    contentImgs[0].classList.add("show");
    contentTexts[0].style.display = "block";
    contentTexts[0].classList.add("show");
}