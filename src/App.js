import Book from './components/Book';
import HomePage from './components/HomePage';
import './App.css';
import {BrowserRouter, Route, Routes,Link} from 'react-router-dom'

function App() {
  return (
    <>
      <body>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<HomePage/>}/>
          <Route path='/:id' element={<Book/>}/>
        </Routes>
      </BrowserRouter>
      </body>

    </>
  );
}

export default App;
