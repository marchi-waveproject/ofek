import React, { Component } from 'react'

import Modal from 'react-bootstrap4-modal'
/* https://www.npmjs.com/package/react-bootstrap4-modal */

export default class Alert extends Component {
    
    state = {
        show: this.props.show,
        title: this.props.title,
        errorclass: this.props.error ? ' error-modal' : '',
        message: this.props.message
    }
    
    handleShow = () => {
        localStorage.setItem('lidResponse', false);
        this.setState({show: false,});
    }

    render(){

        return  <Modal  className={'modal modal-alert' + this.state.errorclass } visible={this.state.show} onClickBackdrop={this.modalBackdropClicked}>
            <div className='modal-header'  >
                {console.log('visible: '+this.state.show)}
                <h5 className="modal-title" >{this.state.title}</h5>

                <button  type="button" className="close" data-dismiss="modal" aria-label="Close"  onClick={this.handleShow}>
                    <span aria-hidden="true">&times;</span>
                </button>
                
            </div>
            <div className="modal-body" >
                <p>{this.state.message}</p>
            </div>
            <div className="modal-footer" >
                <button type="button" className="btn btn-default " onClick={this.handleShow}>
                    אישור
                </button>
            </div>
        </Modal>
    }

}
