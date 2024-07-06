import PropTypes from 'prop-types'

const CourseShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    credit: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
});

export default CourseShape;