

if(navigator.serviceWorker){
    console.log('Service Worker Disponible')
    navigator.serviceWorker.register('/sw.js')
}else{
    console.log('Service Worker no disponible')
}