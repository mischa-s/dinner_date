var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {
  getHome: getHome,
  // dinnerResult: dinnerResult
}

function getHome (req, res) {
     res.render('allFriends')
}

// function dinnerResult (req, res) {
//   knex('friends')
//     .join('availability', 'friends.id', '=', 'availability.friend_id')
//     .where('friends.id', req.params.id)
//     .then(results => {
//       res.render('allFriends', results[0])
//     })
//     console.log(results)
//     .catch(err => console.error(err))
// }

function logError (err) {
  console.error('Uh oh!', err)
}


// knex('friends')
//   .then (function (listFriends){
//         var data = {
//        friends: listFriends
//        }
//        console.log (data)
