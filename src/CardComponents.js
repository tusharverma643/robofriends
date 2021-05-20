import React from "react";
import Card from './Card';
const CardComponents=({robots})=>{

    const cardlist =robots.map((user,i)=>{
        return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    })
    return(
       
        
        <div>
            {cardlist}
        </div>
     
    );
}
export default CardComponents;


