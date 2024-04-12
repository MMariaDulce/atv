import React from "react"
import ButtonModal from "../ButtonModal/ButtonModal"
import Modal from "../Modal/Modal"
import image2 from '../'
import image3 from '../'


const ContainerModal = ({textButton, textModal}) => {
    const [modal, setModal] = React.useState(false)
    return(
        <>
        <ButtonModal 
        modal={modal}
        setModal={setModal}
        text={textButton}
        img={modal ? image2 : image3}/>
        <Modal 
        modal={modal}
        text={textModal}
        />
        </>
    )
}
export default ContainerModal;