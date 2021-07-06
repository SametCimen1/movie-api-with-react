import Header from './Header'
import Search from './Search'
import React, {useState, useEffect} from 'react'
import Movie from './Movie'
import $ from 'jquery'; 




var values = 
    {
        id:[3924,6124,8773,25449,31975,2,12,3,5,6,8]
    
    };
    for(let i = 11; i<50; i++){
        values.id.push(i);
    }
  

function Movies(){
    const[text, setText] = useState('');
    const[data, setData] = useState([]);
    const[num, setNum] = useState(0)

   
 
    const textOnChange = (e) =>{
        setText(e.target.value);
        console.log(text)
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

    useEffect(()=>{
        setData([])
        search()
    },[text])

    const search = async() =>{
        if(text === ''){
            values =   {
                id:[3924,6124,8773,25449,31975,2,12,3,5,6,8,11,12,13,14,15,16,17]
            };
            values.id.forEach(elem => {
                MakeMovie(elem)
             })    

        }
        await fetch("https://api.themoviedb.org/3/search/movie?api_key=079e1321344ce579408e943ef3f60ca3&query=" + text).then(resp =>{
            return resp.json();
        }).then(response =>{
            const arr = response.results;
           if(arr !== undefined){
            arr.forEach(elem =>{
                MakeMovie(elem.id)
            })}
        })
    
    }
    var current = 0;
   const searchByLanguage = async(language,howMany) =>{
     current = 0;
      howMany = parseInt(howMany)
      setNum(0)
    if(language !== '' && howMany > 0){
        setData([])
        while(current <= howMany ){
            console.log(num)
        await fetchLanguage(language)

            
        }    
   
    }  
    if(language === '' && howMany !== 0){
        setData([])
        for(let i = 0; i<howMany; i++){
            let random = Math.floor(Math.random() * 100000);
            await fetch("https://api.themoviedb.org/3/movie/"+random+"?api_key=079e1321344ce579408e943ef3f60ca3").then(resp =>{
                return resp.json();
            }).then(response =>{
                if(response.success === false || response.adult === true ||  (response.poster_path === null || response.poster_path === "" || response.poster_path === undefined)){
                  i--;
                }
                else { 
                    console.log(response)
                    let src =  "https://image.tmdb.org/t/p/w400" + response.poster_path;
                    let obj = {id:response.id, url:src, title:response.original_title, overview:response.overview, release_data:response.release_data, vote:response.vote_average}
                    setData((prev) => [...prev.filter(prevSource =>  prevSource.url !== src), obj])
                    setNum((prev) => prev+1)
                    console.log("num is")
                    console.log(num);
                    
                }
            
            }).catch(err =>{console.log(err)})
        } 
    }
   }
   const fetchLanguage = async(language,id) =>{
    let random = Math.floor(Math.random() * 100000);
    await fetch("https://api.themoviedb.org/3/movie/"+random+"?api_key=079e1321344ce579408e943ef3f60ca3&language="+language).then(resp =>{
        return resp.json();
    }).then(response =>{
        
        if(response.success === false || response.adult === true || (response.poster_path === null || response.poster_path === "" || response.poster_path === undefined)){
          return;
        }
        else { 
            current++;
            console.log(response)
            current  = current+1;
            let src =  "https://image.tmdb.org/t/p/w400" + response.poster_path;
            let obj = {id:response.id, url:src, title:response.original_title, overview:response.overview, release_data:response.release_data, vote:response.vote_average}
            setData((prev) => [...prev.filter(prevSource =>  prevSource.url !== src), obj])
            setNum((prev) => prev+1)
            console.log("num is")
            console.log(num);
        }
    
    }).catch(err =>{console.log(err)})
   }

   const fetchNumberTimes = async() =>{
   
   }


    return (
       <div>
           <Header />
           
           <Search  language = {searchByLanguage}  onChange = {textOnChange} onSearch = {search}/>
             {data.length >= 1 ? <Movie data = {data}key = {Math.floor(Math.random()*10000)} /> : console.log("false")}
       </div>
    )
}

export default Movies;

