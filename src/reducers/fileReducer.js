let intialState
if(localStorage.getItem("data"))
intialState=localStorage.getItem("data");
else
intialState = 'if(num){if(num%2){console.log("even")}}';


export default function blogReducer(state=intialState, action) {
  switch (action.type) {
    case "ADD_FILE":
      return action.script
      // case "CLEAR_LOCAL_STORAGE":
      // return state
    default:
      return state;
  }
}