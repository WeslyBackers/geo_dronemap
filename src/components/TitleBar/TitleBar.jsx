import React, { PureComponent } from 'react';
import { Navbar } from 'react-bootstrap';
import AppVersion from '../AppVersion/AppVersion';
import ToolBar from '../ToolBar/ToolBar';
//import { Test } from './TitleBar.styles';


class TitleBar extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('TitleBar will mount');
  }

  componentDidMount = () => {
    console.log('TitleBar mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('TitleBar will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('TitleBar will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('TitleBar did update');
  }

  componentWillUnmount = () => {
    console.log('TitleBar will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="TitleBarWrapper d-flex bg-dark text-white align-items-center justify-content-between">
        <Navbar className='d-flex mx-3'>
          <h2>DroneMap</h2><h3>Europe</h3>
        </Navbar>
        <ToolBar></ToolBar>
        <AppVersion className='flex'></AppVersion>
      </div>
    );
  }
}

TitleBar.propTypes = {
  // bla: PropTypes.string,
};

TitleBar.defaultProps = {
  // bla: 'test',
};

export default TitleBar;