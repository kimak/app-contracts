export const defaultTheme = {
    colors: {
        primary: '#0042da',
        secondary: '#9399ac',
        third: '#f6f7fc',
        white: '#FFFFFF',
        black: '#000000',
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    radii: {
        s: 8,
        m: 16,
    },
    shadows: {
        s: {
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowOffset: { width: 0, height: 5 },
            shadowRadius: 15,
            elevation: 5,
        },
    },
}

export type Color = keyof typeof defaultTheme.colors
