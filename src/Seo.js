import React, { Component } from 'react'
import { Helmet } from 'react-helmet'; 
import { ConstantsNames } from "./Components/Urls"

export default class Seo extends Component {

    

    state = {
        titleA: this.props.infoSite.SiteDataitems.settings.sitename,
        titleB: '',
        description: '',
        canonical: ''
    }
        
    async componentDidMount() {
        
        let pageId = this.props.pageData.page.id;
        let arrayPages = this.props.infoSite.SiteDataitems.pages;

        //console.log(arrayPages)

        let pageInfo =  arrayPages.filter(function(desc) {
            return desc.id === pageId;
        });
 
        this.setState({
            description: pageInfo[0].seo.description,
            /* canonical: pageInfo[0].seo.canonical, */
            canonical: ConstantsNames.base_url + '/' + pageInfo[0].seo.friendly,
            titleB: pageInfo[0].title
        })

        if (this.props.seo) {

            this.setState({
                description: this.props.seo.description,
                /* canonical: this.props.seo.canonical, */
                canonical: ConstantsNames.base_url + '/פרויקטים/' + this.props.seo.friendly,
                titleB: this.props.seo.title
            })
        
        }
        
    }
    
    
    render() {

        //console.log(this.state);
        //console.log(this.state);
 
        return (
            <Helmet>
                <title>{ this.state.titleA + ' | ' + this.state.titleB }</title>
                <meta name="description" content={this.state.description} />
                <link rel="canonical" href={this.state.canonical} />

                <meta property="og:url" content={this.state.canonical}/>
                <meta property="og:title" content={ this.state.titleA + ' | ' + this.state.titleB }/>
                <meta property="og:description" content={this.state.description}/>
                <meta property="og:image" content={ConstantsNames.pic2 + 'default/facebook.png'}/>
            </Helmet>
        ) 
    }
}
