const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {}
    },

    plugins: [
        require('tailwindcss-themer')({
            themes: [
                {
                    name: 'dark',
                    extend: {
                        colors: {
                            primary: '#E4E4E7',
                            secondary: '#FAFAFA',
                            light: '#D4D4D8',
                            accent: {
                                DEFAULT: '#881337',
                                contrast: '#E4E4E7'
                            }
                        },
                        backgroundColor: {
                            primary: '#27272A',
                            secondary: '#71717A',
                            track: '#3F3F46',
                            accent: {
                                DEFAULT: '#881337',
                                contrast: '#E4E4E7'
                            }
                        },
                        fill: {
                            primary: '#E4E4E7',
                            accent: {
                                DEFAULT: '#881337',
                                contrast: '#E4E4E7'
                            }
                        },
                        boxShadowColor: {
                            primary: '#18181B'
                        },
                        borderColor: {
                            bg: '#27272A',
                            accent: {
                                DEFAULT: '#881337',
                                contrast: '#E4E4E7'
                            }
                        }
                    }
                },
                {
                    name: 'light',
                    extend: {
                        colors: {
                            primary: '#27272A',
                            secondary: '#27272A',
                            light: '#52525B',
                            accent: {
                                DEFAULT: '#BE123C',
                                contrast: '#F4F4F5'
                            }
                        },
                        backgroundColor: {
                            primary: '#E4E4E7',
                            secondary: '#FAFAFA',
                            track: '#6B7280',
                            accent: {
                                DEFAULT: '#BE123C',
                                contrast: '#F4F4F5'
                            }
                        },
                        fill: {
                            primary: '#27272A',
                            accent: {
                                DEFAULT: '#BE123C',
                                contrast: '#F4F4F5'
                            }
                        },
                        boxShadowColor: {
                            primary: '#D4D4D8'
                        },
                        borderColor: {
                            bg: '#E4E4E7',
                            accent: {
                                DEFAULT: '#BE123C',
                                contrast: '#F4F4F5'
                            }
                        }
                    }
                },
                {
                    name: 'bw',
                    extend: {
                        colors: {
                            primary: '#3F3F46',
                            secondary: '#18181B',
                            light: '#71717A',
                            accent: {
                                DEFAULT: '#18181B',
                                contrast: '#F4F4F5'
                            }
                        },
                        backgroundColor: {
                            primary: '#F4F4F5',
                            secondary: '#D4D4D8',
                            track: '#71717A',
                            accent: {
                                DEFAULT: '#18181B',
                                contrast: '#F4F4F5'
                            }
                        },
                        fill: {
                            primary: '#3F3F46',
                            accent: {
                                DEFAULT: '#18181B',
                                contrast: '#F4F4F5'
                            }
                        },
                        boxShadowColor: {
                            primary: '#A1A1AA'
                        },
                        borderColor: {
                            bg: '#F4F4F5',
                            accent: {
                                DEFAULT: '#18181B',
                                contrast: '#F4F4F5'
                            }
                        }
                    }
                }
            ]
        })
    ],

    darkMode: 'class'
};

module.exports = config;
