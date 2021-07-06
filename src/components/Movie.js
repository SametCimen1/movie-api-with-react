import '../App.css';
import React, {useState} from 'react';
function Movie(props){  
    const links = props.img;
    const data = props.data;
 
    
    const makeImg = (link)=>{
        return(
            <li>
                    <figure>
                         <img src= {link} alt="img01" />
                         <figcaption>
                           <h3>Camera</h3>
                           <span>Jacob Cummings</span>
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
                makeImg(link.url)
          )}
          
            

          
        </ul>
        </div>
    )
}
export default Movie;