// var Sequelize = require( 'sequelize' );
// var db = require( './config/db.js' );


// var User = db.define( 'user', {
//   //This implementation automatically includes the following fields:
//   //id, username, hash, salt, activationKey, resetPasswordKey, createdAt, updatedAt
//   //we will be treating the user's email as their username
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   username: { //acts as the username
//     type: Sequelize.STRING,
//     unique: true,
//     allowNull: false
//   },
//   hash: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },  
//   messages: {
//     type: Sequelize.JSON,
//     allowNull: false,
//     defaultValue: []
//   },
//   profile: {
//     //This is for storing the user's essay data and perhaps any other person-level data
//     type: Sequelize.JSON,
//     defaultValue: {     
//      about: "",
//      tagLine: ""
//     }
//   },
//   counter: {                  // redo this and answer history into one json object
//     type: Sequelize.INTEGER,
//     defaultValue: 0
//   },
//   answerHistory: {
//     type: Sequelize.JSON,
//     defaultValue: {
//       data: []
//     }
//   },
//   ratings: {
//     //This is for storing the user's attributes
//     type: Sequelize.JSON,
//     defaultValue: {
//       dominance: 0,
//       adaptable: 0,
//       blunt: 0,
//       collaborative: 0,
//       brute: 0,
//       aggressive: 0,
//       boundaries: 0,
//       loud: 0,
//       committed: 0,
//       ambition: 0
//     }
//   }
// });

// User.sync();

// module.exports = User;
