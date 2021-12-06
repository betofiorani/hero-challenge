import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import { Form, Container, Button, Row, Col } from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup';
import PropTypes from 'prop-types'
import useAuth from '../../hooks/useAuth'

const Login = ({formClases, formGroupClases, formLabelClases, formCheckClases}) => {

    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    
    return (
        <Formik
            initialValues={{ userControl: '', passwordControl: '', sessionControl: '' }}
            validationSchema={
                Yup.object({
                    userControl: Yup.string().email('La dirección de E-mail debe ser válida').required('El campo Usuario es requerido'),
                    passwordControl: Yup.string()
                    .max(20, 'No debe tener más de 20 caracteres')
                    .required('La Contraseña es requerida'),
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    await auth.login(values);
                    setSubmitting(false);
                    navigate(location.state ?location.state.from.pathname : '/team')
            }}>
            {formik => (
                <Container className="login-container">
                    <Row>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col lg="6" md="8" sm="12">
                            <Form className={`${formClases}`} onSubmit={formik.handleSubmit}>
                                <Row>
                                    <Form.Group className={`${formGroupClases}`} controlId="userControl">
                                        <Form.Label className={`${formLabelClases}`}>Usuario</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Ingrese su mail" 
                                            name="userControl" 
                                            {...formik.getFieldProps('userControl')}/>
                                        <Form.Text className="text-muted">
                                            {formik.touched.userControl && formik.errors.userControl ? <p className="form-error text-left font-bold">{formik.errors.userControl}</p> : null}
                                        </Form.Text>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group className={`${formGroupClases}`} controlId="passwordControl">
                                        <Form.Label className={`${formLabelClases}`}>Contraseña</Form.Label>
                                        <Form.Control 
                                            type="password" 
                                            placeholder="Ingrese su contraseña" 
                                            name="passwordControl"
                                            {...formik.getFieldProps('passwordControl')}/>
                                        <Form.Text className="text-muted">
                                            {formik.touched.passwordControl && formik.errors.passwordControl ? <p className="form-error text-left font-bold">{formik.errors.passwordControl}</p> : null}
                                        </Form.Text>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group className="mb-3" controlId="sessionControl">
                                        <Form.Check 
                                            className={`${formCheckClases}`} 
                                            type="checkbox" 
                                            label="Recordarme en este equipo" 
                                            {...formik.getFieldProps('sessionControl')}/>
                                    </Form.Group>
                                </Row>
                                <Button variant="primary" type="submit">
                                    Ingresa a tu equipo
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            )}
        </Formik>
    )
}

Login.propTypes = {
    formCheckClases: PropTypes.string,
    formClases: PropTypes.string,
    formGroupClases: PropTypes.string,
    formLabelClases: PropTypes.string,
}

export default Login
