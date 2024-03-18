import './index.css'; // importing the css file
import Employee from './components/Employee';// importing components
import { useState } from 'react'; // import the useState hook

function App() {
  const [role, setRole] = useState('dev'); // dev is just default value
  const showEmployees = true;
  return ( // this returns the JSX that will be rendered to the DOM
    // this is the root element
    <div className="bg-red-300">   
        {showEmployees ? 
            <>
              <input 
                type='text' 
                onChange={ (e) => {
                  console.log(e.target.value); 
                  setRole(e.target.value);
                }}
              />
              <Employee name="David" role="R&D Engineer" />
              <Employee name="Abby" role="Software Developer" />
              <Employee  name="Jane" role={role} />
            </>
          :
            <h3>No access allowed</h3>
        }
    </div>
  );
}

export default App;
