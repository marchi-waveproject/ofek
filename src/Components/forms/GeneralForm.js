import React, { Component } from "react";
import { FormValidator } from "./FormValidator";
import { ValidationMessage } from "./ValidationMessage";
import { ValidateForm } from "./wholeFormValidation";
import Alert  from './../Alert';



import MaterialForms from "./MaterialForms";


export default class Editor extends Component {
 

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "", 
            phone: "",
            projId: this.props.pageData.project ? this.props.pageData.project.info.data.id : '',
            /* terms: false */
        }
        this.rules = {
            name: { required: true, minlength: 3 },
            email: { required: true, email: true},
            phone: { required: true, minlength: 9, numbers: true},
            projId: { required: true },
            /* terms: { true: true} */
        }
        // OPEN wholeFormValidations for more rules!!!
    }

    updateFormValue = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    updateFormValueOptions = (event) => { 
        let options = [...event.target.options]
            .filter(o => o.selected).map( o => o.value);
            this.setState({ [event.target.name]: options },
                () => this.props.submit(this.state));
    }

    updateFormValueCheck = (event) => {
        this.setState({ [event.target.name]: event.target.checked });
    }


    showProjectsSelect = (data) => {

        //console.log(data);
        //console.log(this.props.infoSite.SiteDataitems.ProjetsLow);
        if(data.showProjects) {

            //console.log(this.state.projId)

            return(
                < div className ="form-group selectFormGroup" >
                    < select className =" form-control"
                        name ="projId" value ={ this.state.projId }
                        onChange ={ this.updateFormValue } >
                        <option value = ''>בחר פרויקט</option>
                        {/* { this.props.infoSite.SiteDataitems.ProjetsLow.map( project => 
                            < option value = { project.data.id } key ={ project.data.id }> 
                            { project.data.name }
                            </ option >
                        )} */}
                    </select >
                    <ValidationMessage field="projId" />
                </ div >
            )
        } else {return false;}
    }

    




    render() {

        //console.log(this.state);

        if(!this.props.sent) {
            return <div className="form-wrapper">

                        <FormValidator data={ this.state } rules={ this.rules } 
                                submit={ this.props.submit }
                                validateForm={ ValidateForm }>

                                <ValidationMessage field="form" />

                                {
                                    this.props.showProjects ? false : 

                                    <input className="form-control"
                                    name="projId"
                                    type="hidden"
                                    value={ this.state.projId } 
                                    />
                                }
                            
                                

                            
                            <MaterialForms validationMessage={<ValidationMessage field="name" />} inputName='name' inputLabel='שם' inputValue={this.state.name} inputEvent={ this.updateFormValue } />
                            <MaterialForms validationMessage={<ValidationMessage field="phone" />} inputName='phone' inputLabel='טלפון' inputValue={this.state.phone} inputEvent={ this.updateFormValue } />
                            <MaterialForms validationMessage={<ValidationMessage field="email" />} inputName='email' inputLabel='דוא״ל' inputValue={this.state.email} inputEvent={ this.updateFormValue } />
                            
                            

                            {this.showProjectsSelect(this.props)}
                           
                            {/* < div className ="form-group" >
                                < div className ="form-check" >
                                    < input className ="form-check-input"
                                    type ="checkbox" name ="terms"
                                    checked ={this.state.terms }
                                    onChange ={this.updateFormValueCheck } />
                                    < label className ="form-check-label" >
                                        Agree to terms
                                        </label >
                                </ div >
                                < ValidationMessage field ="terms" /> 
                            </ div >    */}
                            
                        </FormValidator>
                    </div>
        }
        else {


        /* console.log(localStorage.getItem('lidResponse')); */
        return   <div className="form-wrapper">
                ההודעה נשלחה בהצלחה.
                <Alert title='תודה רבה!' message='ההודעה נשלחה בהצלחה' show={true} error={false}/>
            </div>
            

        }
    }
}
