import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="pt-32">
            <div className="flex items-center justify-center">
                <div>
                    <h2 className='text-4xl primary-font ms-24' style={{ background: 'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(169, 169, 169, 0.5))', color: 'transparent', display: 'inline', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>CONTACT</h2>
                </div>
                <div>
                    <div className="flex items-center justify-center">
                        <IoMail className="text-2xl text-white"></IoMail>
                        <p className="text-[#808080] ms-4">farhanfarabiemon@gmail.com</p>
                    </div>
                    <div className="flex items-center justify-center my-4">
                        <FaLinkedin className="text-2xl text-white ms-36"></FaLinkedin>
                        <p className="text-[#808080] ms-4">https://www.linkedin.com/in/farhan-ahmed-emon/</p>
                    </div>
                    <div className="flex items-center justify-center gap-8">
                        <FaGithub className="text-2xl text-white"></FaGithub>
                        <p className="text-[#808080]">https://github.com/fa-emon</p>
                    </div>
                </div>
            </div>
            <p className=" text-[#808080] text-center secondary-font mt-10">Copyright © {currentYear} , portfolio</p>
        </div>
    );
};

export default Footer;