import Footer from './components/Footer';
import Header from './components/Header';
import PostDetail from './pages/PostDetail';
import PostList from './pages/PostList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header/>
          <Router>
              <Routes>
                  <Route path='/' element={<PostList/>} />
                  <Route path='/posts/:id' element={<PostDetail/>} />
              </Routes>
          </Router>
        <Footer/>
    </div>
  );
}

export default App;
