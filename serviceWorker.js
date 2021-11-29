if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('Registro exitoso de serviceWorker', reg))
    .catch(err => console.warn('Error al tratar de registrar el SW ', err))
}