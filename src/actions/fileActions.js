// export function getBlog() {
//     return dispatch => {
//       fetch("/api/posts")
//         .then(response => response.json())
//         .then(json =>
//           dispatch({
//             type: "GET_BLOG",
//             blog: json
//           })
//         )
//         .catch(error => {
//           console.log(error);
//         });
//     };
//   }

  export function storeJSFile(data,fileName) {
    localStorage.setItem("data",data);
    localStorage.setItem("fileName",fileName);
    console.log(fileName);
    return {
      type: "ADD_FILE",
      fileData:{
        data,
        fileName
      }
    }
    
  }
  // export function clearLocalStorage() {
  //   localStorage.clear()
  //   return {
  //     type: "CLEAR_LOCAL_STORAGE"
  //   }
    
  // }
  