const lo = require("lodash")

const items = [1,[2,[3,[4]]]]
const newitem = lo.flatMapDeep(items)

console.log(newitem );