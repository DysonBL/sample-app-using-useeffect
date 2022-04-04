import React from "react";
import Hocs from "./Hocs";

const Companylist=(props)=>{
    let  Company=[{
        Id:"01",
        Name:"10 decoders",
        City:"Chenni"
   },
   {
     Id:"02",
     Name:"Dorustree",
     City:"Tiruchi"
},
{
    Id:"03",
    Name:"TCS",
    City:"Chenni"
}
]
    return(
        <>
        <div>  
            <h1>{props.Name}</h1>
             <p>How is Going </p>
              
                <table className="Company">    
                    <thead>    
                        <tr>    
                            <td>Company Id</td>    
                            <td>Company Name</td>    
                            <td>Company Number</td>    
                        </tr>    
                    </thead>    
                    <tbody>    
                   { Company.map((Company)=>{
                       return(
                           <>
                           <tr>
                               <td>{Company.Id}</td>
                               <td>{Company.Name}</td>
                               <td>{Company.City}</td>
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
export default Hocs(Companylist);