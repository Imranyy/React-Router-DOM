import './App.css';
import Navbar from './Navbar';
import Home from  './Home'
import NewPost from  './NewPost'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from  './Footer'
import ErrorPage from './ErrorPage'
import About from './About';
import PostPage from './PostPage';

import {useState, UseEffect} from 'react';


function App() {
  return (
  <Router>
     <Navbar/>
    
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/new' element={<NewPost/>}/>
       <Route path='/post' element={<PostPage/>}/>
       <Route path='/footer' element={<Footer/>}/>
       <Route path='*' element={<ErrorPage/>}/>
       
     
      </Routes> 
      </Router>
   
  
  );
}
 
export default App;
