import React from 'react';
import CardContainer from './card_container';

class Column extends React.Component{
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e){
    e.preventDefault();
    let newData = window.prompt();
    this.props.addCard(newData, this.props.colId);
  }

  render(){
    debugger
    return (<div className="column">
      <div className="col-header">{this.props.name}</div>
      {this.props.data.map((datum, idx) => (
        <CardContainer key={idx} datum={datum.body} colId={this.props.colId} id={datum.id} />
      ))}
      <div className="add-button" onClick={this.onClick}>Add a Card!</div>
    </div>)
  }

}

export default Column;
