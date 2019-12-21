import React, { Component } from 'react'
import './result.scss';

class Result extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      const { PredictNumber} = this.props;
      return (
        <div className="Result">
            <div className="Paragrahp">Kết quả trả về</div>
            <br />
            {/* Result Image */}
            {(PredictNumber == 0) && (PredictNumber != '') && <img className="Image" src={process.env.PUBLIC_URL + '/logo/0.jpg'} alt='Image Result' />}
            {(PredictNumber == 1) && <img className="Image" src={process.env.PUBLIC_URL + '/logo/1.jpg'} alt='Image Result' />}
            {(PredictNumber == 2) && <img className="Image" src={process.env.PUBLIC_URL + '/logo/2.jpg'} alt='Image Result' />}
            {(PredictNumber == 3) && <img className="Image" src={process.env.PUBLIC_URL + '/logo/3.jpg'} alt='Image Result' />}
            {(PredictNumber == 4) && <img className="Image" src={process.env.PUBLIC_URL + '/logo/4.jpg'} alt='Image Result' />}
            {(PredictNumber == 5) && <img className="Image" src={process.env.PUBLIC_URL + '/logo/5.jpg'} alt='Image Result' />}
            {(PredictNumber == 6) && <img className="Image" src={process.env.PUBLIC_URL + '/logo/6.jpg'} alt='Image Result' />}
            {(PredictNumber == 7) && <img className="Image" src={process.env.PUBLIC_URL + '/logo/7.jpg'} alt='Image Result' />}
            {(PredictNumber == 8) && <img className="Image" src={process.env.PUBLIC_URL + '/logo/8.jpg'} alt='Image Result' />}
            {(PredictNumber == 9) && <img className="Image" src={process.env.PUBLIC_URL + '/logo/9.jpg'} alt='Image Result' />}
        </div>
      )
    }
  }
  export default Result;