import React from 'react';

const About = (props)=> {
  let listStyles = {
    "fontSize": "16px",
    "listStyle": "none",
    "padding": "0"
  }

  let imgStyle = {
    "borderRadius": "5px",
  }

  let imgBlockStyle = {
    marginBottom: "20px",
    padding: "10px"
  }
  let avaContainer = {
    borderRadius: "150px",
  }
  let avaStyles = {
    borderRadius: "160px",
    border: "1px solid #999",
    padding: "6px",
    backgroundColor: "#0098D0"
  }
    return (
      <div className="container-fluid">
        <header>
          <h1>About Me</h1>
        </header>
        <main>
          <div>
            <div style={avaContainer}>
              <img style={avaStyles} src="https://robohash.org/deseruntrationetemporibus.jpg?size=300x300&set=set1" alt=""/>
            </div>
            <ul style={listStyles}>
              <li>
                <p>Born and raised in Apex, NC</p>
              </li>
              <li>
                <p>Background in biomedical photography, research science, and other things.</p>
              </li>
            </ul>
          </div>
          <div style={imgBlockStyle} className="row card-block">
            <div className="col-sm-4">
              <h4>This is my dog</h4>
              <img style={imgStyle} className="img-responsive" src={require("../images/doge.jpg")} alt="Toki the Great"/>
            </div>
            <div className="col-sm-4">
              <h4>This is my daughter</h4>
              <img style={imgStyle} className="img-responsive" src={require("../images/daughter.jpg")} alt=""/>
            </div>
            <div className="col-sm-4">
              <h4>This is a pepper</h4>
              <img style={imgStyle} className="img-responsive" src={require("../images/pepper.jpg")} alt=""/>
            </div>
          </div>
        </main>
      </div>
    )
}

export default About;
