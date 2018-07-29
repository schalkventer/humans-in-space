function fetchWrapper(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {     
        if (!response.ok) {
          console.error(new Error(response))
        }
    
        setTimeout(
          () => response.json().then(resolve),
          2000,
        )

      })
      .catch(console.error);
  })
}


export default fetchWrapper;