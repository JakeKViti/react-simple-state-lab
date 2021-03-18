import React, { Component } from 'react';

export default class Cell extends Component {
  
    constructor(n){
        super()
        this.state = {
            color: n.value
        }
    }

    
  handleClick = () => {
    this.setState({
      color: '#333'
    })
  }
  
  render() {
    return (
      <div 
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}>
      </div>
    )
  }
  }