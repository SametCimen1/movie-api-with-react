import Header from './Header'
import Search from './Search'
import React, {useState, useEffect} from 'react'
import Movie from './Movie'
import $ from 'jquery'; 



// {"adult":false,"id":3924,"original_title":"Blondie","popularity":1.723,"video":false},
// {"adult":false,"id":6124,"original_title":"Der Mann ohne Namen","popularity":0.6,"video":false},
// {"adult":false,"id":8773,"original_title":"L'amour à vingt ans","popularity":3.305,"video":false},
// {"adult":false,"id":25449,"original_title":"New World Disorder 9: Never Enough","popularity":0.653,"video":false},
// {"adult":false,"id":31975,"original_title":"Sesame Street: Elmo Loves You!","popularity":1.4,"video":true},
// {"adult":false,"id":2,"original_title":"Ariel","popularity":9.318,"video":false},
// {"adult":false,"id":3,"original_title":"Varjoja paratiisissa","popularity":6.43,"video":false},
// {"adult":false,"id":5,"original_title":"Four Rooms","popularity":16.083,"video":false},
// {"adult":false,"id":6,"original_title":"Judgment Night","popularity":8.83,"video":false},
// {"adult":false,"id":8,"original_title":"Life in Loops (A Megacities RMX)","popularity":1.152,"video":false},
// {"adult":false,"id":9,"original_title":"Sonntag im August","popularity":1.4,"video":false},
// {"adult":false,"id":11,"original_title":"Star Wars","popularity":58.112,"video":false},
// {"adult":false,"id":12,"original_title":"Finding Nemo","popularity":81.097,"video":false},
// {"adult":false,"id":13,"original_title":"Forrest Gump","popularity":53.554,"video":false},
// {"adult":false,"id":14,"original_title":"American Beauty","popularity":23.647,"video":false},
// {"adult":false,"id":15,"original_title":"Citizen Kane","popularity":17.629,"video":false},
// {"adult":false,"id":16,"original_title":"Dancer in the Dark","popularity":14.095,"video":false},
// {"adult":false,"id":17,"original_title":"The Dark","popularity":7.505,"video":false},
//,8773,25449,31975,2,12,3,5,6,8,9,11,12,13,14,15
var values = 
    {
        id:[3924,6124,8773,25449,31975,2,12,3,5,6,8,11,12,13,14,15,16,17]
    
    };
  

function Movies(){
    const[text, setText] = useState('');
    const[data, setData] = useState([]);

   
 
    const textOnChange = (e) =>{
        setText(e.target.value);
        console.log(text)
    } 
    const search = () =>{
        
    }
    //fetch data here, make component for 20 first each data rendered 
  

    const MakeMovie = async(id) =>{
     
        await fetch("https://api.themoviedb.org/3/movie/"+id+"?api_key=079e1321344ce579408e943ef3f60ca3&append_to_response=videos,images" ).then(resp =>{
            return resp.json();
        }).then(response =>{
            let src =  "https://image.tmdb.org/t/p/w400" + response.poster_path;
            let obj = {id:id, url:src, title:response.original_title, overview:response.overview, release_data:response.release_data, vote:response.vote_average}
            setData((prev) => [...prev.filter(prevSource =>  prevSource.url !== src), obj])
            console.log(data)
            // let title = [...data.original_title];
            // title.push(response.original_title);
            // console.log("title is " + title)
            // setData(prev =>.original_title:title)
            
            
        })
    
    }
    useEffect(()=>{
         values.id.forEach(elem => {
            MakeMovie(elem)
         })        
     
        
    },[]);


    return (
       <div>
           <Header />
           <Search  onChange = {textOnChange} onSearch = {search}/>
             {data.length >= 5 ? <Movie data = {data}key = {Math.floor(Math.random()*10000)} /> : console.log("false")}
       </div>
    )
}

export default Movies;

