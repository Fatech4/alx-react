import { fromJS } from 'immutable';

export default function accessImmutableObject (object, array) {
  const mapObject = fromJS(object);
  return mapObject.getIn(array);
}
