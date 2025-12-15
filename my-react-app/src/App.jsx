import React, { useState,Suspense } from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom"
import {request} from './Request.jsx'
import Home from './Home/index.jsx'
import Navbar from './Pages/Navbar/index.jsx'
import useDebounce from './Hooks/useDebounce.js'
import Loader from "./Components/Loader/index.jsx"
import Contact from "./Pages/Contact/index.jsx"
import About from "./Pages/About/index.jsx"
import Smovie from "./Pages/Smovie/index.jsx"



const App = () =>{

    const Home = React.lazy(() => import('./Home'));

    const Header= React.lazy(() => import('./Pages/Navbar'));

    const[value,setValue]=useState("")
    const{debouncedValue}=useDebounce({value:value,delay:500})
    return(
        <div className="App">
            <BrowserRouter>
            <Navbar value={value} setValue={setValue}/>
            <Routes>
            <Route path='/' element={
                <div className="Container">
                <Suspense fallback={<div><Loader/></div>}>
                {
                    debouncedValue && <Home url={request.search(debouncedValue)} title={"Search Results"}/>
                }
                <Home url={request.popular} title={"Popular"}/>
                <Home url={request.trending} title={"Trending"}/>
                <Home url={request.upComming} title={"upComming"}/>
                <Home url={request.Action} title={"Action"}/>
                </Suspense>
                </div>
            }/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/movie/:id' element={<Smovie/>}/>
            </Routes>
            </BrowserRouter>
            </div>
    )
}


export default App