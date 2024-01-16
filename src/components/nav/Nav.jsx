import ListElements from "../listElements/ListElements";

const Nav = (props) => {
    return ( 
        <>
            <ListElements
            navTo = {"Projects"}
            link = {props.id}
            />
            <ListElements
            navTo = {"Skills"}
            link = {"https://github.com/JohannaHaer/project_24_01_16_react_simplefolio"}
            />
            <ListElements
            navTo = {"Contact"}
            link = {"https://github.com/JohannaHaer/project_24_01_16_react_simplefolio"}
            />
        </>
    );
}

export default Nav;