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
                name: 'Light',
                class: [],
                color: '#ffffff'
            },
            {
                name: 'Dark',
                class: ['dark'],
                color: '#000000',
                default: true
            }
        ]
    }
};
