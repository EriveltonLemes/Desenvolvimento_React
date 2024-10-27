import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormularioEmail = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        
        //valida se o campo do e-mail está vazio e 
        //retorna mensagem de alerta caso estiver vazio
        validationSchema: Yup.object({
            email: Yup.string()
                .email('')
                .required('O endereço de e-mail é obrigatório'),
        }),
        
        //Retorno da validação se o endereço é válido
        onSubmit: values => {
            alert(`E-mail válido: ${values.email}`);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <h1>Teste de validação de e-mail</h1>
                <label htmlFor="email">E-mail: </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
            </div>

            <button type="submit">Enviar</button>
        </form>
    );
};

export default FormularioEmail;