import React, { Component } from 'react'
import GeneralForm from "./GeneralForm";
import SendLead from "./SendLead";


export default class FormProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {},
            sent: false
        }
    }

    submitData = (newData) => {
        this.setState({ formData: newData, sent: true});
    }

    componentDidUpdate(){

        window.onpopstate  = (e) => {
            this.setState({ formData: {}});
       }
      
    }

    
     render() {

        return <>
            <GeneralForm submit={ this.submitData } sent = { this.state.sent } showProjects={this.props.showProjects ? true : false }  pageData={this.props.pageData} infoSite={this.props.infoSite} />
            <SendLead data = { this.state.formData } infoSite={this.props.infoSite} pageData={this.props.pageData} />
            </>
    }
}
