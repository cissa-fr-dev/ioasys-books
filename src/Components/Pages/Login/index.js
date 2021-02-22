import React from 'react';
import { Formik, Form, Field } from 'formik';
import {
    useHistory
} from 'react-router-dom';

import {
    BackgroundImage,
    Header,
    Input,
    Button,
    Title,
    Content,
    Img,
} from './style.js';
import { auntenticated } from '../../../auth';

export default function Login() {
    const history = useHistory();

    async function handleSubmitForm(values) {
        try {
            const params = {
                email: values.email,
                password: values.password,
            };
            await auntenticated(params)
                .then(() => {
                    history.push('/home');
                })
                .catch(err => err);
        } catch (error) {
            console.log(error);
        };
    };

    return (
        <Formik
            initialValues={{}}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
            }}
            render={otherProps => {
                const {
                    setFieldValue,
                    values,
                } = otherProps;

                return (
                    <BackgroundImage>
                        <Content>
                            <Form style={{ width: '400px' }}>
                                <Header>
                                    <Img />
                                    <Title>Books</Title>
                                </Header>
                                <Field
                                    placeholder="Email"
                                    name="email"
                                    id="email"
                                    onChange={e => {
                                        setFieldValue("email", e.target.value);
                                    }}
                                    value={values.emai}
                                    component={Input}
                                />
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    background: 'rgba(0, 0, 0, 0.32)',
                                    marginTop: '20px',
                                    height: '60px',
                                    borderRadius: '4px',
                                }}>
                                    <Field
                                        placeholder="Password"
                                        name="password"
                                        id="password"
                                        type="password"
                                        onChange={e => {
                                            setFieldValue("password", e.target.value);
                                        }}
                                        value={values.password}
                                        component={Input}
                                    />
                                    <Button
                                        type='submit'
                                        onClick={() => {
                                            handleSubmitForm(values);
                                        }}
                                    >
                                        Entrar
                                       </Button>
                                </div>
                            </Form>
                        </Content>
                    </BackgroundImage>
                )
            }}
        >
        </Formik>
    )
}