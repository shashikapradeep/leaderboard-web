import { createTheme } from '@mui/material';

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
}

export default createTheme({
    palette: {
        mode: 'light',
        info: {
            main: '#566FE6',
            dark: '#EFF2FF',
        },
        success: {
            main: '#16A34A',
            dark: '#E1F7E1',
        },
        error: {
            main: '#ED533A',
            dark: '#FFE7E9',
        },
        warning: {
            main: '#FFBB37',
            dark: '#FFF2E0',
        },
        toastTitle: '#000000',
        toastMessage: '#000000',
        background: {
            default: '#EFF2FF',
            // paper: '#5064F6FF',
        },
        outline: {
            main: 'black',
        },
        code: '#34ae6c',
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
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
            fontFamily: 'Roboto, monospace',
            fontSize: '0.7rem',
            fontWeight: 'normal',
        },
    },
    components: {
        MuiFormControl: {
            defaultProps: {
                fullWidth: true,
                size: 'small',
            },
        },
    },
});
