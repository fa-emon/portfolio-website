import { Link } from "react-router-dom";


const ShowProjects = ({ project }) => {
    const { title, image, description, client_side, server_side, github_client, github_server, skills } = project;

    return (
        <div className="card w-96 bg-black shadow-xl">
            <figure><img className="transform hover:scale-90 transition-transform duration-700 hover:brightness-95 hover:rounded-2xl" src={image} alt="project" style={{ height: '256px', objectFit: 'cover', width: '100%' }} /></figure>
            <div className="card-body">
                <h2 className="card-title text-white primary-font">{title}</h2>
                <p className="text-[#808080] secondary-font">{description}</p>
                <div className="flex justify-between">
                    <button className="btn btn-sm border-none bg-[#090e13] text-white hover:bg-[#808080] hover:text-black primary-font px-[17px]"><Link to={client_side}>Live Link Client</Link></button>

                    <button className="btn btn-sm border-none bg-[#090e13] text-white hover:bg-[#808080] hover:text-black primary-font px-[17px]"><Link to={server_side}>Live Link Server</Link></button>
                </div>
                <div className="flex justify-between">
                    <button className="btn btn-sm border-none bg-[#090e13] text-white hover:bg-[#808080] hover:text-black primary-font"><Link to={github_client}>Client Side Code</Link></button>

                    <button className="btn btn-sm border-none bg-[#090e13] text-white hover:bg-[#808080] hover:text-black primary-font"><Link to={github_server}>Server Side Code</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ShowProjects;