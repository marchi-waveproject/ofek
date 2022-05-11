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
                <div className='greyPass'/>
                <Container maxWidth="lg" >
                    <h1 className='hidden' >{this.props.pageData.page.h1}</h1>
                    <div className='tableAbout'>
                        <div className='col'>
                            <figure>
                                <APPIpic fullWidth={true} pic={page.pic_moshe} alt='משה אביסרור' />
                                <figcaption>משה אביסרור<br/>מייסד</figcaption>
                            </figure>

                            <div className='text'>
                                <TextToHtml text={page.text1} format=""/>
                            </div>
                            
                        </div>
                        <div className='col'>
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
                                <TextToHtml text={page.text2} format=""/>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
