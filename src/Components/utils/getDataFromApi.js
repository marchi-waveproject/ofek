import { RestUrls } from "./../Urls";
import { toast } from 'react-toastify' //npm i react-toastify


export default async function getDataFromApi (url,objectToSend, controller, auth = 'all' ) {

    //const API =  RestUrls.baseApiUrl + controller + '/' + url;
    
    const API =  RestUrls.baseApiUrl + controller + '/' + url;

    let userPass = {
        siteCode :  RestUrls.Code2
    };

    let items = {...userPass, ...objectToSend}

    try {

        
        const res = await fetch(API, {
            method: "POST",
            headers: {
            "Content-Type" : 'application/json',
            "Accept" : 'application/json'
            },
            body: JSON.stringify(items)
        });

        const data = await res.json();
        //console.log(data);

        if(data) {

            let statusHeaders = {
                headerStatus : res.status
            };

            let responseData = {...statusHeaders, ...data}
            //console.log(res);

            //console.log(data);
            return responseData;
        }

    } catch (e) {

        toast.error('שגיאה בשרת');
        return {};
        
    }

}



export function sendtoAdmin(url,controller,objectToSend, setStateName, setLoading, auth = 'all',  ) {

    setLoading(true);
    const getData = getDataFromApi(url,objectToSend,controller,auth);

    getData.then( (getData) => {

        //console.log(getData);
        setStateName(getData)
        
    })

    getData.catch((error) => {
        console.log(error);
    })

    getData.finally(() => {
        setLoading(false);
    })

}