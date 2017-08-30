import React from 'react';

const Home = (props)=> {

  let headerTitle = {
    color: "white",
    fontSize: "14rem"
  }
    return (
      <div id="heroImage" className="container-fluid">
        <header >
          <h1 style={headerTitle} >Hi!</h1>
        </header>
        <main>
          <div>
            <h4>Mock home page - use above menu</h4>
          </div>
          <div>
            <p>This is NOT a true portfolio site</p>
          </div>
        </main>
      </div>
    )
}

export default Home;
