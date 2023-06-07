import { Link } from 'react-router-dom';
import './home.css'
import MyPicture from '../../assets/IMG_0518.jpg'
import Resume from '../../assets/JukaiDaiResume.pdf'
import GithubIcon from '../../assets/github-mark.svg'
import LinkedinIcon from '../../assets/linkedin.png'
import EmailIcon from '../../assets/email.png'

function Home(){
    return (
        <>
            <div className='body'>

                <img src={MyPicture} alt="developer" className='myPic' />

                <h1>Jukai Dai</h1>

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

                <div className='resume'>
                    <ResumeButton />
                </div>                         

                <div className='aboutMe'>
                    <h2 className='hi'>  About Me</h2>
                    <p>
                    Hello, I'm a fourth-year Computer Engineering student graduating this year from Toronto Metropolitan University. 
                    Currently, I'm looking for a full-time position. Some interests and courses I have taken are computer architecture, 
                    embedded systems, machine learning, and app and web development.
                        
                    </p>

                    <p>
                    Outside of school, I enjoy playing video games especially competitive team-based games and puzzle games,
                     I find playing video games allows me to apply my creative side by solving problems as a team and exploring different play styles.
                    </p>

                    <p>I also create personal projects in my own time to futher learn and expand my 
                        skillset, you can view my projects in my github page. 
                    </p>

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