import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Contacto = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className="container contContacto">
			<div className="row">
				<div className="col-lg-12 col-xs-12 paddingRL">
					<h1 className="tituloContacto">
						<div>
							<img className="img-fluid" src="./src/assets/images/dejaTuConsulta.jpg" alt="Mascotas"/>
						</div>
						<div>
							¡Dejanos tu consulta!
						</div>
					</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12 col-xs-12">
					<form id="formularioContacto">
						<div className="form-group">
							<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
						</div>
						<div className="form-group">
							<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre"/>
						</div>
						<div className="recibirCon"><input type="checkbox" name="acepta" value="1"/>&nbsp;¿Desea recibir un mail con su consulta?</div><br/>
						<div className="form-group">
							<textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
						</div>
						<button type="send" className="boton--enviar" value="Enviar" onClick={() => handleShow}>
						</button>&nbsp;
						<input className="boton--resetear" type="reset" value="Resetear"/>
					</form>
				</div>
			</div>

			{/* <!-- MODAL DE FORMULARIO--> */}
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>¡Muchas gracias por contactarte con nosotros!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>En los próximos dias estaremos comunicandonos con vos.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>handleClose}>Cerrar</Button>
                </Modal.Footer>
            </Modal.Dialog>

		</div>
    )
}

export default Contacto;