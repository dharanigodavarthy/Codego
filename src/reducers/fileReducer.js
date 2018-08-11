let intialState={}
if(localStorage.getItem("data")){
  intialState.data=localStorage.getItem("data");
  intialState.fileName=localStorage.getItem("fileName");
}
else{
  intialState.data = 'if(num){if(num%2){console.log("even")}}';
  intialState.fileName="even.js"
}


export default function blogReducer(state=intialState, action) {
  switch (action.type) {
    case "ADD_FILE":
      return action.fileData
      // case "CLEAR_LOCAL_STORAGE":
      // return state
    default:
      return state;
  }
}