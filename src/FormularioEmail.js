import React from 'react';
import { useFormik } from 'formik';

/*Passa os valores iniciais do formulário do gancho useFormik() 
  e uma função de envio que será chamada quando o formulário 
  for enviado para teste*/
const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  //formulário de texto configurado para identificar endereços de e-mail já digitados no campo
  //e botão de envio dos e-mail digitado para validação
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};