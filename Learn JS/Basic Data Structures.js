//18
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  // Only change code below this line
  let count=0
for (const key in allUsers){
  if(allUsers[key].online==true){
    count++
  }
}return count
  // Only change code above this line
}

console.log(countOnline(users));

//20
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend)
return userObj.data.friends
  // Only change code above this line
}
//console.log(user.data.friends)
console.log(addFriend(user, 'Pete'));