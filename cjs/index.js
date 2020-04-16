var getOwnPropertyDescriptors = (function (Object) {
  var gOPDs = Object.getOwnPropertyDescriptors;
  if (gOPDs) return gOPDs;
  var dP = Object.defineProperty;
  var gOPD = Object.getOwnPropertyDescriptor;
  var gOPN = Object.getOwnPropertyNames;
  var gOPS = Object.getOwnPropertySymbols;
  return function (object) {
    for (var
      key,
      descriptors = {},
      keys = gOPN(object).concat(gOPS ? gOPS(object) : []),
      i = 0, length = keys.length; i < length; i++
    ) {
      key = keys[i];
      dP(descriptors, key, {
        enumerable: true,
        value: gOPD(object, key)
      });
    }
    return descriptors;
  };
}(Object));
module.exports = getOwnPropertyDescriptors;
