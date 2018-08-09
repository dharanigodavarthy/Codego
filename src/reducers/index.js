import {combineReducers} from 'redux';
import file from './fileReducer';

const rootReducer =combineReducers({
    file
});

export default rootReducer;

// createCourse(this.state.createCourse);

// function mapDispatchToProps(dispatch) {
    // return{
    //     createCourse:course=>dispatch(courseActions.createCourse(course))
    //  }
//   }