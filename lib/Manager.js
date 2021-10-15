//importing employee class constructor 
const Employee = require('./Employee');

//manager class constructor extends employee constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //calling parent employee class constructor
        super (name, id, email); 
        this.officeNumber = officeNumber; 
    }

    // override employee role to manager 
    getRole () {
        return "Manager";
    }
    // get manager office number
    getOfficeNumber () {
            return this.officeNumber;
    }
}

// to be exported 
module.exports = Manager; 