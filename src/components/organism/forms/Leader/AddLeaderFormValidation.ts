import * as yup from "yup";
import {MIN_POINTS, MAX_POINTS, MIN_AGE, MAX_AGE} from "../../../../configs/constants";

const AddLeaderFormValidation = yup.object().shape({
    name: yup
        .string()
        .min(3, "Name is too Short")
        .max(30, "Name is too Long")
        .required("Name is required"),

    points: yup
        .number()
        .min(MIN_POINTS, "Points can not be lower than " + MIN_POINTS)
        .max(MAX_POINTS, "Points can not be higher than " + MAX_POINTS),

    age: yup
        .number()
        .min(MIN_AGE, "Age can not be lower than " + MIN_AGE)
        .max(MAX_AGE, "Age can not be higher than " + MAX_AGE)
        .required(),

    address: yup
        .string()
        .min(3, "Address is too Short")
        .max(300, 'Address is too long' )
        .required()
});

export default AddLeaderFormValidation;
