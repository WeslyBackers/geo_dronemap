import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './AppVersion.styles';
import { Badge } from 'react-bootstrap';
class AppVersion extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('AppVersion will mount');
  }

  componentDidMount = () => {
    console.log('AppVersion mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('AppVersion will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('AppVersion will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('AppVersion did update');
  }

  componentWillUnmount = () => {
    console.log('AppVersion will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="AppVersionWrapper mr-2">
        <Badge bg='info' className='p-2 m-3'>v1.0</Badge>
      </div>
    );
  }
}

AppVersion.propTypes = {
  // bla: PropTypes.string,
};

AppVersion.defaultProps = {
  // bla: 'test',
};

export default AppVersion;
