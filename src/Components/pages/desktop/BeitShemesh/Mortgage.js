import React, { Component } from 'react'

import Container from '@material-ui/core/Container';

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import TextToHtml from './../../../Texthtml';

export default class Mortgage extends Component {

    render() {
        //let page = this.props.pageData.page;
        
        let Button = 'button';

        return (
            <React.Fragment>

                <Container className="text" maxWidth="lg" >
                    <h2>משכנתא</h2>
                    {/* defaultActiveKey="1" */}
                    <Accordion defaultActiveKey={this.props.mobile ? false : this.props.pageData.mortgages[0].id} >
                        {this.props.pageData.mortgages.map(item => (
                        <Card key={item.id}>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey={ item.id }>
                                    {item.title}
                                    <div className="upDown" />
                                </Accordion.Toggle>
                                
                            </Card.Header>
                            <Accordion.Collapse eventKey={ item.id }>
                                <Card.Body>
                                    <TextToHtml text={item.text} format=""/>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        ))
                        }
                        
                    </Accordion>
                </Container>
            </React.Fragment>
        )
    }
}
