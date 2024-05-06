import { reactive } from "vue";

export const store = reactive({
    isLoading: false,

    checkout: false,

    cart: [],

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
})
