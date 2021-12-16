import { useContext } from "react"
import { useFormik } from "formik"
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from 'yup'

import { UserContext } from "../contexts/user";
import Container from "../Components/Container";
import Input from "../Components/CreateUser/Input";

const CreateUser = () => {
    const { createUser } = useContext(UserContext)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
            city: '',
            profile_picture: ''
        },
        validationSchema: Yup.object().shape({
            name: Yup.string()
            .required()
            .min(4, "Name is too short"),
            password: Yup.string()
            .required()
            .min(8, "Password is too short")
        }),
        onSubmit: values => {
            values = {
                ...values
            }

            createUser(values)
            .then(reponse => navigate('/'))
            
        }
    })

    return (
        <Container>
            <h1>Create a new user</h1>

            <form onSubmit={formik.handleSubmit}>
                <label>Your name (minimum 4 characters)</label>
                <Input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />

                <label>Choose a password (minimum 8 characters)</label>
                <Input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />

                <label>Your city</label>
                <Input
                    type="text"
                    name="city"
                    placeholder="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                />
                <label>Your profile picture</label>
                <Input
                    type="text"
                    name="profile_picture"
                    placeholder="URL link"
                    value={formik.values.profile_picture}
                    onChange={formik.handleChange}
                />

                <button type="submit">
                    Submit
                </button>
            </form>
        </Container>
    );
};

export default CreateUser;