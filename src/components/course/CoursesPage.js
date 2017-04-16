import {
  connect
}
from 'react-redux';
import React, {
  PropTypes
}
from 'react';
import * as courseActions from '../../actions/courseActions';
import {
  bindActionCreators
}
from 'redux';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  courseRow(course, index) {
    return <div key={index}> {course.title} </div>;
  }

  render() {
    return (
      <div>
        <h1>Courses Page</h1>
        {this.props.courses.map(this.courseRow)}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

//////////// start redux ////////////
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
//////////// end redux ////////////
