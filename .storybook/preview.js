export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    themes: {
        clearable: false,
        list: [
            {
                name: 'Dark',
                class: ['dark'],
                color: '#000000',
                default: true
            },
            {
                name: 'Light',
                class: ['light'],
                color: '#ffffff'
            },
            {
                name: 'Grayscale',
                class: ['bw'],
                color: '#000000'
            },
            {
                name: 'Sky Blue',
                class: ['sky'],
                color: '#ffffff'
            },
            {
                name: 'Neon',
                class: ['neon'],
                color: '#ffffff'
            },
        ]
    },
    backgrounds: {
        default: 'primary',
        values: [
            {
                name: 'primary',
                value: 'rgb(var(--backgroundColor-primary))'
            }
        ],
    }
};
