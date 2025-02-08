# Express.js Route Handler Missing Error Handling

This repository demonstrates a common error in Express.js route handlers: the lack of proper error handling for invalid input.

## Bug

The `bug.js` file shows an Express.js route handler that is missing error handling for invalid user IDs.  If a user attempts to access a non-existent user, the application may crash or return an unexpected error.

## Solution

The `bugSolution.js` file provides a solution to this problem by adding error handling to the route handler. This solution checks if the userId is valid before attempting to access the user data.  If it is invalid, it sends an appropriate error response.

## How to Run

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `node bug.js` to run the buggy code.
4. Run `node bugSolution.js` to run the corrected code.