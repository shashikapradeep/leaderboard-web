import {errorResponseType} from "../../types/apiDataTypes";
import Typography from "@mui/material/Typography";

type ErrorPropTypes = {
    errors: errorResponseType
}
const DisplayFormErrors = ({errors: {message, result: {errors}}}: ErrorPropTypes) => {
    return <>
        <Typography color={'error'}>{message}</Typography>
        {Object.keys(errors ?? {}).map((key) => <ul>
            <li><Typography color={'error'}>{errors[key]}</Typography></li>
        </ul>)}
    </>
};

export default DisplayFormErrors;
