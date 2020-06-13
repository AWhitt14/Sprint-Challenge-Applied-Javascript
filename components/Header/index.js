// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const div = document.createElement('div');
    div.classList.add('header');
    const sDate = document.createElement('span');
    sDate.classList.add('date');
    const head = document.createElement('h1');
    const sTemp = document.createElement('span');
    sTemp.classList.add('temp');

    sDate.textContent = 'June 13, 2020';
    head.textContent = 'Lambda Times';
    sTemp.textContent = '98°';

    const par = document.querySelector('.header-container');

    par.appendChild(div);
    div.appendChild(sDate);
    div.appendChild(head);
    div.appendChild(sTemp);

    return div;

}

Header();
