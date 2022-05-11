import React from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider'; //https://material-ui.com/components/slider/
import Input from '@material-ui/core/Input';

const useStyles = makeStyles({
  root: {
    width: '50%',
  },
  input: {
    width: '50%',
  },
});

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const IOSSlider = withStyles({
  root: {
    color: '#3880ff',
    height: 2,
    padding: '15px 0',
  },

  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    '&:focus,&:hover,&$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 11px)',
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);


export default function InputSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.current);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    props.change(props.inputName,newValue)
  };

  const handleInputChange = event => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));    
  };

 /*  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  }; */

  return (
    <div className='sliderTable'>
        
        <div className="col rightCol">
          
          <h2>{props.name}</h2>

          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            /* onBlur={handleBlur} */
            inputProps={{
              step: props.step,
              min: props.min,
              max: props.max,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </div>

        <div className="col leftCol">
          <IOSSlider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            min={props.min}
            max={props.max}
            step={props.step}
            aria-labelledby="input-slider"
            valueLabelDisplay="on"
          />
        </div>

    </div>    
  );
}