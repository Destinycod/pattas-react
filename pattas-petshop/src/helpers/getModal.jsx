import { useState } from "react";

const getModal = () =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        handleClose,
        handleShow,
        show
    )
}