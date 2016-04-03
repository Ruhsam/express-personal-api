// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

var db = require('./models');

var new_victim = [

{
     name: 'John Doe',
     case: '#1',
     last_contact:04/25/2014,
     victimOfCrime:'Burglary',
     acceptingHelp: false
},
{
   name: 'John McMan',
   case: '#2',
   last_contact:10/11/2011,
   victimOfCrime:'Assault',
   acceptingHelp: true
},
{
     name: 'Jackson Buttface',
     case: '#3',
     last_contact:07/07/2001,
     victimOfCrime:'Kidnapping',
     acceptingHelp: true
},
{
   name: 'Amanda Huginciss',
   case: '#4',
   last_contact:01/03/2007,
   victimOfCrime:'Vandalism',
   acceptingHelp: false
}
];

var name_list = [
{
first: 'John',
middle: 'Nobody',
last: 'Doe'
},
{
first: 'John',
middle: 'Peter',
last: 'McMan'
},
{
first: 'Jackson',
middle: 'Danger',
last: 'Buttface'
},
{
first: 'Amanda',
middle: '',
last: 'Huginciss'
},
];



db.Victim.create(new_victim, function(err, victim){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new victim", victim._id);
  process.exit(); // we're all done! Exit the program.
});
