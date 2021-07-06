import React, {useState} from 'react'

function Search(props){
    const[add, setAdd] = useState(false)
    const form = (
    <div className = "form">
        <input placeholder = "Language" style ={{margin:"10px 0"}}/>{/*https://developers.themoviedb.org/3/getting-started/languages*/}
        <input placeholder = "Language" style ={{margin:"10px 0"}}/>
    </div>
    
    )
 return(
     <div className ="searchContainer">
       <input placeholder = "enter movie title" className = "movieTitle" onChange = {(e)=> props.onChange(e)}/>
       <button className = "btn" onClick = {props.onSearch}>Search Movie</button>
       <p className = "adv" onClick = {()=> setAdd(prev => !prev)}>Advanced</p>
       {add ? form : ''}
     
     </div>
 )
}

export default Search