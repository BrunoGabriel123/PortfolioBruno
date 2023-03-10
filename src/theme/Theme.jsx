import Modal from "../components/Modal"
import { primaryColors, backgroundColors } from "./data"
import PrimaryColor from "./PrimaryColor"
import BackgroundColor from './BackgroundColor';
import './theme.css'

const Theme = () => {
  return (
    <Modal className="theme__modal">
        <h3>Personalize o Site</h3>
        <small>Altere a cor primária e a de fundo de acordo com o seu gosto.</small>
        <div className="theme__primary-wrapper">
            <h5>Cor Pramária</h5>
            <div className="theme__primary-colors">
                {
                    primaryColors.map(pColor => <PrimaryColor key={pColor.className} className={pColor.className}/>)
                }
            </div>
        </div>
        <div className="theme__background-wrapper">
            <h5>Cor de fundo</h5>
            <div className="theme__background-colors">
                {
                    backgroundColors.map(bColor => <BackgroundColor key={bColor.className} className={bColor.className} />)
                }
            </div>
        </div>
    </Modal>
  )
}

export default Theme