import React, { Component } from "react";
import { ValidationContext } from "./ValidationContext";

export class ValidationMessage extends Component {
    static contextType = ValidationContext;

    render() {    
        return this.context.getMessagesForField(this.props.field).map(err => 
            <span key={ err } >
                { err + '. '} 
            </span> 
        )
    }
}
