type SupportedObjectType = {
  [key in string | number]: string | number;
};

/**
 * Returns an object where the value is the key.
 * @param {Object} obj
 * @returns {Object} New object
 */
export const ReverseObjectKeyValue = (obj: SupportedObjectType) => {
  let newObject: object = {};

  //@ts-ignore
  for (const key in obj) newObject[obj[key]] = key;

  return newObject;
};
