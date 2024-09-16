import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useState, useEffect } from 'react';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    
        return () => clearTimeout(timeoutId) // Cleanup function to clear the timeout
    }, []) 

    return (
        <>
        <div className='container about-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','m','e']} idx={15} />
                </h1>
                <p>I am a student at Arizona State University with a passion in
                    Math and Technology. I'm a curious person with lots of
                    initiative and drive.
                </p>
                <p>
                I'm a passionate and driven aspiring software engineer with a
                strong focus on backend development. My journey for coding began
                with competitive programming, where I honed my problem-solving
                skills and developed a deep understanding of data structures
                and algorithms. This experience not only sharpened my technical
                abilities but also fueled my desire to create efficient and
                scalable solutions. I thrive on tackling complex challenges
                and constantly push myself to learn and grow in the ever-evolving
                field of technology.
                </p>
                <p>
                I'm committed to continuously expanding my skill set and staying
                at the forefront of technological advancements to become a
                well-rounded software engineer. My primary focus lies in backend
                development, where I enjoy designing and implementing robust,
                secure, and scalable systems. Whether it's optimizing database
                queries, architecting APIs, or ensuring seamless integration between
                various components, I find immense satisfaction in creating solutions
                that are both powerful and elegant.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About