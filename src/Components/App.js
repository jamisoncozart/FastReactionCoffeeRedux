import React from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Body />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;