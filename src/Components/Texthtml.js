import React from 'react'

export default function TextToHtml(props) {

    switch (props.format) {

        case "p":
            return <p className={ props.NameClass ? props.NameClass : '' } dangerouslySetInnerHTML={{ __html: props.text }} />

        case "li":
            return <li className={ props.NameClass ? props.NameClass : '' } dangerouslySetInnerHTML={{ __html: props.text }} />

        case "h2":
            return <h2 className={ props.NameClass ? props.NameClass : '' } dangerouslySetInnerHTML={{ __html: props.text }} />
        
        default:
            return <div className={ props.NameClass ? props.NameClass : '' } dangerouslySetInnerHTML={{ __html: props.text }} />
    }

    

}