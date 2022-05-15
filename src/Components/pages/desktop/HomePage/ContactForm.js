import React, { useState } from 'react'

import { Col, Row, Form, Button, Spinner } from "react-bootstrap"; //npm install react-bootstrap@next bootstrap@5.1.0
import { map } from "lodash" //https://lodash.com/docs/4.17.15#map
import validator from "validator"; //npm install validator
import { toast } from 'react-toastify' //npm i react-toastify
import getDataFromApi from './../../../../Components/utils/getDataFromApi'

import {getAllUrlParams} from "./../../../../Components/UrlParameters";

export default function ContactForm(props) {

    const {page, infoSite} = props;
    const formFields = [
      {
          name : "name",
          placeholder: "שם מלא",
          type: 'text',
          defaultValue: '',
          //error: 'נא להזין שם מלא'
      },
      {
           name : "phone",
           placeholder: "טלפון נייד",
           type: 'number',
           defaultValue: '',
           //error: 'נא להזין טלפון נייד'
       },
       {
           name : "email",
           placeholder: "דואר אלקטרוני",
           type: 'email',
           defaultValue: '',
           //error: 'נא להזין דואר אלקטרוני'
       },
       
  ]

  const [formData, setFormData] = useState(defaultValueForm(formFields))
   const [loading, setLoading] = useState(false)
   const [showErrors, setShowErrors] = useState(false)
   const [areErrors, setAreErrors] = useState(false);
   const [sentForm, setSentForm] = useState(false);

   const onChange = (e) => {

        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      })

   }

   const onSubmit = () => { 
        
        //console.log(formData);

        setShowErrors(true);
        setAreErrors(true);

        if(validator.isEmpty(formData.name) ) {

            toast.error('נא להזין שם מלא');

        }

        else if(validator.isByteLength(formData.phone, 0,9 ) || !validator.isNumeric(formData.phone)) {

            toast.error('נא להזין טלפון תקין');

        }

        else if(!validator.isEmail(formData.email) ) {

            toast.error('נא להזין מייל תקין');

        }
        
        else {

            setShowErrors(false);setAreErrors(false);
            
            const newURL = window.location.protocol + "//" + window.location.host + window.location.search
            
            const search = getAllUrlParams(window.location.search);
            

            formData.url = newURL;
            formData.campaign_id = search.campaign_id ? search.campaign_id : '';
            formData.bannerid = infoSite.media;

            
            console.log(formData);

            sendtoApi('sendMail', 'welcome', formData, setLoading, setSentForm)

        }

    }

    //const isMobile = infoSite.media === 'desktop' ? false : true;

  return (
    <div className='contactForm'>
      <h2>{page.formh2}</h2>

      
      {!sentForm ? <>
            
            <Row >

                <Col md='6' className='cols'>

                      <Form.Control

                        className="customFloatInput"
                        isInvalid={!formData[formFields[0].name] && showErrors}
                        /*isValid={formik.touched.fullname && !formik.errors.fullname}  */
                        type={formFields[0].type}
                        name={formFields[0].name}
                        disabled={false}
                        placeholder={formFields[0].placeholder}
                        onChange={onChange}
                        value={formData[formFields[0].name]}
                        />
                        { formFields[0].error && <Form.Control.Feedback type="invalid">
                            <span>{ formFields[0].error }</span>
                        </Form.Control.Feedback> }

                    

                </Col>

                <Col md='6' className='cols'>

                    

                        <Form.Control

                        className="customFloatInput"
                        isInvalid={!formData[formFields[1].name] && showErrors}
                        /*isValid={formik.touched.fullname && !formik.errors.fullname}  */
                        type={formFields[1].type}
                        name={formFields[1].name}
                        disabled={false}
                        placeholder={formFields[1].placeholder}
                        onChange={onChange}
                        value={formData[formFields[1].name]}
                        />
                        { formFields[1].error && <Form.Control.Feedback type="invalid">
                            <span>{ formFields[1].error }</span>
                        </Form.Control.Feedback> }



                </Col>

                
            </Row>

            <Row >

              <Col md='6' className='cols'>

                <Form.Control

                className="customFloatInput"
                isInvalid={!formData[formFields[2].name] && showErrors}
                    /*isValid={formik.touched.fullname && !formik.errors.fullname}  */
                type={formFields[2].type}
                name={formFields[2].name}
                disabled={false}
                placeholder={formFields[2].placeholder}
                onChange={onChange}
                value={formData[formFields[2].name]}
                />
                { formFields[2].error && <Form.Control.Feedback type="invalid">
                    <span>{ formFields[2].error }</span>
                </Form.Control.Feedback> }



                </Col>

                <Col md='6' className='cols'>
                  <div className="d-grid gap-2 btnCont">

                  <Button 
                      className='bounce1'
                      variant={areErrors ? 'danger' : 'primary'}
                      size="lg"
                      onClick={ onSubmit }
                      disabled={loading}
                      >
                      {loading ? <Spinner size="sm" animation="border" variant="light" /> : <span>שלחו</span> }
                  </Button>

                  </div>
                </Col>

              </Row>

            {/* {isMobile && <Row >

                <Col md='12'>
                    <div className="d-grid gap-2 btnCont">

                        <Button 
                            className='bounce3'
                            variant={areErrors ? 'danger' : 'primary'}
                            size="lg"
                            onClick={ onSubmit }
                            disabled={loading}
                            >
                            {loading ? <Spinner size="sm" animation="border" variant="light" /> : <><span>שלחו</span> </> }
                        </Button>

                    </div>
                </Col>

            </Row>} */}

            </> : <Row >

                <Col md='12'>
                    <h2 className='sent'>תודה רבה!</h2>
                </Col>

            </Row> }
    </div>
  )
}


function defaultValueForm(formFields) {
    
  let objReturn = {};

  map(formFields, item => {
            
      objReturn[item.name] = item.defaultValue
      
    })

  return objReturn;

}

function sendtoApi(url, controller, objectToSend, setLoading, setSentForm) {

  setLoading(true)
  const getData = getDataFromApi(url, objectToSend, controller, 'all')

  

  getData.then((getData) => {

    //console.log(getData);

    if (getData.ok ) {
      
      setSentForm(true);
      toast.success('תודה!, קיבלנו את הפרטים שלך.')

    } else if (getData.error) {

      toast.error(getData.error)

    }
  })

  getData.catch((error) => {
    console.log(error)
  })

  getData.finally(() => {
    setLoading(false)
  })
} 
