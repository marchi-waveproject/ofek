import React from 'react'


import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import logoMenu from './../../../../img/default/logoBlack.svg'
import menuOpen from './../../../../img/homePage/menuOpen.svg'
import closeX from './../../../../img/homePage/closeX.svg'

import { Link } from 'react-scroll'  /* https://www.npmjs.com/package/react-scroll */


const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

export default function MmenuTop(props) {


    const classes = useStyles();

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const closeMe = () => { 

      setState({ ...state, right: false });

     }    

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <ul className='m_menu'>
            
            <li>
                <img src={closeX} alt='closeMe'/>
            </li>

            <li >
              <Link href="#" onClick={ closeMe } activeClass="is-active" to='text' spy={true} smooth={true} isDynamic={true} offset={-100} >אודות</Link>
            </li>

            <li >
              <Link href="#" onClick={ closeMe } activeClass="is-active" to='projectsCont' spy={true} smooth={true} isDynamic={true} offset={-60} >פרויקטים</Link>
            </li>

            <li >
              <Link href="#" onClick={ closeMe } activeClass="is-active" to='contactForm' spy={true} smooth={true} isDynamic={true} offset={-60} >צור קשר</Link>
            </li>
            


        </ul>

    </div>
  );

  return (
      <>

        <Drawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
            {list('right')}
        </Drawer>

        <div className='m_menuTop'>
            
            <img onClick={toggleDrawer('right', true)} className='menuOpen' src={menuOpen} alt='menuOpen' />

            <img className='logoMenu' src={logoMenu} alt='logoMenu' />

            <div className='lItems'>
                <p><small>*</small>2898</p>
            </div>

        </div>

    </>
    
  )
}
