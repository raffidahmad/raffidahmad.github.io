import mail from '../images/mailButton.svg'
import linkedin from '../images/LinkedinButton.svg'
import './styles/buttons.css'

export default function Footer() {
    return (
        <div className='buttons'>
            <a href="mailto:raffidahmad@gmail.com" >
                <img style={{paddingLeft: "20px"}}src={mail} alt={"mail button"}  />
            </a>

            <a href="https://www.linkedin.com/in/raffidahmad/" target="_blank">
                <img style={{paddingRight: "20px"}}src={linkedin} alt={"linkedin button"}   />
            </a>
        </div>
    );
}