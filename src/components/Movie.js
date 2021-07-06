import '../App.css';
import React, {useState} from 'react';
function Movie(props){  
    const links = props.data;

 
    
    const makeImg = (link)=>{
        return(
            <li>
                    <figure>
                         <img src= {link.url} alt="img01" />
                         <figcaption>
                           <h3>{link.overview}</h3>
                           <span>ID: {link.id}</span>
                           <a href="http://dribbble.com/shots/1115632-Camera">Take a look</a>
                       </figcaption>
                   </figure>
                   <p className = "title">original_title:</p>
            </li>
        )}
    return(
        <div>
       <ul className="grid cs-style-1">
         {links.map(link =>   
                makeImg(link)
          )}
          
            

          
        </ul>
        </div>
    )
}
export default Movie;