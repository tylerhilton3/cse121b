/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach( (temple) => {
        const articleElement = document.createElement("article");
        const h3Element = document.createElement("h3");
        const imgElement = document.createElement("img");

        h3Element.textContent = temple.templeName;
        imgElement.setAttribute("src", temple.imageUrl);
        imgElement.setAttribute("alt", temple.location);

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        templesElement.appendChild(articleElement);
    })
};



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');

    templeList = await response.json();

    displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
};

/* sortBy Function */
const sortBy = (temples) => {
    reset();

    const filter = document.getElementById('sortBy').value;
    switch (filter) {
        case 'utah':
            displayTemples(temples.filter((temple) => temple.location.includes('Utah')));
            break;
        case 'nonutah':
            displayTemples(temples.filter((temple) => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
            break;
    }
};


getTemples();

/* Event Listener */
document.getElementById('sortBy').addEventListener('change', () => {
    sortBy(templeList);
});