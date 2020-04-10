/* Single Thread */

'use strict'

function singleThread() {

    process.argv[2] = "Alonso Anchante"
    process.argv[3] = 25
    process.argv[4] = null
    process.argv[5] = true

    console.log('-------------------------------------')
    console.log('       EL PROCESO DE NODE.NodeJS     ')
    console.log('Id del proceso .......... ' + process.pid)
    console.log('Título .................. ' + process.title)
    console.log('Directorio de Node ...... ' + process.execPath)
    console.log('Directorio actual ....... ' + process.cwd())
    console.log('Versión de Node ......... ' + process.version)
    console.log('Versiones Dependencias .. ' + process.versions)
    console.log('Plataforma (S.O.) ....... ' + process.platform)
    console.log('Arcquitectura (S.O.) .... ' + process.arch)
    console.log('Tiempo activo de node ... ' + process.uptime())
    console.log('Argumentos del proceso .. ' + process.argv)
    console.log('-------------------------------------')

    for (const key in process.argv) {
        if (process.argv.hasOwnProperty(key)) {
            const el = process.argv[key];
            console.log(el)
        }
    }
    
}

singleThread()