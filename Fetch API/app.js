document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternalApi);

// Get local text file data
function getText() {
  fetch('test.txt')
  // .then(function(res){
  //   return res.text();
  // })
  .then(res => res.text())
  // .then(function(data) {
  //   document.getElementById('output').innerHTML = data;
  // })
  .then(data => {
      document.getElementById('output').innerHTML = data;
  })
  // .catch(function(err) {
  //  console.log(err)
  // })
  .catch(err => console.log(err))
}

// Get local Json data
function getJson() {
  fetch('posts.json')
  // .then(function(res){
  //   return res.json();
  // })
  .then(res => res.json())
  .then(data => {
    let output = '';
    data.forEach(function(post) {
      output += `<li>${post.title}</li>`
    });
    document.getElementById('output').innerHTML = output;
  })
  // .catch(function(err) {
  //  console.log(err)
  // })
  .catch(err => console.log(err))
}

// Get External Api

function getExternalApi() {
  fetch('https://api.github.com/users')
  // .then(function(res) {
  //   return res.json();
  // })
  .then(res => res.json())
  .then(data => {
    let output = '';
    data.forEach(function(users){
     output += `<li>${users.login}</li>`
    });
    document.getElementById('output').innerHTML = output;
  })
  // .catch(function(err) {
  //   console.log(err)
  // })
  .catch(err => console.log(err))
  
}

