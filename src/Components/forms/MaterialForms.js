import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },

  formControl: {
    margin: theme.spacing(1),
  },
}));




export default function MaterialForms(props) {

  const classes = useStyles();

 
  React.useEffect(() => {
  }, []);

  const handleChange = event => {
    props.inputEvent(event);
  };
  

  return (

      <FormControl className={classes.formControl } error={props.error} >
        <InputLabel htmlFor={props.validationMessage ? 'component-error' : 'component-simple'}>{ props.inputLabel }</InputLabel>
        <Input
          value={ props.inputValue }
          name={ props.inputName }
          onChange={handleChange}
          placeholder={props.inputLabel}
        />
        <FormHelperText>{ props.validationMessage }</FormHelperText>
      </FormControl>
    
  );
}