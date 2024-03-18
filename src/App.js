import './App.css';

// importing components
import Employee from './components/Employee';

function App() {
  //you can also declare variables here
  const showEmployees = true;
  return ( // this returns the JSX that will be rendered to the DOM
    // this is the root element
    <div className="App">   
        {showEmployees ? 
            <>
              <Employee />
              <Employee />
              <Employee />
            </>
          :
            <h3>No access allowed</h3>
        };
    </div>
  );
}

export default App;
