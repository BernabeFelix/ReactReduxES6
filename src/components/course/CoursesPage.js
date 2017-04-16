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
import CourseList from './courseList';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>Courses Page</h1>
        <CourseList courses={this.props.courses}/>
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
