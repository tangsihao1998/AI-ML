import React, {Component} from 'react';
import { BrowserRouter as Router,Route,Switch }  from 'react-router-dom'
import { withRouter } from 'react-router'
import Homepage from './Pages/Homepage/Homepage';
import './App.scss';
// Scroll To Top Component
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}
const Scroll = withRouter(ScrollToTop);

class App extends Component {
  render (){
    return (
      <Router>
        <div className="App">
          <Scroll>
            <Switch>
              <Route exact path='/' component={Homepage} />
            </Switch>
          </Scroll>
        </div>
      </Router>
    );
  }
}

export default App;
