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

  export function storeJSFile(script) {
    localStorage.setItem("data",script);
    return {
      type: "ADD_FILE",
      script
    }
    
  }
  // export function clearLocalStorage() {
  //   localStorage.clear()
  //   return {
  //     type: "CLEAR_LOCAL_STORAGE"
  //   }
    
  // }
  