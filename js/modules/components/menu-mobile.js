export default function menuMobile() {
    const btn = document.getElementById("headerBtnMobile");
    const menu = btn.nextElementSibling;


    function openMenu() {
        btn.ariaExpanded = true;
        btn.ariaLabel = "Fechar menu de navegação";
        btn.classList.add("close");
        btn.innerHTML = 
        `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
        <g fill="#D0D6F9" fill-rule="evenodd">
          <path d="m2.575.954 16.97 16.97-2.12 2.122L.455 3.076z"/>
          <path d="M.454 17.925 17.424.955l2.122 2.12-16.97 16.97z"/>
        </g>
        </svg>`;

        document.body.classList.add("menu-mobile-scrollbar");

        menu.classList.add("display");
        setTimeout(() => {
            menu.firstElementChild.classList.add("show");
        }, 20);
        setTimeout(() => {
            menu.addEventListener("click", clickOutside);
        }, 300)
    }
    function closeMenu() {
        btn.ariaExpanded = false;
        btn.ariaLabel = "Abrir menu de navegação";
        btn.classList.remove("close");
        btn.innerHTML = 
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
        <path d="M0 0h24v3H0zm0 9h24v3H0zm0 9h24v3H0z" fill="#D0D6F9" fill-rule="evenodd"/>
        </svg>`;

        document.body.classList.remove("menu-mobile-scrollbar");

        menu.firstElementChild.classList.remove("show");
        menu.removeEventListener("click", clickOutside);
        setTimeout(() => {
            menu.classList.remove("display");
        }, 300);
    }

    function clickOutside(event) {
        if (event.target === menu) {
            closeMenu();
        }
    }
    btn.addEventListener("click", () => {
        if (btn.ariaExpanded === "false") {
            openMenu();
        } else {
            closeMenu();
        }
    });
}