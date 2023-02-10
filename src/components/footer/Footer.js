export default function Footer(){
    return(
        <footer>
            <ul className="contacts-footer">
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/fiona-nicdao221513175luc/">
                    {/* <FontAwesomeIcon icon={faLinkedin}/> */}
                    <i className="footer-icon fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/fiona1nicdao">
                    {/* <FontAwesomeIcon icon={faGithub}/> */}
                    <i className="footer-icon fa-brands fa-github"></i>
                  </a>
              </li>
            </ul>
        </footer>
    )
}