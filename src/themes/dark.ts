import { createTheme } from '@mui/material';

// Add custom theme properties
declare module '@mui/material/styles' {
    interface Palette {
        outline: Palette['primary'];
        code: string;
        toastTitle: string;
        toastMessage: string;
    }

    interface PaletteOptions {
        outline?: PaletteOptions['primary'];
        code: string;
        toastTitle: string;
        toastMessage: string;
    }

    interface TypographyVariants {
        code: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        code: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        code: true;
    }
}

export default createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#5F7BFF',
        },
        secondary: {
            main: '#905cd1',
        },
        info: {
            main: '#5B71D6',
            dark: '#1D254D',
        },
        success: {
            main: '#16A34A',
            dark: '#0B411F',
        },
        error: {
            main: '#ED533A',
            dark: '#3B0B0F',
        },
        warning: {
            main: '#FFBB37',
            dark: '#472F0F',
        },
        toastTitle: '#FFFFFF',
        toastMessage: '#FFFFFF',
        divider: '#2D3A91',
        background: {
            default: '#0A0F28',
            // paper: '#0E1542',
        },
        text: {
            primary: '#ffffff',
            secondary: '#000000',
            disabled: 'rgba(#fff, 0.5)',
        },
        action: {
            disabled: '#98a3d6',
        },
        outline: {
            main: '#5F7BFF',
        },
        code: '#34ae6c',
    },
    typography: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 12,
        h1: { fontSize: '3.325rem', fontWeight: 700 },
        h2: { fontSize: '1.825rem', fontWeight: 700 },
        h3: { fontFamily: 'Roboto', fontSize: '48px', fontStyle: 'normal', fontWeight: 400, lineHeight: '116.7%' },
        h4: { fontSize: '1.075rem', fontWeight: 700 },
        h5: { fontFamily: 'Roboto', fontSize: '24px', fontStyle: 'normal', fontWeight: 400, lineHeight: '133.4%' },
        h6: {
            fontFamily: 'Roboto',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '160%',
            letterSpacing: '0.15px',
        },
        body1: {
            fontFamily: 'Roboto',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '150%',
            letterSpacing: '0.15px',
        },
        body2: {
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '143%',
            letterSpacing: '0.17px',
        },
        caption: { fontFamily: 'Roboto', fontSize: '12px', fontWeight: 400, fontStyle: 'normal', lineHeight: '166%' },
        subtitle1: {
            fontFamily: 'Roboto',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '175%',
            letterSpacing: '0.15px',
        },
        subtitle2: {
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '157%',
            letterSpacing: '0.1px',
        },
        code: {
            fontFamily: 'Robono, monospace',
            fontSize: '0.7rem',
            fontWeight: 'normal',
        },
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontWeight: 700,
                },
            },
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    fontWeight: 700,
                },
            },
        },
        MuiFormControl: {
            defaultProps: {
                fullWidth: true,
                size: 'small',
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: ({ theme }) => ({
                    borderColor: theme.palette.outline.main,
                }),
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: ({ theme }) => ({
                    background: theme.palette.background.paper,
                }),
            },
        },
    },
});
