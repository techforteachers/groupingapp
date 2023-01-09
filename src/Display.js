import React from 'react';

//const data = require("./testData");


const GroupDisplay = (props) => {
  //format inputData array into json
  if(props.inputData.length == 0){
    return(
      <p>data not available</p>
    );
  }
  let dataDict = {};
  for(let i = 0; i < props.inputData.length; i++){
    let groupNumInt = i+1;
    let groupNumString = groupNumInt.toString();
    let header = "Grou " + groupNumString; 
    dataDict[header] = props.inputData[i];
  }
  let data = [dataDict];

  function renderHeaderCells() {
    let headerCells = [];
    headerCells.push(<th> {"Rotation/Group"} </th>);
    for (let n in Object.keys(data[0])){
      headerCells.push(<th>{Object.keys(data[0])[n]}</th>);
    }
    return headerCells;
  }

  function renderResults(){
    let cells = [];
    for (let rotation in data){
      cells.push(<th> {rotation} </th>)
      let results = [];
      for (let i in data[rotation]){
      results.push(<td>{data[rotation][i].join(", ")}</td>)
      }
      cells.push(results)
      cells.push(<tr></tr>)
    }
    return cells
  }

  return (
    <React.Fragment>
       <br></br><br></br>
       <h1>Groups</h1>
       <br/>
      <table class="center">
        <thead>
          <tr>{renderHeaderCells()}</tr>
        </thead>
        <tr></tr><tr></tr>
        <tbody>
          {renderResults()}
        </tbody>
      </table>
      <br></br><br></br><br></br>
    </React.Fragment>
  );
};

export default GroupDisplay;
