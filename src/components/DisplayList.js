import React from "react";

class DisplayList extends React.Component {
  render() {
    const { listItems } = this.props;
    console.log(listItems);
    return listItems ? (
      <div className="displayList-container">
        <h2>Naziv programa: {listItems.nazivPrograma}</h2>
        <hr />
        <h4>Seminari:</h4>
        <ol>
          {listItems.nazivSeminara.map((el, index) => {
            return <li key={index}>{el}</li>;
          })}
        </ol>
      </div>
    ) : (
      ""
    );
  }
}

export default DisplayList;
