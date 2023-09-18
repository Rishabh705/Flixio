import React from 'react'
import '../styles/Hamburger.css'
export default function Hamburger() {
    const handleClick = (e) => {
        const menu_btn = document.querySelector(".menu-btn")
        const menu_icon = document.querySelector(".menu-icon")
        const navbar_nav = document.querySelector(".navbar-nav")
        const navlist = document.querySelector(".navlist")
        if (window.innerWidth < 768) {
            if (menu_btn.style.display !== 'none') {
                if (navbar_nav.style.display !== "none") {
                    if (e.target.className !== "navlist") {
                        menu_icon.classList.remove("icon_clicked", "icon_clicked::before", "icon_clicked::after")
                        navbar_nav.style.display = "none"
                    }
                }
                else {
                    if (e.target.className === "menu-btn" || e.target.className === "menu-icon") {
                        navbar_nav.style.display = "flex"
                        navlist.style.animation="showMenu 0.2s ease-in-out forwards"
                        menu_icon.classList.add("icon_clicked", "icon_clicked::before", "icon_clicked::after")
                    }
                }
            }
        }
    }
    React.useEffect(() => {
        if (window.innerWidth < 768) {
            document.addEventListener("click", handleClick);
        }
        //cleanup
        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])
    return (
        <div className="menu-btn">
            <span className="menu-icon"></span>
        </div>
    )
}
