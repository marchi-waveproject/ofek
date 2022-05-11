import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

import search from './../../../../img/icons/black/search.svg';
import searchMoBile from './../../../../img/icons/searchMobile.svg';


const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  
    
  function getStyles(name, personName, theme) {

    //console.log(theme);

    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  /* #303f9f
  .MuiFormLabel-root.Mui-focused */
  
  
  export default function Multiplecheck(props) {
    const classes = useStyles();
    const theme = useTheme();

    theme.direction = 'rtl'
    theme.palette.secondary.main = 'rgb(0, 0, 0)'

    const [personName, setPersonName] = React.useState([]);
  
    const handleChange = event => {
      setPersonName(event.target.value);
      props.updateProjectsArrray(event.target.value);
    };
  
      
    //console.log(props);

    return (
      <div className='searchCity'>
        <h2>חיפוש דירה</h2>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-chip-label">בחר עיר/ערים</InputLabel>
          <Select
            labelId="demo-mutiple-chip-label"
            id="demo-mutiple-chip"
            multiple
            value={personName}
            onChange={handleChange}
            /* onChange={() => props.updateProjectsArrray('state')} */
            input={<Input id="select-multiple-chip" />}
            renderValue={selected => (
              <div className={classes.chips}>
                {selected.map(value => (
                  
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {props.cities.map(city => (
              <MenuItem key={city.name} value={city.name} style={getStyles(city.name, personName, theme)}>
                {city.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <img className="searchIcon" src={search} alt='חיפוש' />
        <img className="searchIconMobile" src={searchMoBile} alt='חיפוש' />
        
      </div>
    );
  }