import './HeroSection.css'
import { Button } from '@chakra-ui/react';

const HeroSection = () => {
    return (
        <div className="w-full flex items-center justify-between px-20 mt-32">
            <div className="w-1/2 ms-20">
                <h2 className='text-6xl primary-font' style={{ background: 'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(169, 169, 169, 0.5))', color: 'transparent', display: 'inline', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
                    Hi, I'm Farhan
                </h2>

                <p className='secondary-font text-[#adadad] w-3/4 my-6 text-justify text-base'>I'm new in the versatile and exploring world of developers. I wanna start my journey and keep learning till the grave. </p>
                <Button className='bg-[#808080] hover:bg-black text-black hover:text-white rounded-full py-4 mt-10 w-[160px]' colorScheme='twitter'>
                    <span className='tracking-wider secondary-font'>Contact Me</span>
                </Button>
            </div>
            <div className="w-1/2">
                <img className="w-[300px] h-[300px] object-cover animate-float mx-auto me-20" src="https://i.ibb.co/wpT9m2H/757.png" alt="" />
            </div>
        </div>
    );
};

export default HeroSection;