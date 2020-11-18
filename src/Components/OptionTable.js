import React from 'react';

function TableHeader(props) {
  return (
    <thead>
      <tr>
        { props.cols.map(col => <th key={col}>{col}</th>) }
      </tr>
    </thead>
  );
}

function TableBody(props) {
  return (
    <tbody>
      { props.data.length > 0 && props.data.map(item =>
        <TableRow key={item.name} name={item.name} source={item.src}
        handleNameChange={props.handleNameChange}
        handleSourceChange={props.handleSourceChange}/>)
      }
    </tbody>
  );
}

function TableRow(props) {
  const {name, source} = props;

  const handleNameChange = e => {
    props.handleNameChange(name, e.target.value);
  }

  const handleSourceChange = e => {
    props.handleSourceChange(name, e.target.value);
  }

  return (
    <tr>
      <td><input type="text" value={name} onChange={handleNameChange}/></td>
      <td><input type="text" value={source} onChange={handleSourceChange}/></td>
    </tr>
  );
}

function OptionTable(props) {
  return (
    <table className="table">
      <TableHeader cols={props.cols}/>
      <TableBody data={props.data}
        handleNameChange={props.handleNameChange}
        handleSourceChange={props.handleSourceChange} />
    </table>
  );
}

export default OptionTable;