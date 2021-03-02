import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';




export default class  Modal extends Component {
  render() {
    if (typeof window !== 'undefined') {
      return (
        ReactDOM.createPortal(
                <div className="modal">
                  {this.props.children}
                </div>,
                document.getElementById('portal')
              )
            );
      
    }
    return null
  }
}