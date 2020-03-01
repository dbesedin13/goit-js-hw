// TASK 10

import users from './users.js';

const getAllScillsOfUsers = users => {
  return users
    .reduce((allSkills, user) => [...allSkills, ...user.skills], [])
    .reduce((uniqueSkills, skill) => {
      if (uniqueSkills.includes(skill)) return uniqueSkills;
      return [...uniqueSkills, skill];
    });
};

console.log(
  getAllScillsOfUsers(users).sort((a, b) => a.localeCompare(b, 'en')),
);

// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
