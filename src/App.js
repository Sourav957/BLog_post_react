
import Header from './Header'
import Home from './Home'
import Missing from './Missing'
import Nav from './Nav'
import NewPost from './NewPost'
import PostPage from './PostPage'
import Footer from './Footer'
import About from './About'
import EditPost from './EditPost'
import {Routes,Route,useNavigate} from 'react-router-dom'
import { DataProvider } from './context/DataContext'


function App() {
//   const [posts, setPosts] = useState([])
//   const [search,setSearch] = useState('');
//   const [searchResults,setSearchResults] = useState([]);
//   const [postTitle,setPostTitle] = useState('');
//   const [postBody,setPostBody] = useState('');
//   const [editTitle,setEditTitle] = useState('');
//   const [editBody,setEditBody] = useState('');
//   const {width} = useWindowSize();

//   const {data,fetchError,isLoading} = useAxiosApi('http://localhost:3500/posts');

//   useEffect(() => {
//     setPosts(data);
//   },[data])


// //the code below is refactored and a custom useApi hook is used
//   // useEffect(()=>{
//   //   const fetchPosts = async () => {
//   //     try{
//   //       const response = await api.get('/posts');
//   //       setPosts(response.data);
//   //     }catch(err){
//   //       if(err.response){
//   //         console.log(err.response.data)
//   //         console.log(err.response.status)
//   //         console.log(err.response.headers)
//   //       }else {
//   //         console.log(`Error : ${err.message}`);
//   //       }
//   //     }
//   //   }
//   //   fetchPosts();
//   // },[])

//   useEffect(()=>{
//     const filteredResults = posts.filter((post) => 
//     (post.body).toLowerCase().includes(search.toLowerCase())
//     || (post.title).toLowerCase().includes(search.toLowerCase()));

//     setSearchResults(filteredResults.reverse());
//   },[posts,search])
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const id = posts.length ? posts[posts.length -1].id + 1 : 1 ;
//     const date = format(new Date(),'MMMM dd yyyy pp');
//     const newPost = {id:id,title:postTitle,datetime:date,body:postBody};
//     try{
//       const response = await api.post('/posts',newPost);
//       console.log(response.data)
//     const allPosts =[...posts,response.data];
//     setPosts(allPosts);
//     setPostBody('');
//     setPostTitle('');
//     navigate('/');
//    }catch(err){
//     console.log(`ERROR: ${err.message}`);
//    } 
//   }

//   const handleEdit = async (id) => {
//     const date = format(new Date(),'MMMM dd yyyy pp');
//     const updatedPost = {id:id,title:editTitle,datetime:date,body:editBody};
//     try
//     {
//      const response = api.put(`/posts/${id}`,updatedPost)
//      setPosts(posts.map((post) => post.id === id? {...response.data} : post))
//      setEditTitle('');
//      setEditBody('');
//      navigate('/');
//     }catch(err){
//       console.log(`ERROR: ${err.messsage}`);
//     }
//   }


//   const handleDelete = async(id) => {
//     try{ 
//       await api.delete(`/posts/${id}`);
//     const newPost = posts.filter((post) => post.id !== id);
//    setPosts(newPost);
//    navigate('/');
//   }catch(err){
//     console.log(`ERROR: ${err.message}`)
//   }
//   }
  return (
    <div className="App">
          <Header title="React Js Blog"/>
      <DataProvider>
          <Nav />
        <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/post' element={<NewPost/>}/>
            <Route  path='/edit/:id' element={<EditPost/>}/>
            <Route exact path='/post/:id' element={<PostPage/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='*' element={ <Missing/>}/>
          </Routes>
      </DataProvider>
          <Footer/>
    </div>
  );
}

export default App;
