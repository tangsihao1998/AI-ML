import React, { Component } from 'react'
import './Homepage.scss';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ImageValue: '',
    }
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ImageValue: e.target.value});
  }

  Click= (e) =>{
    console.log(this.state.ImageValue);
  }
  render() {
    return (
      <div>
        <div className="Navbar">
          <img className="logo" src={process.env.PUBLIC_URL + '/logo/khtn.png'} alt="logo KHTN"/>
          <div className="information">
            <div className="infor">Trường Đại Học Khoa Học Tự Nhiên</div>
            <div className="infor">Khoa Công Nghệ Thông Tin</div>
            <div className="infor">Chương Trình Chất Lượng Cao</div>
          </div>
        </div>
        <div className="Title">AI-ML Lab App</div>
        <div className="ListOfLogo">
          <img className="FeatureLogo" src={process.env.PUBLIC_URL + '/logo/Keras.png'} alt="logo Keras"/>
          <img className="FeatureLogo" src={process.env.PUBLIC_URL + '/logo/ML.png'} alt="logo ML"/>
          <img className="FeatureLogo" src={process.env.PUBLIC_URL + '/logo/Tensor.jpg'} alt="logo Tensor"/>
        </div>
        <div className="Box">
          <div className="Upload-Image">
            <div className="Paragrahp">Upload ảnh tại đây</div>
            {/* Upload Image */}
            <input type="file" accept="image/*" value={this.state.ImageValue} onChange={this.handleChange}></input>
            <button onClick={this.Click}></button>
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
    )
  }
}
export default Homepage;