import React from 'react'


const Searchbox=({searchchange})=>{

    return(
        <div className="pa2">
      
         <input className="ba -lightest-blue pa3 b--green bw1" type='search' placeholder='search robots' 
         onChange={searchchange}
          />
         

        </div>
      

    );
}

export default Searchbox;