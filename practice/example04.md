const userList = fetchUsers();
const userListLength = userList.length;
function render(userList) {
  return userList.map(u => u.name);
}
// TODO: rename userList to users
