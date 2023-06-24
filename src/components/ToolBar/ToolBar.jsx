import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ToolBar.styles';
import { Navbar } from 'react-bootstrap';
import {Button} from 'react-bootstrap';


class ToolBar extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

/*   componentWillMount = () => {
    console.log('ToolBar will mount');
  } */

  componentDidMount = () => {
    console.log('ToolBar mounted');
  }

/*   componentWillReceiveProps = (nextProps) => {
    console.log('ToolBar will receive props', nextProps);
  } */

/*   componentWillUpdate = (nextProps, nextState) => {
    console.log('ToolBar will update', nextProps, nextState);
  } */

  componentDidUpdate = () => {
    console.log('ToolBar did update');
  }

  componentWillUnmount = () => {
    console.log('ToolBar will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ToolBarWrapper text-white">
        <Navbar className='d-flex col justify-content-center'>
          <Button className='btn-primary mx-2 p-2'>Search</Button>
          <Button className='btn-secondary mx-2 p-2'>Legend</Button>
          <Button className='btn-warning mx-2 p-2'>Legislation</Button>
          <Button className='btn-info mx-2 ms-5'>Contact</Button>
        </Navbar>
      </div>
    );
  }
}

ToolBar.propTypes = {
  // bla: PropTypes.string,
};

ToolBar.defaultProps = {
  // bla: 'test',
};

export default ToolBar;
