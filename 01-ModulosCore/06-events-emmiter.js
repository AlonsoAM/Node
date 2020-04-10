//https://es.wikipedia.org/wiki/Observer_(patr%C3%B3n_de_dise%C3%B1o)

'use strict'

let EventEmitter = require('events'),
    pub = new EventEmitter()

pub
    .on('myEvent', (message) => {
        console.log(message)
    })

    .once('myEvent', (message) => {
        console.log('Se emite la primera vez.' + message)
    })

    .emit('myEvent', 'Soy un emisor de eventos.')

pub.emit('myEvent', 'Volviendo a emitir')

// Remover Eventos
//pub.removeAllListeners('myEvent')

pub.emit('myEvent', 'Volviendo a emitir por tercera vez')