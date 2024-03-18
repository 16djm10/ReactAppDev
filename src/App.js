import './index.css'; // importing the css file
import Employee from './components/Employee';// importing components
import { useState } from 'react'; // import the useState hook
import { v4 as uuidv4 } from 'uuid'; // import the uuid/guid package

function App() {
  const [role, setRole] = useState('dev'); // dev is just default value
  const showEmployees = true;
  const [employees, setEmployees] = useState([
      {
        name: "David", 
        role: "R&D Engineer", 
        img: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg"
      },
      {
        name: "Caleb", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
      },
      {
        name: "Jane", 
        role: "Manager", 
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
      },
      {
        name: "Abby",
        role: "HR",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
      },
      {
        name: "Josh",
        role: "IT Support",
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
      }
    ]); // setting the default value of the employees state
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
                    <Employee key={uuidv4()} name={employee.name} role={employee.role} img={employee.img} alt={employee.name}
                    />
                  );
                })}
              </div>
            </>
          :
            <h3>No access allowed</h3>
        }
    </div>
  );
}

export default App;
