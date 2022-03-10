/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const settings = ({
    el: '#root',
    data: {
        message: 'Hello World',
        srcImg: 'https://picsum.photos/200',
        srcAlt: 'random image',
    }
})

const root = new Vue(settings);