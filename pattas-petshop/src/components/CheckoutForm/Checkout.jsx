
// const Checkout = ( {generateOrder}) => {

//     const [dataForm, setDataForm] = useState({
//         name:"", email:"", phone:""
//     });

//     const handleChange = (event) => {
//         setDataForm({
//             ...dataForm,
//             [event.target.name]: event.target.value
//         })
//     }

//     return(
//     <form
//         onSubmit={generateOrder}
//         onChange={handleChange}
//     >
//         <input
//             type='text'
//             name='name'
//             placeholder='name'
//             value={dataForm.name}
//         /><br />
//         <input
//             type='text'
//             name='phone'
//             placeholder='tel'
//             value={dataForm.phone}
//         /><br />
//         <input
//             type='email'
//             name='email'
//             placeholder='email'
//             value={dataForm.email}
//         /><br />
//         <button id="botonNaranja">Confirmar compra</button>&nbsp;<button onClick={vaciarCarrito} id="botonNaranja">Vaciar carrito</button>
//     </form>
//     )
// }



import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Formik, ErrorMessage } from 'formik';
import { useCartContext } from '../../context/CartContext/CartContext';



function Checkout({ send, change }) {

    const { dataForm } = useCartContext();

    return (
        <>
            <Formik
                validate={() => {
                    let error = {};

                    if (!dataForm.name) {
                        error.name = 'Ingresa un nombre';
                    } else if (dataForm.name.length < 3) {
                        error.name = 'Nombre inválido';
                    }

                    if (!dataForm.email) {
                        error.email = 'Ingresa un email, nos comunicamos por este medio';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(dataForm.email)) {
                        error.email = 'Email inválido';
                    }

                    return error;
                }}
                >
                {({ handleBlur, isValid }) => (
                    <Form onChange={change}>
                        <Row>
                            <Form.Group className="mb-3 w-50">
                                <Form.Label htmlFor="name">Nombre</Form.Label>
                                <Form.Control 
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Ej: Nombre Apellido"
                                    required
                                    defaultValue={dataForm.name}
                                    onBlur={handleBlur} />
                                <ErrorMessage name="name" component="span" className="validate--error" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3 w-50">
                                <Form.Label htmlFor="email">Email</Form.Label>
                                <Form.Control 
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Ej: nombre@ejemplo.com"
                                    required
                                    defaultValue={dataForm.email}
                                    onBlur={handleBlur} />
                                <ErrorMessage name="email" component="span" className="validate--error" />
                            </Form.Group>
                            <Form.Group className="mb-3 w-50">
                                <Form.Label>Confirmación Email</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    name="emailConfirm"
                                    placeholder="Ej: nombre@ejemplo.com"
                                    required
                                    defaultValue={dataForm.emailConfirm}
                                    onBlur={handleBlur} />
                            </Form.Group>
                        </Row>
                        <button type="submit" disabled={ dataForm.name === '' || dataForm.email === '' || dataForm.email !== dataForm.emailConfirm ? true : false || isValid === false } onClick={send} className="btn--checkout w-100">
                            Generar orden
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default Checkout;