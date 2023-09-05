import {Button, Grid, TextField} from "@mui/material";
import {Formik, Form, FormikHelpers, ErrorMessage} from 'formik';
import AddLeaderValidations from './AddLeaderFormValidation';
import Stack from '@mui/material/Stack';
import {LeaderDataType, LeaderError} from "../../../../types/leaderboardTypes";
import {useAppSelector} from "../../../../state/hook";
import DisplayFormErrors from "../../../organism/DisplayFormErrors";


export interface AddLeaderFormType {
    onSubmitHandler: (values: LeaderDataType, props: FormikHelpers<LeaderDataType>) => void;
    initialValues?: LeaderDataType;
}

const AddLeaderForm = ({onSubmitHandler, initialValues}: AddLeaderFormType) => {

    const errorLeader = useAppSelector<LeaderError | null>(state => state.leaderboard.errorLeader);

    const initialValue: LeaderDataType = initialValues ?? {
        name: '',
        points: 0,
        age: 0,
        address: ''
    };

    return (
        <Grid container>
            <Grid item xs={12}>
                <h3>Add Leader</h3>
                {
                    (errorLeader?.createLeader) && <DisplayFormErrors errors={errorLeader?.createLeader}/>
                }
                <Formik
                    initialValues={initialValue}
                    validationSchema={AddLeaderValidations}
                    onSubmit={onSubmitHandler}
                >
                    {(props) => {
                        const {name, points, age, address}: LeaderDataType = props.values;
                        return (
                            <Form>
                                <Stack direction={"column"} gap={3}>
                                    <TextField
                                        label="Name"
                                        name="name"
                                        fullWidth
                                        value={name}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={<ErrorMessage name="name"/>}
                                        error={Boolean(props.errors.name && props.touched.name)}
                                        required
                                    />

                                    <TextField
                                        label="Points"
                                        name="points"
                                        fullWidth
                                        value={points}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={<ErrorMessage name="points"/>}
                                        error={Boolean(props.errors.points && props.touched.points)}
                                        required
                                    />

                                    <TextField
                                        label="Age"
                                        name="age"
                                        fullWidth
                                        value={age}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={<ErrorMessage name="age"/>}
                                        error={Boolean(props.errors.age && props.touched.age)}
                                        required
                                    />

                                    <TextField
                                        label="Address"
                                        name="address"
                                        fullWidth
                                        value={address}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={<ErrorMessage name="address"/>}
                                        multiline
                                        rows={5}
                                        error={Boolean(props.errors.address && props.touched.address)}
                                        required
                                    />
                                    <Stack direction="row" justifyContent="end">
                                        <Button type="submit" fullWidth disabled={props.isSubmitting}> Add
                                            Leader </Button>
                                    </Stack>
                                </Stack>
                            </Form>
                        );
                    }}
                </Formik>
            </Grid>
        </Grid>
    );
};

export default AddLeaderForm;
