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
    return {
      type: "ADD_FILE",
      script
    }
    
  }
  