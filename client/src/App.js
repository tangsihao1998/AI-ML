import React, {Component} from 'react';
import './app.scss';

class App extends Component {
  render (){
    return (
      <div className="App">
        <div className="Navbar"><img className="logo" src="../public/logo/khtn.png" alt="logo KHTN"></img></div>
        <div className="Title">AI-ML Lab App</div>
        <div className="Box">
          <div className="Upload-Image">
            <div className="Paragrahp">Upload ảnh tại đây</div>
            {/* Upload Image */}
            <div></div>
          </div>
          <div className="Result">
            <div className="Paragrahp">Kết quả trả về:</div>
            {/* Result Image */}
            <div></div>
            {/* Accuracy */}
            <div className="result-p">Accuracy: </div>
            <div className="result-p">Loss: </div>
            <div className="result-p">Epochs: </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
