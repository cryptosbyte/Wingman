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

/**
 * Fetches value from object using Dot Notation.
 * @param {Object} obj 
 * @param {string} path 
 * @returns {*} 
 */
export const GetValueFromPath = (obj: object, path: string) => {
  path = path.replace(/\[(\w+)\]/g, ".$1");
  path = path.replace(/^\./, "");

  const pathSplitted = path.split(".");
  for (var i: number = 0, n: number = pathSplitted.length; i < n; ++i) {
    var key: any = pathSplitted[i];
    if (key in obj) 
      //@ts-ignore
      obj = obj[key];
    else return;
  }
  return obj;
};
