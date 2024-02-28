import { fromJS } from 'immutable';

function accessImmutableObject(object, array) {
  const mapObject = fromJS(object);
  return mapObject.getIn(array);
}
export default accessImmutableObject;
