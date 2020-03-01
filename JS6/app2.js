// TASK 2
import users from './users.js';

const getUsersWithEyeColor = (users, color) =>
  users.filter(({ eyeColor }) => eyeColor === color).map(user => user.name);
// v1.1.

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => {
//     return user.eyeColor === color;
//   });
// }; v1.0

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
