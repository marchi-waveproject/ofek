import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import TextToHtml from './../../../../Components/Texthtml';
import { ConstantsNames } from "../../../Urls"

export default class Jobs extends Component {

    constructor(props) {

        super(props);

        this.state = {
            JobId: false
        }

    }


    render() {

        //console.log(this.props);
        //const decoratedOnClick = useAccordionToggle(eventKey, onClick);

        let Button = 'button';

        return (
            <div className='JobsPage'>
                <header>
                    <h1>{this.props.pageData.page.h1}</h1>
                </header>

                

                <Container maxWidth="lg" >
                    {/* defaultActiveKey="1" */}
                    <Accordion defaultActiveKey={this.props.pageData.jobs[0]} >
                        {this.props.pageData.jobs.map(item => (
                        <Card key={item.id}>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey={ item.id }>
                                    {item.title}
                                    <div className="upDown" />
                                </Accordion.Toggle>
                                
                            </Card.Header>
                            <Accordion.Collapse eventKey={ item.id }>
                                <Card.Body>
                                    <TextToHtml text={item.description} format=""/>
                                    <div className='DownForm'>
                                        <h3>מלאו את הפרטים וצרפו לנו קו״ח למשרה המתאימה לכם.</h3>
                                        <iframe title={'Job' + item.id }  src={ConstantsNames.jobsFormIframe + item.id } />
                                    </div>
                                    
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        ))
                        }
                        
                    </Accordion>
                </Container>
            </div>
        )
    }
}
