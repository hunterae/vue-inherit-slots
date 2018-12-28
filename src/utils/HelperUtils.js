// Created / adapted custom implementations of methods available from lodash and deepmerge as they were adding nearly
//  180kb to the generated lib files

// Solution found here: https://stackoverflow.com/a/37616104/400699
export function filterObject(object, predicate) {
  if (typeof object === 'undefined') {
    return {}
  } else {
    return Object.keys(object)
      .filter(key => predicate(key, object[key]))
      .reduce((result, key) => ((result[key] = object[key]), result), {})
  }
}

export function omit(object, keys) {
  return filterObject(object, key => keys.indexOf(key) === -1)
}

// Adapted from https://youmightnotneed.com/lodash/
export function flatten(array) {
  return array.reduce((a, b) => a.concat(b), [])
}

export default {}
