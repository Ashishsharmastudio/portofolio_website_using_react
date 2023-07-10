function Student(props) {
    console.log(props.email);
    return (
        <div style={{ backgroundColor: "skyblue", margin: 10 }}>
            <h1>Hello {props.name}</h1>
            <h2>email: {props.email}</h2>
            <h4>Address: {props.other.address}</h4>
        </div>
    );
}

export default Student