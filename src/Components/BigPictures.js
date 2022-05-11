import React, { Component } from 'react'
import Modal from 'react-bootstrap4-modal'
import APPIpic from "./APPIpic";
/* https://www.npmjs.com/package/react-bootstrap4-modal */


export default class BigPictures extends Component {
    
    state = {
        show: this.props.show
    }
    
    handleShow = () => this.setState({show: false});
    
    //handleShow = () => this.props.noModal;
    
    render(){
        //console.log(this.props.picture);

        return  <Modal className='BigPictures' visible={this.state.show} onClickBackdrop={this.modalBackdropClicked}>
            <div className="modal-body" >

                <button  type="button" className="close" data-dismiss="modal" aria-label="Close"  onClick={this.props.noModal}>
                    <span aria-hidden="true">&times;</span>
                </button>

                <APPIpic  pic={this.props.picture.image}  alt={this.props.picture.model + ' | ' + this.props.picture.rooms + 'חדרים'} />
                <p>{this.props.picture.model + ' | ' + this.props.picture.rooms + 'חדרים'} </p>
            </div>
            
        </Modal>
    }

}

