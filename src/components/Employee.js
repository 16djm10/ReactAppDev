function Employee(props) {
  return (
    <>
      <h3>Employee {props.name}</h3>
      
      <p>{props.role ? props.role : "No role assigned"}</p> {/* variable ? if true: else */}
    </>
  );
}

export default Employee;