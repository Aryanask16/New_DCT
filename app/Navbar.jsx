import NavbarDemo from "./NavbarDemo"
import './css/Navbar.css'


export default function Navbar(){
    return(
        <div className="flex flex-wrap nav-container">
            <div className="logo"><img src="" alt="" />DCT Logo</div>
            <NavbarDemo />
        </div>
    )
}