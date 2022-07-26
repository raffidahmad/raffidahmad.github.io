import pfp from '../../images/pfp2.jpg'
import '../styles/pic.css'
export default function Picture() {
    return (
        <div>
        <img src={pfp} alt={"pfp"} className="pic"/>
        </div>
    );
}