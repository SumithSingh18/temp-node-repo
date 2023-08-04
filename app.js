const _ = require('lodash');
const items = [2,[34,33,[344]],45]
const newItems = _.flattenDeep(items);

console.log(newItems);