import React, {useState} from 'react'

function Search(props){
    const[add, setAdd] = useState(false)
    const[language, setLanguage] = useState('');
    const[num, setNum] = useState('');

    const form = (
    <div className = "form">
        
        <input placeholder = "Language (optinial)" style ={{margin:"10px 0"}} onChange = {(e)=> setLanguage(e.target.value)} />
        <a href = "https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">List_of_ISO_639-1_codes</a>
  
        {/*https://developers.themoviedb.org/3/getting-started/languages*/}
        <input type = "number" placeholder = "How Many?" style ={{margin:"10px 0"}} onChange = {(e)=> setNum(e.target.value)}/>{/*https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>&language=de*/}
        <button onClick = {()=> props.language(language, num)} >Submit</button>
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