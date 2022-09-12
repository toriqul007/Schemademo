const encrypt = require('../modules/encrypt.js')

module.exports = function (server, db) {

  server.post('/data/classes', (request, response) => {
    let user = request.body
    let result
    try {
      result = db.prepare('INSERT INTO classes (name, shortName, school, blog, hide, defaultStartTime, defaultEndTime, defaultInvoiceItem, defaultHoursPerDay) VALUES(?,?,?,?,?,?,?,?,?)').run([user.name, user.shortName, user.school, user.blog, user.hide, user.defaultStartTime, user.defaultEndTime, user.defaultInvoiceItem, user.defaultHoursPerDay])
    } catch (e) {
      console.error(e)
    }
    response.json(result)
  })
}