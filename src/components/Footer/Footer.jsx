import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="pt-32">
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
            <p className=" text-[#808080] text-center secondary-font mt-10">Copyright © {currentYear} , portfolio</p>
        </div>
    );
};

export default Footer;