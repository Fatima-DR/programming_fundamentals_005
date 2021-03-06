// =============== PART 1 - Advanced Objects ================

/*
  This function receives an object and returns the number 
  of key-value pairs (properties) in the object.
*/
function size(object) {
  //define a count of keys starting from 0
  return Object.keys(object).length;
}

/*
  This function receives an object, whose values will all be numbers, and returns the smallest number in the object.
*/
function min(object) {
  const values = Object.values(object);

  return Math.min(...values);
}

/*
  This function receives an object, whose values will all be numbers, and returns the largest number in the object.
*/
function max(object) {
  const values = Object.values(object);

  return Math.max(...values);
}

/*
  This function receives an object, and will return a clone of this object - i.e. a new object with the same key-value pairs.
*/
function clone(object) {
  const person = new Object();
  Object.assign(person, object);

  return person;
}

/*
  This function receives an object and returns the value for the given key.
  If the key does not exist it returns undefined.
*/
function get(object, key) {

  return (object[key]);

}
/*
  This function will receive an object and a key, and will return true if the object has the given key, and false if not.
*/
function has(object, key) {
  returnBool = false;
  for (const value of Object.keys(object)) {
    if (value === key) {
      returnBool = true
    }
  }
  return returnBool
}

/*
  This function receives an object, whose values will all be numbers, and returns the sum of all these numbers.
*/
function sum(object) {
  let totalSum = 0
  for (let key in object) {
    if (typeof object[key] === "number") {
      totalSum = totalSum + object[key]
    }
  }
  return totalSum
}




/*
  This function receives an object and will return a new object with the keys and values inverted. See the tests for examples of this.
*/
function invert(object) {
  const invertedObject = Object.fromEntries(
    Object.entries(object).map(([value, key]) => [key, value]));
  return invertedObject
}


/*
  This function reveives an array of objects. It should return a single object, which is a combination of all the objects in the array.
*/
function addAll(arr) {
  const person = new Object();
  for (let i = 0; i < arr.length; i++) {
    Object.assign(person, arr[i]);
  }
  return person
}


// =============== PART 2 - Functions as Values ================

/*
  This function allows you to find a value from an object which fulfils a criteria. 
  It receives an object and a matcher function. 
  It should test each value in the object against the matcher function and if a matching value is found, 
  the value should be returned. Otherwise, return null.
*/
function find(obj, matcherFunc) {
  for (key in obj) {
    let bool = matcherFunc(obj[key])
    if (bool === true)
      return obj[key]
  }
  return null
}


/*
  This function allows you to test whether every value in an object matches a certain criteria. 
  For example, is every value greater than 100? 
  The function receives an object and a tester function. 
  If all values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function every(obj, func) {
  matchingbool = false
  for (key in obj) {
    let bool = func(obj[key])
    if (bool === false)
      return matchingbool
    else {
      return bool
    }
  }
}

/*
  This function allows you to test whether some values in an object match a certain criteria. For example, are at least some of the values greater than 100? The function receives an object and a tester function. If at least 1 of the values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function some(obj, func) {
  matchbool = true
  for (key in obj) {
    let bool = func(obj[key])
    if (bool === true)
      return matchbool
    else {
      return bool
    }
  }
}

function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.sum = sum;
  Object.invert = invert;
  Object.addAll = addAll;
  Object.find = find;
  Object.every = every;
  Object.some = some;
}

module.exports = setUpGlobalObject;
