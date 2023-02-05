import React, { Component } from 'react'
import Modal from 'react-bootstrap4-modal'

import APPIpic from "./../../../APPIpic";
import GalleryPictures from "./GalleryPictures";

/* https://www.npmjs.com/package/react-bootstrap4-modal */

export default class PopupPicture extends Component {
    
    state = {
        show: this.props.show,
        message: this.props.message
    }
    
    handleShow = () => {
        this.props.hidePopUp();
    }

    render(){
        
        /* onClickBackdrop={this.modalBackdropClicked} */
        return  <Modal className='modal modal-PopupText modal-Picture ' visible={this.state.show} onClickBackdrop={this.handleShow}>
        
            <div className="modal-body" >
                <button  type="button" className="close" data-dismiss="modal" aria-label="Close"  onClick={this.handleShow}>
                    <span aria-hidden="true">&times;</span>
                </button>

                {console.log(this.props.gallery)}
                {this.props.gallery ?
                    <GalleryPictures first={this.state.message} pictures={this.props.gallery} mobile={this.props.mobile} /> :
                    <APPIpic  showclass="mainPic" pic={this.state.message}  />
                }
                
            </div>
           {/*  <div className="modal-footer" >
                <button type="button" className="btn btn-default " onClick={this.handleShow}>
                    סגור
                </button>
            </div> */}
        </Modal>
    }

}
