export function cookieParse(){
    let cookieStrings = document.cookie.split('; ');
  
    let cookieItems = cookieStrings.reduce((prev, current) => {

      const[name, ...value] = current.split('=');
      if(current === ''){
        return prev
      }
      current = JSON.parse(value.join('='));
      prev = {...prev, ...current}
      return prev
  },{})
  
    return cookieItems
  }



  const cookieHandler = {
    cookieParse
  }

  export default cookieHandler;