import React from "react";
import "./Hoc.css";
import Hocs from "./Hocs";

const Employelist=(props)=>{
     let  Employe=[{
            Id:"01",
            Name:"Heney",
            Number:"7094337921"
       },
       {
         Id:"02",
         Name:"Dyson",
         Number:"9094337924"
    },
    {
        Id:"03",
        Name:"Felix",
        Number:"8094337929"
    },
    ]
    return(
        <>
        <div>  
            <h1>{props.Name}</h1>
        <p>This is Employe Details </p>  
                <table className="Employe">    
                    <thead>    
                        <tr>    
                            <td>Employe Id</td>    
                            <td>Employe Name</td>    
                            <td>Employe Number</td>    
                        </tr>
                           
                    </thead>    
                    <tbody>    
                   { Employe.map((Employe)=>{
                       return(
                           <>
                           <tr>
                               <td>{Employe.Id}</td>
                               <td>{Employe.Name}</td>
                               <td>{Employe.Number}</td>
                           </tr>
                           </>
                       )

                   })} 
                    </tbody>    
                </table>    
            </div>   
        </>
    )
}
export default Hocs(Employelist);