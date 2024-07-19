import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Post from './Post'
import PostList from './PostList'



function App() {

  return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/post' element={<Post/>}></Route>
      <Route path='/postlist' element={<PostList/>}></Route>
    </Routes>
</BrowserRouter>

  )
}

export default App
