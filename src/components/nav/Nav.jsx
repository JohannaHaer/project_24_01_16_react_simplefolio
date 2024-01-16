import ListElements from "../listElements/ListElements";
import Logo from "../../assets/img/react-logo.png"
import "./nav.css"

const Nav = () => {
    return ( 
        <>
            <header>
                <img src={Logo} alt="" />
                <nav>
                    <ListElements
                    navTo = {"Projects"}
                    />
                    <ListElements
                    navTo = {"Skills"}
                    />
                    <ListElements
                    navTo = {"Contact"}
                    />
                </nav>
            </header>
        </>
    );
}

export default Nav;