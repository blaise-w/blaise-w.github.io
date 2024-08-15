const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const { firstName, lastName, availability } = req.body;

  if (!firstName || !lastName) {
    return res.status(400).json('Error: Missing firstName or lastName');
  }

  const newUser = new User({ firstName, lastName, availability });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => {
      console.error('Error saving user:', err);
      res.status(400).json('Error: ' + err.message);
    });
});

module.exports = router;
