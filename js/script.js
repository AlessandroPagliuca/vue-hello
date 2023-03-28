const {createApp} = Vue;

createApp({
    data(){
        return{
            title: 'Hello Vue',
            container: 'container d-flex flex-column align-items-center py-5',
            image: 'https://www.viaggi-usa.it/wp-content/uploads/2018/01/best-time-to-visit-california.jpg',
            card: 'card w-25',
        }
    }
}).mount('#app');