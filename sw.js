console.log('SW: hola mundo')


self.addEventListener('install', (event)=>{


    console.log('Service worker instalado')
});

self.addEventListener('activate', (event)=>{


    console.log('Activado y controlando la app')
});

self.addEventListener('fetch', (event)=> {

console.log(event);
if(event.request.url.includes('.jpg')){
    let newResp = fetch('/images/gato.jpg');
    event.respondWith(newResp);
}

if(event.request.url.includes('page.css')){

    let newResponse = new Response(`body{
        background-color:black !important;
        color: red;
    }`,{
    
    headers:{
        'Content-Type':'text/css'
        }
    });

    event.respondWith(newResponse);



}

});

