import twitter from '../../images/twitter.svg'
import facebook from '../../images/fb.svg'
import github from '../../images/github.svg'
import instagram from '../../images/insta.svg'
import '../styles/footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className='iner'> 

            <a href="https://twitter.com/raffidahmad" target="_blank">
                <img src={twitter} alt={"twitter logo"} width="30px" height="30px" />
            </a>

            <a href="https://www.facebook.com/mistaraffid/" target="_blank">
                <img src={facebook} alt={"facebook logo"} width="30px" height="30px" />
            </a>

            <a href="https://www.instagram.com/raffid._ahmad/" target="_blank">
                <img src={instagram} alt={"instagram logo"} width="30px" height="30px" />
            </a>

            <a href="https://github.com/raffidahmad" target="_blank">
                <img style={{paddingRight:'30px'}}src={github} alt={"github logo"} width="30px" height="30px" />
                
            </a>
            </div>
        </div>
    );
}