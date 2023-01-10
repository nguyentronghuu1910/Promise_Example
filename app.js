// 4. Example
var courseApi = 'http://localhost:3000/courses';

function start() {
   getCourses(renderCourses);

   handleCreateForm()
}

start()

// function
function getCourses(callback) {
   fetch(courseApi)
      .then(function (response) {
         return response.json();
      })
      .then(callback)
}

function createCourse(data) {
   var options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
         'Content-Type': 'application/json'
      }
   }
   fetch(courseApi, options)
      .then(function (response) {
         response.json();
      })
      .then(callback)
}
function handleDeleteCourse(id) {
   var options = {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json'
      }
   }
   fetch(courseApi + '/' + id, options)
      .then(function (response) {
         response.json();
      })
      .then(function () {
         var courseItem = document.querySelector('.course-item-' + id);
         if (courseItem) {
            courseItem.remove();
         }
      })
}

function renderCourses(courses) {
   var ListCoursesBlock =
      document.querySelector('#list-courses');
   var htmls = courses.map(function (course) {
      return `
      <li class="course-item-${course.id}">
         <h4>${course.name}</h4>
         <p>${course.description}</p>
         <button onclick="handleDeleteCourse(${course.id})">Delete</button>
      </li>
      `
   });
   ListCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
   var createBtn = document.querySelector('#create');

   createBtn.onclick = function () {
      var name = document.querySelector('input[name="name"]').value;
      var description = document.querySelector('input[name="description"]').value;

      var formData = {
         name,
         description
      }
      createCourse(formData, function () {
         getCourses(renderCourses);
      })
   }
}