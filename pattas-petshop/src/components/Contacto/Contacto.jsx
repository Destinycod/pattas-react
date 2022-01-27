// import { useState } from "react";
// import { Button, Modal } from "react-bootstrap";
// import ContactForm from "../ContactForm/ContactForm";

// const Contacto = () => {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

    // return(
    //     <div className="container contContacto">
	// 		<div className="row">
	// 			<div className="col-lg-12 col-xs-12 paddingRL">
	// 				<h1 className="tituloContacto">
	// 					<div>
	// 						<img className="img-fluid" src="./src/assets/images/dejaTuConsulta.jpg" alt="Mascotas"/>
	// 					</div>
	// 					<div>
	// 						¡Dejanos tu consulta!
	// 					</div>
	// 				</h1>
	// 			</div>
	// 		</div>
	// 		<div className="row">
	// 			<div className="col-lg-12 col-xs-12">
	// 				<form id="formularioContacto">
	// 					<div className="form-group">
	// 						<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
	// 					</div>
	// 					<div className="form-group">
	// 						<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre"/>
	// 					</div>
	// 					<div className="recibirCon"><input type="checkbox" name="acepta" value="1"/>&nbsp;¿Desea recibir un mail con su consulta?</div><br/>
	// 					<div className="form-group">
	// 						<textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
	// 					</div>
	// 					<button type="send" className="boton--enviar" value="Enviar" onClick={() => handleShow}>
	// 					</button>&nbsp;
	// 					<input className="boton--resetear" type="reset" value="Resetear"/>
	// 				</form>
	// 			</div>
	// 		</div>

	// 		{/* <!-- MODAL DE FORMULARIO--> */}
    //         <Modal.Dialog>
    //             <Modal.Header closeButton>
    //                 <Modal.Title>¡Muchas gracias por contactarte con nosotros!</Modal.Title>
    //             </Modal.Header>

    //             <Modal.Body>
    //                 <p>En los próximos dias estaremos comunicandonos con vos.</p>
    //             </Modal.Body>

    //             <Modal.Footer>
    //                 <Button variant="secondary" onClick={()=>handleClose}>Cerrar</Button>
    //             </Modal.Footer>
    //         </Modal.Dialog>

	// 	</div>
    // )
// import { useForm } from "../../helpers/useForm";

// const initialForm = {
//     name:"",
//     email:"",
//     comments:"",
// };
// const validationsForm = (form) =>{
//     let errors={};
//     let regexName=/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
//     let regexEmail=/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
//     let regexComments=/^.{1,255}$/;

//     if(!form.name.trim()){
//         errors.name='El campo "Nombre" es obligatorio'
//     }
//     else if(!regexName.test(form.name.trim())){
//         errors.name="Solo se permiten letras y espacios"
//     }

//     if(!form.email.trim()){
//         errors.email="El campo 'Email' es obligatorio"
//     }
//     else if(!regexEmail.test(form.email.trim())){
//         errors.email="Usted está usando caracteres válidos"
//     }

//     if(!form.comments.trim()){
//         errors.comments='El campo "Comentarios" es obligatorio'
//     }
//     else if(!regexComments.test(form.coments.trim())){
//         errors.comments="El límite de caracteres es de 255"
//     }

//     return errors;
// };

// const Contacto = () =>{

//     const{
//         form, errors, handleChange, handleBlur, handleSubmit
//     } = useForm(initialForm, validationsForm);

//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                 type="text"
//                 name="name"
//                 placeholder="Escriba su nombre"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={form.name}
//                 required
//                 />
//                 {errors.name && <p>{errors.name}</p>}
//                 <input
//                 type="email"
//                 name="email"
//                 placeholder="Escriba su email"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={form.email}
//                 required
//                 />
//                 {errors.email && <p>{errors.email}</p>}
//                 <textarea 
//                 name="comments" 
//                 cols="30" rows="10" 
//                 placeholder="Escriba su comentario"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={form.comments}
//                 required></textarea>
//                 {errors.comments && <p>{errors.comments}</p>}
//                 <input type="submit" value="Enviar"/>
//             </form>
//         </div>
//     )

// }

// export default Contacto;



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
              Generar Orden{" "}
            </button>
          </Form>
        )}
      </Formik>
    );
  };
  
  export default Contacto;