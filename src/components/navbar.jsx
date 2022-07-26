import './styles/navbar.css'
function BasicExample(props) {
  return (
    <header className='headNav'>
      <nav className='myNavBar'>
        <ul className="myNavLinks">
          <li><button className="button-74" onClick={props.buttClick}>{props.clicked ? `Education` : `Home`}</button></li>
          <li><button className="button-74" disabled style={{ pointerEvents: "none", opacity: "0.3" }}>Experience</button></li>
          <li><a href="https://github.com/raffidahmad" target="_blank"><button className="button-74">Projects</button></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default BasicExample;