import React, { Component } from "react";
import { FormValidator } from "./FormValidator";
import { ValidationMessage } from "./ValidationMessage";
import { ValidateForm } from "./wholeFormValidation";
import Alert  from './../Alert';

export default class Editor extends Component {
 

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "", 
            phone: "",
            projId: this.props.pageData.project ? this.props.pageData.project.info.data.id : '',
            terms: false
        }
        this.rules = {
            name: { required: true, minlength: 3 },
            email: { required: true, email: true},
            phone: { required: true, minlength: 9, numbers: true},
            terms: { true: true}
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

    




    render() {

        //console.log(this.props);

        if(!this.props.sent) {
            return <div className="h5 bg-info text-white p-2">
                        <FormValidator data={ this.state } rules={ this.rules } 
                                submit={ this.props.submit }
                                validateForm={ ValidateForm }>

                            <ValidationMessage field="form" />

                            <input className="form-control"
                                    name="projId"
                                    type="hidden"
                                    value={ this.state.projId } 
                            />

                            <div className="form-group">
                                <label>Name</label>
                                <input className="form-control"
                                    name="name"
                                    value={ this.state.name } 
                                    onChange={ this.updateFormValue } />
                                <ValidationMessage field="name" />                                
                            </div>   

                            <div className="form-group">
                                <label>Phone</label>
                                <input className="form-control"
                                    name="phone"
                                    value={ this.state.phone } 
                                    onChange={ this.updateFormValue } />
                                <ValidationMessage field="phone" />                                
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control"
                                    name="email"
                                    value={ this.state.email } 
                                    onChange={ this.updateFormValue } />
                                <ValidationMessage field="email" />                                
                            </div>

                            < div className ="form-group" >
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
                            </ div >   
                            
                        </FormValidator>
                    </div>
        }
        else {


        /* console.log(localStorage.getItem('lidResponse')); */
        return   <div className="h5 bg-info text-white p-2">
                Thanks
                <Alert title='תודה רבה!' message='ההודעה נשלחה בהצלחה' show={true} error={false}/>
            </div>
            

        }
    }
}
