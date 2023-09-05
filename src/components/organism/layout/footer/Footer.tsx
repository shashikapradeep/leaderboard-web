import CopyrightIcon from '@mui/icons-material/Copyright';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export const Footer = () => {
    return <Container>
        <Box my={3}>
            <Typography>Built by Shashika 2023<CopyrightIcon fontSize='small'/></Typography>
        </Box>
    </Container>;
}
