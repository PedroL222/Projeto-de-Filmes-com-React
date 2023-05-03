import "./App.css";
import { Link, Outlet } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <nav id="navbar">
        <h2>
          <Link to='/'>NetFilmes</Link>
        </h2>
        <Link to='/movie/1'>Movies</Link><br></br>
        <Link to='/search'>Search</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
