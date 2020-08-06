import axios from 'axios';

const entryPoint = document.querySelector('.cards')
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/lightDarkPhoton')
.then(function successHandler(response) {
  console.log(response)
  //debugger
  const card = githubCardMaker(response)
  entryPoint.appendChild(card)

})

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach (elem => {
  axios.get('https://api.github.com/users/' + `${elem}`)
  .then(function successHandler(response) {
    const card = githubCardMaker(response)
    entryPoint.appendChild(card)
  })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function githubCardMaker(response) {

  // Creating the elements
  const githubCard = document.createElement('div')
  const userImage = document.createElement('image')
  const cardInfo = document.createElement('div')
  const heading = document.createElement('h3')
  const userNameParagraph = document.createElement('p')
  const locationParagraph = document.createElement('p')
  const profileParagraph = document.createElement('p')
  const profileParagraphHyperlink = document.createElement('a')
  const followersParagraph = document.createElement('p')
  const followingParagraph = document.createElement('p')
  const bioParagraph = document.createElement('p')

  // Setting class names, attributes, and text
  githubCard.classList.add('card')
  userImage.src = response.data["avatar_url"]
  cardInfo.classList.add('card-info')
  heading.classList.add('name')
  userNameParagraph.classList.add('username')

  heading.textContent = `${response.data.name}`
  userNameParagraph.textContent = `${response.data.login}`
  locationParagraph.textContent = `Location: ${response.data.location}`
  profileParagraph.textContent = "Profile:"
  profileParagraphHyperlink.setAttribute('href', `${response.data['html_url']}`)
  profileParagraphHyperlink.textContent = `${response.data['html_url']}`
  followersParagraph.textContent = `${response.data.followers}`
  followingParagraph.textContent = `${response.data.following}`
  bioParagraph.textContent = `Bio: ${response.data.bio}`

  // Creating the hierarchy
  githubCard.appendChild(userImage)
  githubCard.appendChild(cardInfo)
  cardInfo.appendChild(heading)
  cardInfo.appendChild(userNameParagraph)
  cardInfo.appendChild(locationParagraph)
  cardInfo.appendChild(profileParagraph)
  profileParagraph.appendChild(profileParagraphHyperlink)
  cardInfo.appendChild(followersParagraph)
  cardInfo.appendChild(followingParagraph)
  cardInfo.appendChild(bioParagraph)

  return githubCard
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
