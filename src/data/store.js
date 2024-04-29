import { reactive } from "vue";

export const store = reactive({
    isLoading: false,

    footerLinks: [
        {
            title: 'Uniamo le forze',
            links: [
                { url: '#', text: 'Lavora con noi' },
                { url: '#', text: 'DeliveBoo per i Partner' },
                { url: '#', text: 'Corrieri' },
                { url: '#', text: 'Deliveboo Business' }
            ]
        },
        {
            title: 'Link di interesse',
            links: [
                { url: '#', text: 'Chi siamo' },
                { url: '#', text: 'FAQ' },
                { url: '#', text: 'DeliveBoo Prime' },
                { url: '#', text: 'Blog' },
                { url: '#', text: 'Contattaci' },
                { url: '#', text: 'Sicurezza' }
            ]
        },
        {
            title: 'Seguici',
            links: [
                { url: '#', text: 'Facebook' },
                { url: '#', text: 'Twitter' },
                { url: '#', text: 'Instagram' }
            ]
        }
    ],

    topRestaurant: [
        {
            src: '/img/mcdonalds.jpeg',
            label: 'McDonald\'s'
        },
        {
            src: '/img/lovepoke.png',
            label: 'I Love Poke'
        },
        {
            src: '/img/carrefour.jpeg',
            label: 'Carrefour'
        },
        {
            src: '/img/oldwildwest.jpg',
            label: 'Old Wild West'
        },
        {
            src: '/img/sweetlab.png',
            label: 'Sweet Lab'
        },
        {
            src: '/img/kfc.jpeg',
            label: 'KFC'
        },
        {
            src: '/img/burgerking.jpeg',
            label: 'Burger King'
        },
        {
            src: '/img/spontini.png',
            label: 'Spontini'
        },
    ],
})
