
import './App.css'
import ContainerModal from '../ContainerModal/ContainerModal';

const App = () => {

    const [modal, setModal] = React.useState(false)
    return(
        <section className="container">
            <ContainerModal 
            textButton="Botão1"
            textModal/>
        </section>
    )
}

export default App;