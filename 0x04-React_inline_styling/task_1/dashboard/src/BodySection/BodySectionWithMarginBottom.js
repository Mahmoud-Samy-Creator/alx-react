import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite';
import PropTypes from  'prop-types'
import BodySection from './BodySection';


const styles = StyleSheet.create({
    margin_b40: {
        marginBottom: '40px' 
    }
})

class BodySectionWithMarginBottom extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={css(styles.marginBottom)}>
                <BodySection {...this.props}/>
            </div>
        );
    }
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string
}


BodySectionWithMarginBottom.defaultProps = {
    title: ''
}

export default BodySectionWithMarginBottom