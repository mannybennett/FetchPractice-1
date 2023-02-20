let arrayOfPosts;

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function() {
  getPosts()
}

const checkFetch = (response) => {
  if (!response.ok) {
    throw Error(`${response.statusText} - ${response.url}`)
  }
  return response
}

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  fetch('http://jsonplaceholde.typicode.com/posts')
    .then(checkFetch)
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)
    .catch(error => {
      console.log("Error")
      console.log(error)
    })
}

// const getPosts = () => {
//   fetch('http://jsonplaceholde.typicode.com/posts')
//   .then(res => {
//     if(!res.ok) {
//       throw Error(res.statusText)
//     } return res.json()
//   })
//   .then(posts => arrayOfPosts = posts)
//   .catch(err => console.log(`Error,  ${err}`))
// }

const newPost = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    userId: 1,
    title: 'occaecati omnis',
    body: 'amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(res => res.json())
  .then(newPost => console.log(newPost));
}

const editPost = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(res => res.json())
  .then(edit => console.log(edit));
}

const fetchFivePosts = () => {
  const fivePosts = arrayOfPosts.slice(0, 5)
  displayPost(fivePosts)
}

const fetchComments = (arr) => {
  const allPosts = document.getElementById('all-posts')
  allPosts.innerHTML = ''
  let comments = arr.map(post => uniqueUsers = post.body)
  comments.map(com => {
    const li = document.createElement('li')
    const text = document.createTextNode(`Comment: ${com}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}

const fetchUsers = (arr) => {
  const allPosts = document.getElementById('all-posts')
  allPosts.innerHTML = ''
  let uniqueUsers;
  let uniqueSet = new Set(arr.map(post => uniqueUsers = post.userId))
  uniqueUsers = Array.from(uniqueSet)
  uniqueUsers.map(user => {
    const li = document.createElement('li')
    const text = document.createTextNode(`User: ${user}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}

// This function logs the results in your browser's console
const consolePosts = () => {
  console.log(arrayOfPosts)
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPost = (arr) => {
  const allPosts = document.getElementById('all-posts')
  allPosts.innerHTML = ''
  arr.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}

/* 
Your job now is to follow the functions above and use them as templates 
 to build the functionality the buttons in the index.html file already 
 have laid out in it. This way you can learn how to build fetch requests 
 and work with other APIs and become a real developer!! 
*/