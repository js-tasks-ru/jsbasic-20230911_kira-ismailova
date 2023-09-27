function showSalary(users, age) {
  let str = '';
  str = users
  .filter(user => user.age <= age)
  .map(user => `${user.name}, ${user.balance}`)
  .join('\n');
  return str;
}
