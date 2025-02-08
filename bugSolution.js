const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Check if userId is valid
  if (!isValidUserId(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ... rest of your code
});

function isValidUserId(userId) {
  // Add your validation logic here
  // For example, check if the userId is a number and exists in the database
  return /^[0-9]+$/.test(userId) &&  userExists(userId);
}

function userExists(userId){
  //Example implementation for userExists function
  const users = {
      "1": {"name": "John Doe"},
      "2": {"name": "Jane Doe"}
  }
  return users.hasOwnProperty(userId);
}

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});