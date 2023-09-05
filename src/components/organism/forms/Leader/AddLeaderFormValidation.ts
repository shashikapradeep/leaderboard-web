import * as yup from "yup";
import {MIN_POINTS, MAX_POINTS, MIN_AGE, MAX_AGE} from "../../../../configs/constants";

const AddLeaderFormValidation = yup.object().shape({
    name: yup
        .string()
        .min(3, "Name is too Short")
        .max(30, "Name is too Long")
        .required("Name is required"),

    points: yup
        .number().typeError('Points must be a number')
        .min(MIN_POINTS, "Points can not be lower than " + MIN_POINTS)
        .max(MAX_POINTS, "Points can not be higher than " + MAX_POINTS)
        .required("Points is required"),

    age: yup
        .number().typeError('Age must be a number')
        .min(MIN_AGE, "Age can not be lower than " + MIN_AGE)
        .max(MAX_AGE, "Age can not be higher than " + MAX_AGE)
        .required("Age is required"),

    address: yup
        .string()
        .min(3, "Address is too Short")
        .max(300, 'Address is too long' )
        .required("Address is required")
});

export default AddLeaderFormValidation;
