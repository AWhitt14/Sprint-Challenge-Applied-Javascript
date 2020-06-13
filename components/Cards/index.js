// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
let dataAll = [];
axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(res => {
    place(res.data.articles);    
})
.catch((er) => {
    console.log(er,'error on cards');
});


    function artCreate(obj){
      
        const card = document.createElement('div');
        card.classList.add('card');
        const headLine = document.createElement('div');
        headLine.classList.add('headline');
        const auth = document.createElement('div');
        auth.classList.add('author');
        const imgCont = document.createElement('div');
        imgCont.classList.add('img-container');
        const img1 = document.createElement('img');
        const byAuth = document.createElement('span');

        headLine.textContent = obj.headline;
        img1.src = obj.authorPhoto;
        byAuth.textContent = obj.authorName;


        
        card.appendChild(headLine);
        card.appendChild(auth);
        auth.appendChild(imgCont);
        imgCont.appendChild(img1);
        card.appendChild(byAuth);

        return card;
    };
function place(obj){
    const carCont = document.querySelector('.cards-container');
    Object.values(obj).forEach(dataAll => {
        dataAll.forEach(e => {
            carCont.appendChild(artCreate(e));
        });
    });
}
    




