//Modules - Encapsulated code (Commonjs- Every file is an module) (only sharing minimum)

//->importing from the files/modules
const names = require('./data')
const methods = require('./utils')

/*console.log(names.singlePerson)
methods.sayHi(names.name1)
methods.sayhelo(names.name2)
methods.sayhelo('Jodh')*/

//->you can also assign the imported value to a variable
/*const arr = names.item

console.log(arr)*/

//->remembet the code can also run even if you do not assign to it any var
require('./add')