
const Checkout = ( {generateOrder}) => {

    const [dataForm, setDataForm] = useState({
        name:"", email:"", phone:""
    });

    const handleChange = (event) => {
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value
        })
    }

    return(
    <form
        onSubmit={generateOrder}
        onChange={handleChange}
    >
        <input
            type='text'
            name='name'
            placeholder='name'
            value={dataForm.name}
        /><br />
        <input
            type='text'
            name='phone'
            placeholder='tel'
            value={dataForm.phone}
        /><br />
        <input
            type='email'
            name='email'
            placeholder='email'
            value={dataForm.email}
        /><br />
        <button id="botonNaranja">Confirmar compra</button>&nbsp;<button onClick={vaciarCarrito} id="botonNaranja">Vaciar carrito</button>
    </form>
    )
}