import React from 'react';

const Portfolio = (props)=> {

  let imgStyles = {
    borderRadius: "4px"
  }

  let portStyles = {
    marginBottom: "30px"
  }
    return (
      <div className="container-fluid">
        <header>
          <h1>Portfolio</h1>
        </header>
        <main>
          <div style={portStyles} className="row card-block">
              <div className="col-md-4 col-sm-4 col-xs-12">
                <p>Portfolio Image</p>
                <img style={imgStyles} className="img-responsive" src="https://unsplash.it/700/?random" alt=""/>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <p>Portfolio Image</p>
                <img style={imgStyles} className="img-responsive" src="https://unsplash.it/700/?random" alt=""/>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <p>Portfolio Image</p>
                <img style={imgStyles} className="img-responsive" src="https://unsplash.it/700/?random" alt=""/>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <p>Portfolio Image</p>
                <img style={imgStyles} className="img-responsive" src="https://unsplash.it/700/?random" alt=""/>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <p>Portfolio Image</p>
                <img style={imgStyles} className="img-responsive" src="https://unsplash.it/700/?random" alt=""/>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <p>Portfolio Image</p>
                <img style={imgStyles} className="img-responsive" src="https://unsplash.it/700/?random" alt=""/>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <p>Portfolio Image</p>
                <img style={imgStyles} className="img-responsive" src="https://unsplash.it/700/?random" alt=""/>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <p>Portfolio Image</p>
                <img style={imgStyles} className="img-responsive" src="https://unsplash.it/700/?random" alt=""/>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <p>Portfolio Image</p>
                <img style={imgStyles} className="img-responsive" src="https://unsplash.it/700/?random" alt=""/>
              </div>
          </div>
        </main>
      </div>
    )
}

export default Portfolio;
