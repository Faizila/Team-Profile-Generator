// node modules 
const inquirer = require('inquirer');
const fs = require('fs');

// link to page creation
const generateTeam = require('./src/page-template');

// team profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// team array
const teamArray = [];

