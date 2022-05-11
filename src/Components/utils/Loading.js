import React from 'react'

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import logoBlack from './../../img/default/logoBlack.svg'

export default function Loading(props) {

    const {open, noBackdrop } = props;

    if(noBackdrop) {

      return (
        <Backdrop
        
            sx={{  background: '#ffffff2e',color: '#1589A7', fontSize: '50px', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={ open }   > {/* onClick={handleClose} */}

            

            <img className='logoWaiting' src={logoBlack} alt='אופק שלי' />
            <CircularProgress style={{color: 'black'}} />
        </Backdrop>

      )

    }

    else {

      return (
        <Backdrop
        
            sx={{  background: '#ffffffc4',zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={ open }   > {/* onClick={handleClose} */}
            
              <img className='logoWaiting' src={logoBlack} alt='אופק שלי' />
            
            <CircularProgress style={{color: 'black'}} />
        </Backdrop>
      )

    }
 
}