import React, { Component } from 'react'
import TextToHtml from './../../../Texthtml';
import Modal from 'react-bootstrap4-modal'
/* https://www.npmjs.com/package/react-bootstrap4-modal */

export default class PopupText extends Component {
    
    state = {
        show: this.props.show,
        errorclass: this.props.error ? ' error-modal' : '',
        message: this.props.message
    }
    
    handleShow = () => {
        this.props.hidePopUp();
    }

    render(){
        
        /* onClickBackdrop={this.modalBackdropClicked} */
        return  <Modal  className='modal modal-PopupText' visible={this.state.show} onClickBackdrop={this.handleShow}>
        
            <div className="modal-body" >
                <button  type="button" className="close" data-dismiss="modal" aria-label="Close"  onClick={this.handleShow}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <TextToHtml text={this.state.message} />
            </div>
            <div className="modal-footer" >
                <button type="button" className="btn btn-default " onClick={this.handleShow}>
                    סגור
                </button>
            </div>
        </Modal>
    }

}
