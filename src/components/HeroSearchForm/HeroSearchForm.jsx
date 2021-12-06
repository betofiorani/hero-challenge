import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { Form, Container, Button, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

const HeroSearchForm = ({formClases,formGroupClases,formLabelClases, heroSearchOnSubmitHandler}) => {

    return (
        <Formik
            initialValues={{ heroName: '' }}
            validationSchema={
                Yup.object({
                    heroName: Yup.string().required('Debes colocar al menos 1 caracter'),
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    console.log("desde submitform",values)
                    heroSearchOnSubmitHandler(values)
                    setSubmitting(false);
                }}>
            {formik => (
                <Container className="search-container">
                    <Row className="justify-content-md-center">
                        <Col>
                            <Form className={`${formClases}`} onSubmit={formik.handleSubmit}>
                                <div className="flex space-between">
                                    <Col xs={10}>
                                        <Form.Group className={`${formGroupClases}`} controlId="heroName">
                                            <Form.Control 
                                                type="text" 
                                                placeholder="search Hero o Villain" 
                                                name="heroName" 
                                                {...formik.getFieldProps('heroName')}/>
                                            <Form.Text className="text-muted">
                                                {formik.touched.heroName && formik.errors.heroName ? <p className="form-error text-left font-bold">{formik.errors.heroName}</p> : null}
                                            </Form.Text>
                                        </Form.Group>
                                    </Col>
                                    <Col className="flex justify-end">
                                        <Button variant="primary" type="submit">
                                            Search
                                        </Button>
                                    </Col>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            )}
        </Formik>
    )
}

HeroSearchForm.propTypes = {
    heroSearchOnSubmitHandler: PropTypes.func.isRequired,
}

export default HeroSearchForm
