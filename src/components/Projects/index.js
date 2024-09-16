import Loader from 'react-loaders'
import './index.scss'
import { useEffect , useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import image from '../../assets/images/under-construction-img.png'

const Projects = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    
        return () => clearTimeout(timeoutId) // Cleanup function to clear the timeout
    }, []) 

    return(
        <>
        <div className="container projects-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['M','y',' ','P','r','o','j','e','c','t','s']} idx={15} />
                </h1>
                <img src={image} alt="developer" />
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Projects