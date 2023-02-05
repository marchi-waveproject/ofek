import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
//import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

//import { animateScroll as scroll, } from 'react-scroll' /* https://www.npmjs.com/package/react-scroll */
import { Link } from 'react-scroll'  /* https://www.npmjs.com/package/react-scroll */

import { NavLink } from 'react-router-dom'; 


import logo from './../../../img/default/logoMenu.svg';

/* import b_facebookIcon from './../../../img/icons/black/facebook.svg';
import b_instagram from './../../../img/icons/black/instagram.svg';
import b_youtube from './../../../img/icons/black/youtube.svg';
 */

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});



export default function Nav(props) {


  const classes = useStyles();
  const [state, setState] = React.useState({
      left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>

        <ListItem>
          <Link href="#" onClick={() =>  setState({ left: false })} activeClass="is-active" to='section1' spy={true} smooth={true} isDynamic={true} offset={-60} >היזם</Link> 
          {/* <NavLink activeClassName='is-active' onClick={() => scroll.scrollTo(0)} to={PagesNames.home[0].url}>{PagesNames.home[0].namePage}</NavLink> */}
        </ListItem>

        <ListItem>
          <Link href="#" onClick={() =>  setState({ left: false })}  activeClass="is-active" to='city' spy={true} smooth={true} isDynamic={true} offset={-60} >העיר והשכונה</Link> 
        </ListItem>

        <ListItem>
          <Link href="#" onClick={() =>  setState({ left: false })}  activeClass="is-active" to='MapsPictures' spy={true} smooth={true} isDynamic={true} offset={-60} >מפות ותרשימים</Link> 
        </ListItem>

        <ListItem>
          <Link href="#" onClick={() =>  setState({ left: false })}  activeClass="is-active" to='project' spy={true} smooth={true} isDynamic={true} offset={-60} >הפרויקט</Link> 
        </ListItem>

        <ListItem>
          <Link href="#" onClick={() =>  setState({ left: false })}  activeClass="is-active" to='purchaseProcess' spy={true} smooth={true} isDynamic={true} offset={-60} >תהליך הרכישה</Link> 
        </ListItem>

        <ListItem>
          <Link href="#" onClick={() =>  setState({ left: false })}  activeClass="is-active" to='payments' spy={true} smooth={true} isDynamic={true} offset={-60} >פריסת תשלומים</Link> 
        </ListItem>

        <ListItem>
          <Link href="#" onClick={() =>  setState({ left: false })}  activeClass="is-active" to='Mortgage' spy={true} smooth={true} isDynamic={true} offset={-60} >משכנתא</Link> 
        </ListItem>

        <ListItem>
          <Link href="#" onClick={() =>  setState({ left: false })}  activeClass="is-active" to='Prices' spy={true} smooth={true} isDynamic={true} offset={-60} >מחירון</Link> 
        </ListItem>

        <ListItem>
          <Link href="#" onClick={() =>  setState({ left: false })}  activeClass="is-active" to='DeppartmentFile' spy={true} smooth={true} isDynamic={true} offset={-60} >תוכניות</Link> 
        </ListItem>

        <ListItem>
          <Link href="#" onClick={() =>  setState({ left: false })}  activeClass="is-active" to='DoccumentsFiles' spy={true} smooth={true} isDynamic={true} offset={-60} >מסמכים להורדה</Link> 
        </ListItem>

        {/* <ListItem>
          <Link href="#" onClick={() =>  setState({ left: false })}  activeClass="is-active" to='MapSection' spy={true} smooth={true} isDynamic={true} offset={-60} >מיקום הפרויקט</Link> 
        </ListItem> */}

        <ListItem>
          <Link href="#" onClick={() =>  setState({ left: false })}  activeClass="is-active" to='site-footer' spy={true} smooth={true} isDynamic={true} offset={-60} >צור קשר</Link> 
        </ListItem>
        
      </List>

    </div>
  );
  
    //console.log(PagesNames.contact[0].url);

    //console.log(props);

    return (
      <div className="header-wrapper">
        <div className='site-header headerMobile'>
          
          <div className='open col'>
            <Button onClick={toggleDrawer('left', true)}>
                <div className='openIcon'>
                   <span/>
                   <span/>
                   <span/>
                </div>
            </Button>
          </div>

          <div className='main-menu col'>
            <NavLink activeClassName='is-active' to="/">
              { props.blueWave ? <div style={{display:'inline-block'}}>LOGO SVG</div> : 
                  <img className='mainLogo' src={logo} alt={props.info.SiteDataitems.settings.sitename} /> }
            </NavLink>
          </div>
        </div>

      <SwipeableDrawer className='mobileDraw menuRight'
          open={state.left}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
      
    </div>
  

  
  )
    

  }
