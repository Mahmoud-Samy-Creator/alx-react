import React, { Component } from 'react';
import PropTypes from 'prop-types'

class BodySection extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {title, children} = this.props;

        return(
            <div className='bodySection'>
                <h2>{title}</h2>
                <div>{children}</div>
            </div>
        );
    }
}

BodySection.propTypes = {
    title: PropTypes.string
}

BodySection.defaultProps = {
    title: ''
}


export default BodySection;