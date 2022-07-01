import { createStore,action,thunk,computed } from "easy-peasy";
import api from './api/posts';

export default createStore({
    posts:[],
    setPosts:action((state,payload) => {
        state.posts = payload;
    }),
    postTitle:'',
    setPostTitle:action((state,payload) => {
        state.postTitle = payload;
    }),
    postBody:'',
    setPostBody:action((state,payload) => {
        state.postBody = payload;
    }),
    editTitle:'',
    setEditTitle:action((state,payload) => {
        state.editTitle = payload;
    }),
    editBody:'',
    setEditBody:action((state,payload) => {
        state.setEditBody = payload;
    }),
    search:'',
    setSearch:action((state,payload) => {
        state.setSearch = payload;
    }),
    searchResults:[],
    setSearchResults:action((state,payload) => {
        state.setSearchResults = payload;
    }),
    postCount:computed((state) => state.posts.length),
    getPostById:computed((state) => {
        return (id) => state.posts.find((post) => { (post.id).toString() === id})
    }),
    savePost:thunk(async(actions,newPost,helpers) => {
        const {posts} = helpers.getState();
        try{
            const response = await api.post('/posts',newPost);
            console.log(response.data)
          action.setPosts([...posts,response.data]);
          action.setPostBody('');
          action.setPostTitle('');
          navigate('/');
         }catch(err){
          console.log(`ERROR: ${err.message}`);
         } 
    }),
    deletePost:thunk(async(actions,id,helpers) => {
        const {posts} = helpers.getState();
        try{ 
            await api.delete(`/posts/${id}`);
            actions.setPosts(posts.filter((post) => post.id !== id));
          }catch(err){
          console.log(`ERROR: ${err.message}`);
         }
    }),

    editPost:thunk((actions,updatedPost,helpers) => {
        const {posts} = helpers.getState();
        const {id} = updatedPost;

        try
        {
         const response = api.put(`/posts/${id}`,updatedPost)
         setPosts(posts.map((post) => post.id === id? {...response.data} : post))
         actions.setEditTitle('');
         actions.setEditBody('');
         actions.navigate('/');
        }catch(err){
          console.log(`ERROR: ${err.messsage}`);
        }
 
    })


})