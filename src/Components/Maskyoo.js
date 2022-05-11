import React, { Component } from 'react'
import {getAllUrlParams} from "./UrlParameters"
import { ConstantsNames } from "./Urls"
import { Link } from 'react-scroll'  /* https://www.npmjs.com/package/react-scroll */

export default class Maskyoo extends Component {

    /* MaskyooFunction = () => {

    } */


    render() {

        //console.log(this.props);

        let proj = this.props.pageData.project.info.data;
        const urlQuery = getAllUrlParams(localStorage.getItem('path'));
        const campaign_id = urlQuery.campaign_id ? urlQuery.campaign_id : '';


        return (
            <nav className='projMenuFixed'>
                {/* this.props.pageData.project.info.data.maskyoo_api_key.length > 0 */}
                <Link key={proj.id} activeClass="active" to='goToThis' spy={true} smooth={true} isDynamic={true} offset={-80} >
                לתיאום פגישה
                </Link>
                { proj.maskyoo_api_key ? 
                    <iframe title='showMaskyoo' src={ConstantsNames.maskyooIframe + proj.id + '&campaign_id=' + campaign_id }/> : false
                }
                
            </nav>
        )
    }
}

