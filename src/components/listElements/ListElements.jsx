const ListElements = (props) => {
    return ( 
        <>
        <li><a href={props.link}>{props.navTo}</a></li>
        </>
    );
}

export default ListElements;