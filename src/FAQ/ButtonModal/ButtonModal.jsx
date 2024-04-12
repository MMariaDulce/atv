const ButtonModal = ({text, setModal, modal}) => {
    return(
        <button onClick={() => setModal(!modal)}>{text}{img}</button>
    )
}

export default ButtonModal;