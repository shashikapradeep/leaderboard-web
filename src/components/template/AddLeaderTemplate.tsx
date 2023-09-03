import AddLeaderForm, {LeadersDataType} from "../organism/forms/Leader/AddLeaderForm";
import {FormikHelpers} from "formik";

const AddLeaderTemplate = () => {
    const handleOnSubmit = (values: LeadersDataType, props:FormikHelpers<LeadersDataType>) => {
        console.log("Hello", values);
        alert(JSON.stringify(values));
        props.resetForm()
    };

    return <>
        <h1>Add Leader</h1>
        <AddLeaderForm onSubmitHandler={handleOnSubmit}/>
    </>
};

export default AddLeaderTemplate;
