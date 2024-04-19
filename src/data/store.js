import { reactive } from "vue";

export const store = reactive({
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
            src: '',
            label: 'McDonald\'s'
        },
        {
            src: '',
            label: 'I Love Poke'
        },
        {
            src: '',
            label: 'Carrefour'
        },
        {
            src: '',
            label: 'Old Wild West'
        },
        {
            src: '',
            label: 'Sweet Lab'
        },
        {
            src: '',
            label: 'KFC'
        },
        {
            src: '',
            label: 'Ritual'
        },
        {
            src: '',
            label: 'Spontini'
        },
    ]
})
