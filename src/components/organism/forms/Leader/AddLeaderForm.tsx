import {Box, Button, Grid, Paper, TextField} from "@mui/material";
import {Formik, Form, FormikHelpers, ErrorMessage} from 'formik';
import AddLeaderValidations from './AddLeaderFormValidation';

export interface LeaderDataType {
    name: string,
    age: number,
    points: number,
    address: string,
}

const AddLeaderForm = ({onSubmitHandler, initialValues}: any) => {
    const initialValue: LeaderDataType = initialValues ?? {
        name: '',
        points: 0,
        age: 0,
        address: ''
    };

    return (
        <Grid container>
            <Grid item sm={6} xs={12}>
                <Paper>
                    <Box m={5} p={3}>
                        <Formik
                            initialValues={initialValue}
                            validationSchema={AddLeaderValidations}
                            onSubmit={onSubmitHandler}
                        >
                            {(props) => {
                                console.log("Props", props);
                                const {name, points, age, address}: LeaderDataType = props.values;
                                return (
                                    <Form>
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
                                        <Button type="submit" fullWidth disabled={props.isSubmitting}> Add
                                            Leader </Button>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default AddLeaderForm;
