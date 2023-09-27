<<<<<<< HEAD
function showSalary(users, age) {
  let str = '';
  str = users
  .filter(user => user.age <= age)
  .map(user => `${user.name}, ${user.balance}`)
  .join('\n');
  return str;
=======
function showSalary(data, age) {
  return data
    .filter(item => item.age <= age)
    .map(item => `${item.name}, ${item.balance}`)
    .join('\n');
>>>>>>> 214bfb2fb52dc51f07f69126193420a1a1d6d209
}
