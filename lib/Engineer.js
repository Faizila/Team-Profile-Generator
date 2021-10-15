//importing employee class constructor 
const Employee = require("./Employee");

//engineer class constructor extends employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        //calling parent employee class constructor
        super (name, id, email);
        this.github = github; 
    }

     //override employee role to engineer
     getRole () {
        return "Engineer";
    }

    //get github username from input 
    getGithub () {
        return this.github;
    }  
}

// to be exported 
module.exports = Engineer; 