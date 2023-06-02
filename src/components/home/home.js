import './home.css'
import MyPicture from '../../assets/Untitled.png'

function Home(){
    return (
        <>
            <div className='body'>
                <div className='myPic'>
                    <img src={MyPicture} alt="developer" />
                </div>

                <div className='aboutmMe'>
                    <h1 className='Hi'>Hi </h1>
                    <p>
                        I'm a fourth year Computer Engineering student
                        graduating this year at Toronto Metropolitan University. 
                        Currently I'm looking for a full time positions.
                        
                        
                    </p>

                </div>
                <div className='links'>
                    <a href="https://github.com/diabeets"> github</a>
                </div>
            </div>
        </>
    )
}

export default Home;