var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {
  getHome: getHome,
  availabilityOnDay
}

function getHome (req, res) {
     res.render('allFriends')
}

function availabilityOnDay (req, res) {
    knex('friends')
      .join('availability', 'friends.id', '=', 'availability.friend_id')
      .where ('availability.night', req.params.night)
      .then (listFriends => {
              var data = {friend: listFriends}
              console.log (data)
              res.render('availableFriends', data)
      })
      .catch (logError)
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
