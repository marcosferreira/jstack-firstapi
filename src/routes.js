const userController = require('./controllers/UserControllers');

module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: userController.listUsers,
  }
]