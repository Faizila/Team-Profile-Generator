//importing employee class constructor 
const Employee = require('./Employee');

//intern class constructor extends employee constructor 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        //calling parent employee class constructor
        super (name, id, email); 
        this.school = school; 
    }

    //override employee role to intern
    getRole () {
        return "Intern";
    }

    //get school from user input 
    getSchool () {
        return this.school;
    }    
}

// to be exported 
module.exports = Intern; 