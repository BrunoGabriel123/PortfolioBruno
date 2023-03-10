import AboutImage from '../../assets/eu.jpeg'
import CV from '../../assets/bruno.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" className="eu" />
                </div>
            </div>
            <div className="about__right">
                <h2>Sobre Mim</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                Vivência com HTML, CSS, JAVASCRIPT, REACT, TYPESCRIPT, NEXT e SQL. Possuo capacidade para de suporte nas operações de análise, planejamento, execução de projetos, verificação de documentações, especificações, testes, implantação e manutenção de sistemas computacionais e softwares.Fácil adaptação, foco em resultados, inovação, perfil hands-on, senso de dono, gestão de conflitos, visão estratégica e dinamismo. Capacidade para administrar um volume grande de tarefas, definindo prioridades. Facilidade no trabalho em equipe, bem como no cumprimento de metas e prazos.                </p>

                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About