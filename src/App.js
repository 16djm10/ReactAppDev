import './index.css'; // importing the css file
import Employee from './components/Employee';// importing components
import { useState } from 'react'; // import the useState hook
import { v4 as uuidv4 } from 'uuid'; // import the uuid/guid package
import AddEmployee from './components/AddEmployeeModal'; // importing the AddEmployeeModal component

function App() {
  const [role, setRole] = useState('dev'); // dev is just default value
  const showEmployees = true;
  const [employees, setEmployees] = useState([
      {
        id: 1,
        name: "David", 
        role: "R&D Engineer", 
        img: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg"
      },
      {
        id: 2,
        name: "Caleb", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
      },
      {
        id: 3,
        name: "Jane", 
        role: "Manager", 
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
      },
      {
        id: 4,
        name: "Abby",
        role: "HR",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
      },
      {
        id: 5,
        name: "Josh",
        role: "IT Support",
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
      }
    ]); // setting the default value of the employees state

  // creating a function to pass to modal to update employee informatoin
  function updateEmployee(id, newName, newRole) {
      const updatedEmployees = employees.map((employee) => {
        if (employee.id === id) {
          return { ...employee, name: newName, role: newRole };// ... expands the employee object
        }
        return employee;
      });
      setEmployees(updatedEmployees); // the setter for the employees state
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(), 
      name, 
      role, 
      img};
    setEmployees([...employees, newEmployee]);// this accesses the list of employes directly
  }


  return (
    <div className="App">   
        {showEmployees ? 
            <>
              <input 
                type='text' 
                onChange={ (e) => {
                  console.log(e.target.value); 
                  setRole(e.target.value);
                }}
              />
              <div className="flex flex-wrap justify-center">
                {/* map allows us to loop through the employees array */}
                {employees.map((employee) => {
                  return (
                    <Employee 
                      //key={uuidv4()} 
                      key={employee.id}
                      id={employee.id}
                      name={employee.name} 
                      role={employee.role} 
                      img={employee.img} 
                      alt={employee.name}
                      updateEmployee={updateEmployee}// passing the function to the Employee component
                    />
                  );
                })}
              </div>
              <div className="flex justify-center">
                <AddEmployee 
                  newEmployee={newEmployee}
                />
              </div>
            </>
          :
            <h3>No access allowed</h3>
        }
    </div>
  );
}

export default App;
