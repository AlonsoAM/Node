//https://nodejs.org/api/util.html#util_util_inherits_constructor_superconstructor

'use strict'

let EventEmitter = require('events'),
    inherits = require('util').inherits

let Clock = function () {
    
    let self = this

    setInterval(function () {
        //console.log('Hola')
        self.emit('tictac')
    }, 1000)

}

inherits(Clock, EventEmitter)

Clock.prototype.theTime = function () {

    let date = new Date(),
        hrs = date.getHours(),
        min = date.getMinutes(),
        seg = date.getSeconds(),
        msg = hrs + ':' + min + ':' + seg
    
    console.log(msg)

}

let cucu = new Clock()
cucu.on('tictac', function () {
    cucu.theTime()
})