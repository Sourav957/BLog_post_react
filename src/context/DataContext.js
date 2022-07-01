
import { createContext,useEffect,useState } from "react";
import useAxiosApi from '../Hooks/useAxiosApi'

const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [posts, setPosts] = useState([])
  const [search,setSearch] = useState('');
  const [searchResults,setSearchResults] = useState([]);
  
  

  const {data,fetchError,isLoading} = useAxiosApi('http://localhost:3500/posts');

  useEffect(() => {
    setPosts(data);
  },[data])


//the code below is refactored and a custom useApi hook is used
  // useEffect(()=>{
  //   const fetchPosts = async () => {
  //     try{
  //       const response = await api.get('/posts');
  //       setPosts(response.data);
  //     }catch(err){
  //       if(err.response){
  //         console.log(err.response.data)
  //         console.log(err.response.status)
  //         console.log(err.response.headers)
  //       }else {
  //         console.log(`Error : ${err.message}`);
  //       }
  //     }
  //   }
  //   fetchPosts();
  // },[])

  useEffect(()=>{
    const filteredResults = posts.filter((post) => 
    (post.body).toLowerCase().includes(search.toLowerCase())
    || (post.title).toLowerCase().includes(search.toLowerCase()));

    setSearchResults(filteredResults.reverse());
  },[posts,search])
 

  

  


 
   return(
    <DataContext.Provider value={{
        search,setSearch,searchResults,fetchError,isLoading,
        posts,setPosts
        
    }}>

    {children}

    </DataContext.Provider> 
   )

    
}

export default DataContext;