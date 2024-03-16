import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { bindActionCreators } from 'redux';

export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index: { index },
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index: { index },
});

export const boundSelectCourse = bindActionCreators(selectCourse, dispatch);
export const boundUnSelectCourse = bindActionCreators(unSelectCourse, dispatch);
