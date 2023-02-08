import { useState } from 'react'
import Modal from 'react-modal'

const ModalButton = () => {
    const [modalBoolean, setModalBoolean] = useState(false)
    return (
        <>

            <button onClick={() => setModalBoolean(true)}>Upload Gif</button>
            <Modal
            isOpen={modalBoolean}
            onRequestClose={modalBoolean}
            >
                <h1>HOLA</h1>
            </Modal>
        </>
    )
}

export default ModalButton