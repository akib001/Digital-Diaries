import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/ui/Layout';
import CreateBlog from './components/CreateBlog';
import YourBlogs from './components/YourBlogs';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />

        <Route path='create-blog'>
           <Route index element={<CreateBlog/>} /> 
        </Route>

        <Route path='your-blogs'>
           <Route index element={<YourBlogs/>} /> 
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
