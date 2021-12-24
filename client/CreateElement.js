function newEl(type, attrs={}) {
    const el = document.createElement(type);
    for (let attr in attrs) {
        const value = attrs[attr];
        if (attr == 'innerText') el.innerText = value;
        else el.setAttribute(attr, value);
    }
    return el;
}

const animes = [
    {name: 'Ranking of Kings', img: "https://"},
    {name: 'Mushoku Tensei', img: "https://"},
    {name: 'ReZero', img: "https://"}
]

const ctr = document.querySelector('.container');

animes.forEach(anime => {
    const card = newEl('div', {class: 'card'});
    const title = newEl('h4', {innerText: anime.name})
    const img = newEl('img', {src: anime.img})
    card.appendChild(title)
    card.appendChild(img)
    ctr.appendChild(card);
})
