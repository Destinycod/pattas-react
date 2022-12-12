import { Formik, Form, Field, ErrorMessage } from "formik"

const Contacto = ({ order, createOrder, handleChange }) => {
    return (
      <Formik
        initialValues={{
          name: "",
          email: "",
          repeatEmail: "",
        }}
        validate={(values) => {
          let errors = {};
  
          if (!values.name) {
            errors.name = "El nombre es requerido";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(values.name)) {
            errors.name = "El nombre debe contener solo letras";
          }
          if (!values.email || !values.repeatEmail) {
            errors.email = "El email es requerido";
            errors.repeatEmail = "El email es requerido";
          } else if ( values.email !== values.repeatEmail) {
            errors.repeatEmail = "Los emails no coinciden";
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
            errors.email = "El email debe ser valido";
          }
          
          return errors;
        }}
        onSubmit={({ resetForm }) => {
          resetForm();
        }}
      >
        {() => (
          <Form
            className="checkoutForm"
            onSubmit={createOrder}
            onChange={handleChange}
          >
            <Field type="text" name="name" id="name" placeholder="Nombre" required/>
            <ErrorMessage name="name" component="p" className="errorInput" />
            <Field
              type="email"
              name="email"
              id="email"
              placeholder="Correo electrónico"
              required
            />
            <ErrorMessage name="email" component="p" className="errorInput" />
            <Field
              type="email"
              name="repeatEmail"
              id="repeatEmail"
              placeholder="Confirma tu correo electrónico"
              required
            />
            <ErrorMessage name="repeatEmail" component="p" className="errorInput" />
            
            <button type="submit" >
              Generar Consulta{" "}
            </button>
          </Form>
        )}
      </Formik>
    );
  };
  
  export default Contacto;