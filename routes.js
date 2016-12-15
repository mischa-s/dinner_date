var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {
  getHome: getHome,
  dinnerResult: dinnerResult
}

function getHome (req, res) {
  res.send('Dinner With Friends!')
}

function dinnerResult (req, res) {
  knex('friends')
    .join('availability', 'friends.id', '=', 'availability.friend_id')
    .where('friends.id', req.params.id)
    .then(results => {
      res.render('results.hbs', results[0])
    })
    console.log(results)
    .catch(err => console.error(err))
}
