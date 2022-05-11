import { ConstantsNames } from "./Urls"

export function getId(props) {

    // setter
    //localStorage.setItem('getUrl', data);
    
    //getter //localStorage.getItem('myData');
    
    //remove
    //localStorage.removeItem('myData');
    
    //remove all
    //localStorage.clear();
     
    /* localStorage.setItem('id', props.match.params.id);
    localStorage.setItem('path', props.location.pathname);
    localStorage.setItem('hash', props.location.hash); */


    localStorage.setItem('path', ConstantsNames.base_url + props.location.pathname);

    if(props.location.search) {
      localStorage.setItem('search', props.location.search);
    }
    
    let query = localStorage.getItem('search') ? localStorage.getItem('search') : '' ;

    let path = ConstantsNames.base_url + props.location.pathname + query;
    localStorage.setItem('path', path);        
    
    //console.log(localStorage.getItem('path'))

      /* return (<Test data={props} />) */ 
    return true 
    
  } 