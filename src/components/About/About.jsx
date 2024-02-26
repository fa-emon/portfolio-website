import { useState } from 'react';
import { FaCode } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";

const About = () => {
    const [hoverState, setHoverState] = useState([false, false, false]);

    const handleMouseEnter = (index) => {
        const newHoverState = [...hoverState];
        newHoverState[index] = true;
        setHoverState(newHoverState);
    };

    const handleMouseLeave = (index) => {
        const newHoverState = [...hoverState];
        newHoverState[index] = false;
        setHoverState(newHoverState);
    };

    const gradientStyle = (index) => {
        return {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: '6px',
            background: `linear-gradient(to left, rgba(255, 255, 255, 0), rgba(169, 169, 169, 0.8))`,
            zIndex: 0,
            opacity: hoverState[index] ? 1 : 0,
            transition: 'opacity .1s ease-in-out'
        };
    };

    const data = [
        { title: "Frontend Developer", icon: <FaLaptopCode/>, loremText: "Venturing into frontend development, aiming to craft user-friendly and visually appealing websites.", margin: "", padding: "p-4" },

        { title: "Backend Developer", icon: <FaCode />, loremText: "Starting my exploration in backend development, excited to learn and apply server-side solutions.", margin: "my-6", padding: "" },

        { title: "Photoshop Artist", icon: <SiAdobephotoshop />, loremText: "over 3.5+ year of experiences in this magical field. Absolutely thrilled with the delightful results and it works like a charm!", margin: "", padding: "" },
    ];

    return (
        <div className="w-full flex items-center px-20">
            <div className="w-1/2">
                <h2 className='text-2xl primary-font ms-24' style={{ background: 'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(169, 169, 169, 0.5))', color: 'transparent', display: 'inline', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>ABOUT</h2>
                <img className="w-[300px] h-[400px] rounded-md object-cover mt-4 ms-24" src="https://i.ibb.co/SBsKyjD/left.jpg" alt="" />
            </div>

            <div className="w-1/2">
                {data.map((item, index) => (
                    <div key={index} className={`flex items-center text-white ${item.margin}`}>
                        <span className='text-3xl me-2'>{item.icon}</span>
                        <div className={`p-4 ${item.padding}`} style={{ position: 'relative' }}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            <h2 className='primary-font text-xl' style={{ position: 'relative', zIndex: 1 }}>
                                {item.title}
                            </h2>
                            <div style={gradientStyle(index)}></div>
                            <p className='secondary-font text-[#808080]'>{item.loremText}</p>
                            <p></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
