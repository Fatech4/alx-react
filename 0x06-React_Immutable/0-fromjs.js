const { fromJS } = require('immutable');

function getImmutableObject(object) {
  const map = fromJS(object);
  return map;
}

export default getImmutableObject;
