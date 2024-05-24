import { Link, Route, Routes } from "react-router-dom";
import { useParams } from "react-router";
import "./App.css";

const Home = () => {
  return <div>Bienvenido</div>;
};

const Ver = (props) => {
  const { num } = useParams();
  
  return( 
  <>
  {isNaN(num)?<div>La palabra es {num} </div>:<div>El numero es {num} </div>
  }
  </>  
  );
};

const AñadirStyles = (props) => {
  const { num, color, back } = useParams();
  
  return( 
  <div style={ {backgroundColor: `${back}`,
                color: `${color}`
  }}>
  {isNaN(num)?<div>La palabra es {num} </div>:<div>El numero es {num} </div>
  }
  </div>  
  );
};



function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:num" element={<Ver />} />
        <Route path="/:num/:color/:back"
        element={<AñadirStyles/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
