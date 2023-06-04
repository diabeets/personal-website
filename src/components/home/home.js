import { Link } from 'react-router-dom';
import './home.css'
import MyPicture from '../../assets/Untitled.png'
import Resume from '../../assets/JukaiDaiResume.pdf'
import GithubIcon from '../../assets/github-mark.svg'
import LinkedinIcon from '../../assets/linkedin.png'
import EmailIcon from '../../assets/email.png'

function Home(){
    return (
        <>
            <div className='body'>
                <div className='myPic'>
                    <img src={MyPicture} alt="developer" />
                </div>

                <div className='aboutmMe'>
                    <h1 className='hi'>Hi! </h1>
                    <p>
                        I'm a fourth year Computer Engineering student
                        graduating this year at Toronto Metropolitan University. 
                        Currently I'm looking for a full time positions.
                                       
                    </p>

                </div>

                <div className='resume'>

                    <ResumeButton />

                </div>

                <div className='links'>
                    <a href="https://github.com/diabeets" 
                    target='react\jsx-no-target-blank'> 
                    <img src={GithubIcon} alt ="github" className='icon' />
                    </a>

                    <a href="https://www.linkedin.com/in/jukai-dai-17548518b/" 
                    target='react\jsx-no-target-blank' > 
                    <img src={LinkedinIcon} alt ="github" className='icon' />
                    </a>

                    <a href="mailto:juk41@gmail.com"
                    target='react\jsx-no-target-blank' > 
                    <img src={EmailIcon} alt="juk41@gmail.com" className='icon' />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Home;


function ResumeButton() {
    return (
      <div>
        <Link to={Resume} target='react\jsx-no-target-blank'>
          <button className='resumeButton'>resume</button>
        </Link>
      </div>
    );
  }