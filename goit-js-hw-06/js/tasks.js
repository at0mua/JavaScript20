import users from './users.js';

console.log(users);

/* task-1 */

const getUserNames = users => {
  const userNames = users.map(user => user.name);
  return userNames;
};

console.log(getUserNames(users));

/* task-2 */

const getUsersWithEyeColor = (users, color) => {
  const userEyeColor = users.filter(user => user.eyeColor === color);
  return userEyeColor;
};

console.log(getUsersWithEyeColor(users, 'blue'));

/* task-3 */

const getUsersWithGender = (users, gender) => {
  const userNames = users
    .filter(user => user.gender === gender)
    .map(user => user.name);
  return userNames;
};

console.log(getUsersWithGender(users, 'male'));

/* task-4 */

const getInactiveUsers = users => {
  const isNotActive = users.filter(user => !user.isActive);
  return isNotActive;
};

console.log(getInactiveUsers(users));

/* task-5 */

const getUserWithEmail = (users, email) => {
  const userByEmail = users.find(user => user.email === email);
  return userByEmail;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

/* task-6 */

const getUsersWithAge = (users, min, max) => {
  const userWithAge = users.filter(user => user.age >= min && user.age <= max);
  return userWithAge;
};

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));

/* task-7 */

const calculateTotalBalance = users => {
  const totalUsersBalance = users.reduce(
    (totalBalance, user) => totalBalance + user.balance,
    0,
  );
  return totalUsersBalance;
};

console.log(calculateTotalBalance(users));

/* task-8 */

const getUsersWithFriend = (users, friendName) => {
  const userByFriends = users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
  return userByFriends;
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

/* task-9 */

const getNamesSortedByFriendsCount = users => {
  const usersByFriendsQuantity = users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
  return usersByFriendsQuantity;
};

console.log(getNamesSortedByFriendsCount(users));

/* task-10 */

const getSortedUniqueSkills = users => {
  const unickSkills = users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills;
    }, [])
    .filter((skill, index, allSkills) => index === allSkills.indexOf(skill))
    .sort();
  return unickSkills;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
