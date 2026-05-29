import './App.css';
// import { Name } from './Component/Name';
// import { Counter } from './Component/Counter';
import {Navbar} from './Component/Navbar'
import {Tasks} from './Component/Tasks'
import {About} from './Component/About'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className = 'App'>
      <header>
        <Navbar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Tasks/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<p>404 page not found</p>}/>
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
