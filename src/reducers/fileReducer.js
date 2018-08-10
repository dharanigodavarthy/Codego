export default function blogReducer(state = [], action) {
    switch (action.type) {
      case "ADD_FILE":
      return action.script
      default:
        return state;
    }
  }
  
  