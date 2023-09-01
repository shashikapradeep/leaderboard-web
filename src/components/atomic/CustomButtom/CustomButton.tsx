import Button, {ButtonProps} from '@mui/material/Button';

interface CustomButtonProps extends ButtonProps {
    label?: string;
}

const CustomButton = ({label, ...args}: CustomButtonProps) => {
    return <Button {...args}>{label}</Button>
};

export default CustomButton;
