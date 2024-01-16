const ProjectSections = (props) => {
    return ( 
        <>
            <section>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <h4>{props.description}</h4>
            </section>
        </>
    );
}

export default ProjectSections;