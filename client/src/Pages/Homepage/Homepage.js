import React, { Component } from 'react'
import './Homepage.scss';
import { api } from './../../helper/api';
import Result from './../../components/result';
class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ImageValue: '',
      PredictNumber: ''
    }
  }

  componentDidMount(){
    this.setState({
      ImageValue:'',
      PredictNumber: ''
    });
  }
  
  handleChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    let fileName = {filename: file.name};
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState({
          ImageValue: reader.result,
      });

      api.post('/predict', fileName)
      .then(res => {
        this.setState({
            PredictNumber: res.data.number
        });
      })
      .catch(err => {
        console.log(err);
      });
    };
  }

  render() {
    const {ImageValue, PredictNumber} = this.state;
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
        <div className="TitleGroup">
          <div className="Title">AI-ML Lab App</div>
          <img className="FeatureLogo" src={process.env.PUBLIC_URL + '/logo/ML.png'} alt="logo ML"/>
        </div>
        <div className="ListOfLogo">
          <img className="FeatureLogo" src={process.env.PUBLIC_URL + '/logo/Keras.png'} alt="logo Keras"/>
         
          <img className="FeatureLogo" src={process.env.PUBLIC_URL + '/logo/Tensor.jpg'} alt="logo Tensor"/>
        </div>
        {/* Box Handle Action */}
        <div className="Box">

          {/* Component Upload Image */}
          <div className="Upload-Image">
            <div className="Paragrahp">Upload ảnh tại đây</div>
            {/* Upload Image */}
            <input className="FilePicker" type="file" accept="image/*" onChange={this.handleChange} />
            {ImageValue && <img className="Image" src={this.state.ImageValue} alt='Image Choose' /> }
          </div>

          {/* Component Result */}
          <Result PredictNumber={PredictNumber} />
        </div>
      </div>
    )
  }
}
export default Homepage;