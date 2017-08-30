import React from 'react';
import Column from './column';

class BoardIndex extends React.Component{
  constructor(props){
    super(props);
    this.splitData = this.splitData.bind(this);
  }

  splitData(){
    let columns = [[], [], [], []];
    Object.keys(this.props.cards).forEach((key) => {
      columns[this.props.cards[key].colId].push(this.props.cards[key]);
    })
    return columns;
  }

  render(){
    let newData = this.splitData();
    return (<div id="board-index-container">
      {newData.map((data, idx) => {
        return <Column data={data} name={"Column" + idx} key={idx} colId={idx} addCard={this.props.addCard}/>
      })}
    </div>)
  }
}

export default BoardIndex;
