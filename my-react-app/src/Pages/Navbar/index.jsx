import React from "react";
import {Link} from 'react-router-dom';
import {Button} from '../../Components/Button/index.jsx'
import {Input} from '../../Components/Input/index.jsx'
import './index.css';


const index = () =>{
    const [value, setValue] = React.useState('');
    return(
        <div className="nav">
        <div className="nav-right">
        <h2>Movie App</h2>
        </div>
        <div className="nav-left">
        <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder={'Search Movies...'} type={'text'} />
        <Button>Search</Button>
        <ul className="nav-links">
            <li><Link to={''} style={{textDecoration:'none',color:'white'}}>Home</Link></li>
            <li><Link to={''} style={{textDecoration:'none',color:'white'}}>Show</Link></li>
            <li><Link to={''} style={{textDecoration:'none',color:'white'}}>About</Link></li>
            <li><Link to={''} style={{textDecoration:'none',color:'white'}}>Contact</Link></li>
        </ul>
        </div>
        </div>
    )
}

export default index