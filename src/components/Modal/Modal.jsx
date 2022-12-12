
const Modal = ( {title, body} ) =>{
    const (show, handleClose) = getModal(false);
    return(
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title> {title} {/*¡Muchas gracias por contactarte con nosotros!*/}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p> {body} {/*En los próximos dias estaremos comunicandonos con vos.*/}</p> 
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}

export default Modal;