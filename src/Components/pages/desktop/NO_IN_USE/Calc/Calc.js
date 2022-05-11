import React, { Component } from 'react'
import Container from '@material-ui/core/Container';

import Sliders  from './Sliders';
import Input from '@material-ui/core/Input';

import TextToHtml from './../../../Texthtml';

export default class Calc extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
           amount1:100000,
           amount2:15,
           amount3:3.5
        }
      }


    handleChange = (name,value) => {
        if(name==='amount1') { this.setState({ amount1 : value}) }
        else if(name==='amount2') { this.setState({ amount2 : value}) }
        else if(name==='amount3') { this.setState({ amount3 : value}) }
    }

    showResults = () => {
        
        //console.log(this.state);

        var shum = this.state.amount1;
        var years = this.state.amount2;
        var ribit = (this.state.amount3)/100;
            
        var base=1+(ribit/12);
        var exponent=(-years)*12;
        var Asset =(shum*ribit/12)/(1- Math.pow(base,exponent))
        var numb = parseFloat(Asset).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

        let value = numb;

        return <Input
        value={'‎₪ ' + value}
        margin="dense"
        /* onBlur={handleBlur} */
        inputProps={{
           type: 'text',
          'aria-labelledby': 'input-slider',
        }}
      />
    }


    render() {
        return (
            <div className="PageCalc" >
                <Container maxWidth="lg" >
                    <h1 >{this.props.pageData.page.h1}</h1>
                    <Sliders name="סכום ההלוואה" inputName='amount1' min={60000} max={2500000} current={this.state.amount1} step={10000} change={this.handleChange}/>
                    <Sliders name="תקופה בשנים" inputName='amount2' min={4} max={35} current={this.state.amount2} step={1} change={this.handleChange}/>
                    <Sliders name="ריבית שנתית" inputName='amount3' min={1} max={8} current={this.state.amount3} step={.05} change={this.handleChange}/>
                    <div className='totalInput'>
                        <h2>החזר חודשי:</h2>
                        {this.showResults()}
                    </div>
                    <TextToHtml text={this.props.pageData.page.text} format="" NameClass="text" />
                </Container>

                
            </div>
        )
    }
}
