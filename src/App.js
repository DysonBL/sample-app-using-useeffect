import React from "react";
import Register from './componentslogin/Register';
import Screen from './componentslogin/Screen';
import Functionlife from './ComponentLifecycle/Functionlife'

const App = () => {
    // const[row,setData]=useState([])
    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>res.json().then((res)=>setData(res)))
    // },[])
    // console.log("login")
return (
    <div>
        {/* <h1>Basic Table</h1> */}
        {/* {row &&<BasicTable data={row}/>} */}
        
        <Register/>   
        {/* <Functionlife/> */}
    </div>
)
}


export default App;