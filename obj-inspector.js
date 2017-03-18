/*
 * A recursive function that dumps an object's properties and functions
 * mostly copied from stackoverflow - names have been changed to protect 
 * the innocent
 */

/**
 * 
 * @param {object} obj the object that we want to inspect
 * @param {string} indentation string for internal use only for recursive indentation - should be left 'undefined'
 * @return {string}
 */
function inspectObj(obj, indentation) {
    if (typeof indentation !== 'string') {
        indentation = '';
    }
    var result = [];
    for (var prop in obj) {
        var type = typeof obj[prop];
        result.push(indentation + '"' + prop + '" (' + type + ') => ' +
                (type === 'object'
                        ? 'object:' + inspectObj(obj[prop], indentation + '    ')
                        : obj[prop] + ''));
    }
    return result.join(indentation + '\n');
}
