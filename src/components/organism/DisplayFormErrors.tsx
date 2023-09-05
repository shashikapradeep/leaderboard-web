import {errorResponseType} from "../../types/apiDataTypes";
import Typography from "@mui/material/Typography";

type ErrorPropTypes = {
    errors: errorResponseType
}
const DisplayFormErrors = ({errors: {message, result: {errors}}}: ErrorPropTypes) => {
    return <>
        <Typography>{message}</Typography>
        {Object.keys(errors ?? {}).map((key) => <Typography>{errors[key]}</Typography>)}
    </>
};

export default DisplayFormErrors;
