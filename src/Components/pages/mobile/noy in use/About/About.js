import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import APPIpic from '../../../APPIpic';
import TextToHtml from './../../../Texthtml';
export default class About extends Component {
    render() {

        
        let page = this.props.pageData.page;
        //console.log(page);

        return (
            <div className='AboutPage'>
                
                <h1 className='pageTitle'>{this.props.pageData.page.h1}</h1>

                <Container maxWidth="lg" >
                    <div className='greyPass'/>    
                    <div className='tableAbout'>
                        <div className='one'>
                            <figure>
                                <APPIpic fullWidth={true} pic={page.pic_moshe} alt='משה אביסרור' />
                                <figcaption>משה אביסרור<br/>מייסד</figcaption>
                            </figure>

                           
                            
                        </div>
                        <div className='two'>
                            <div className='pictures'>
                                <figure>
                                    <APPIpic fullWidth={true} pic={page.pic_eli} alt='אלי אביסרור' />
                                    <figcaption>אלי אביסרור<br/>מייסד</figcaption>
                                </figure>

                                <figure>
                                    <APPIpic fullWidth={true} pic={page.pic_itzhak} alt="יצחק (ג'קי) אביסרור" />
                                    <figcaption>יצחק (ג'קי) אביסרור<br/>סמנכ"ל</figcaption>
                                </figure>

                                <figure>
                                    <APPIpic fullWidth={true} pic={page.pic_yoram} alt='יורם אביסרור' />
                                    <figcaption>יורם אביסרור<br/>סמנכ"ל שיווק</figcaption>
                                </figure>
                            </div>

                            <div className='text'>
                                <TextToHtml text={page.text1} format=""/>
                            </div>

                            <div className='text textBlack'>
                                <TextToHtml text={page.text2} format=""/>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
