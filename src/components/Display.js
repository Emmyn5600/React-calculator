import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { calculation } = this.props;
    return (
      <div className="display-result">

        <input id="result" defaultValue={calculation} />

      </div>

    );
  }
}
Display.defaultProps = {
  calculation: '0',
};
Display.propTypes = {
  calculation: PropTypes.string,

};

export default Display;
