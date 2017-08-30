import React from 'react';

class Card extends React.Component{
  constructor(props){
    super(props);
    this.leftOnClick = this.leftOnClick.bind(this);
    this.rightOnClick = this.rightOnClick.bind(this);
  }

  leftOnClick(e){
    e.preventDefault();
    this.props.moveLeft(this.props.id);
  }

  rightOnClick(e){
    e.preventDefault();
    debugger
    this.props.moveRight(this.props.id);
  }

  render(){
    return (<div className="card">
      <div className="leftclick" onClick={this.leftOnClick}>Left</div>
      {this.props.datum}
      <div className="rightclick" onClick={this.rightOnClick}>Right</div>
    </div>)
  }

}

export default Card;
