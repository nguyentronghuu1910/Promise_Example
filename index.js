// var users = [
//    {
//       id: 1,
//       name: 'Kien Dam'
//    },
//    {
//       id: 2,
//       name: 'Son Dang'
//    },
//    {
//       id: 3,
//       name: 'Huu Nguyen'
//    }
//    // ...
// ]
// var comments = [
//    {
//       id: 1,
//       user_id: 1,
//       content: 'Anhh Sơn chưa ra video :('
//    },
//    {
//       id: 2,
//       user_id: 2,
//       content: 'Vừa ra xong em êi!'
//    }
// ]

// // 1. Lấy comments
// // 2. Từ comments lấy ra user_id,
// // từ user_id lấy ra user tương ứng

// // Fake API

// function getComments() {
//    return new Promise(function (resolve) {
//       setTimeout(function () {
//          resolve(comments)
//       }, 1000)
//    })
// }

// function getUsersByIds(userIds) {
//    return new Promise(function (resolve) {
//       var result = users.filter(function (user) {
//          return userIds.includes(user.id)
//       })
//       setTimeout(function () {
//          resolve(result)
//       }, 1000)
//    })
// }
// getUsersByIds([1])
//    .then(function (users) {
//       console.log(users);
//    })

// getComments()
//    .then(function (comments) {
//       var userIds = comments.map(function (comment) {
//          return comment.user_id
//       })
//       return getUsersByIds(userIds)
//          .then(function (users) {
//             return {
//                users,
//                comments
//             }
//          })
//    })
//    .then(function (data) {
//       var commentBlock = document.getElementById('comment-block')
//       var html = '';
//       data.comments.forEach(function (comment) {
//          var user = data.users.find(function (user) {
//             return user.id === comment.user_id
//          });
//          html += `<li>${user.name}: ${comment.content}</li>`;
//       })
//       commentBlock.innerHTML = html;
//    })

// Fetch
// 1.1 Frontend: xây dựng giao diện người dùng
// 1.2 Backend: xây dựng logic xử lý + CSDL

// API (URL) => Application Programing Interface
// Cổng giao tiếp giữa các phần mềm
// BE (OK) => API (URL) => Fetch => JSON/XML
// JSON.parse => JavaScript types

// var postAPI =
//    'https://jsonplaceholder.typicode.com/posts'

// fetch(postAPI)
//    .then(function (response) {
//       return response.json();
//       //JSON.parse: JSON => JavaScript types
//    })
//    .then(function (posts) {
//       var htmls = posts.map(function (post) {
//          return `
//          <li>
//              <h2>${post.title}</h2>
//              <p>${post.body}</p>
//          </li>
//          `
//       })
//       var html = htmls.join('');
//       document.getElementById('post-block').innerHTML = html;
//    })

