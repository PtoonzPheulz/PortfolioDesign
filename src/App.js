import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
        <Routes>
      {/* <Route path="/" element={<Home />}> */}
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route  path="about" element={<About />}>
          {/* <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} /> */}
        </Route>
      {/* </Route> */}
    </Routes>
    </div>
  );
}

export default App;
