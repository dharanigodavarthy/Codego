export default function blogReducer(state = [], action) {
    switch (action.type) {
      case "ADD_FILE":
      return action.script
      case "GET_BLOG":
        return action.blog;
      case "CREATE_BLOG":
        return [...state, action.blog];
      case "DELETE_BLOG":
        return state.filter(blog => blog.id != action.id);
      case "UPDATE_BLOG":
      return state.map((post)=>{
        if(post.id == action.blog.id) {
          return {
             ...post,
             title:action.blog.title,
             description:action.blog.description,
          }
        } else return post;
      })
      default:
        return state;
    }
  }
  
  