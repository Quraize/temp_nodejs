//all the data and variables
// remember to share the minimum or only required

//works as a local
const secret = 'super secret'
//work as shared(or you can say global to the whole app)
const name1 = 'talha'
const name2 = 'tayyab'

//exporting the necessary factors from this file/module

module.exports = {name1, name2} //1st way


module.exports.item = ['item1', 'item2']  //2nd way


const person = {
    isam: "Abdulla",
    age: 29
}
module.exports.singlePerson = person  //3rd way




