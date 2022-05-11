import React, { Component } from 'react'
import Alert  from './../Alert';
import {getAllUrlParams} from "./../UrlParameters"
import { RestUrls } from "../Urls";

/* https://github.com/axios/axios */


function SendAklead(props) {
    
    let data = props.results.data;

    //console.log(data);

    if(data.name) {
        
        const axios = require('axios').default; /* npm install axios */
        const Getpath = RestUrls.Leads;

        const urlQuery = getAllUrlParams(localStorage.getItem('path'));

        //const pageLink = urlQuery ? JSON.stringify(urlQuery) : '';

        const campaign_id = urlQuery.campaign_id ? urlQuery.campaign_id : '';

        const pageName = props.results.pageData.page.title ? props.results.pageData.page.title : 'צור קשר כללי';

        const Params = 
            '?name=' + data.name +
            '&phone=' + data.phone +
            '&email=' + data.email +
            '&itkunim=0' +
            '&custom2=site' +
            '&bannerid=' + props.results.infoSite.media +
            '&message=' +
            '&page=' + pageName +
            '&campaign_id=' + campaign_id +
            '&projId=' + data.projId +
            '&analytics=analytics' +
            '&catName=catName' +
            '&catValue=catValue' +
            '&code=' + RestUrls.Code2 + 
            '&page_link=' + localStorage.getItem('path');


        const  fullPath = Getpath + Params;

        localStorage.setItem('lidResponse', false);

        axios.get(fullPath)

            .then(function (response) {
                window.location.hash = 'thanks';
                console.log(response);
                /* localStorage.setItem('lidResponse', 'ok'); */
                
            })

            .catch(function (error) {
                console.log(error);
                localStorage.setItem('lidResponse', 'error');
                window.location.reload(true);
            }); 

        return true 
    }

    else {
        return <h2>No Name</h2>
    }
       
}



export default class SendLead extends Component {

    

    formatValue = (data) => Array.isArray(data) 
        ? data.join(", ") : data.toString();
    
    render() {

        //console.log(localStorage.getItem('lidResponse'));

        let keys = Object.keys(this.props.data);
        if (keys.length === 0) {
            if(localStorage.getItem('lidResponse')==='error') {
                return <Alert title='שגיאה' message='הפרטים לא נשלחו' show={true} error={true}/>
            }
            else {
                return false
            }
        } else {
            return <SendAklead results={this.props} />
            
            
        }

    }
}
