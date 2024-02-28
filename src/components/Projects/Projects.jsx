import { useEffect, useState } from "react";
import ShowProjects from "./ShowProjects";


const Projects = () => {
    const [projects, setProjects] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/projects.json')
                const data = await res.json();
                setProjects(data);
            }
            catch (error) {
                console.log("Error fetching data:", error)
            }
            finally {
                setLoading(false);
            }
        }

        // Call fetchData directly in the component body
        fetchData();
    }, [])

    return (
        <>
            <div className="mt-32">
                <h2 className='text-2xl primary-font ms-24' style={{ background: 'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(169, 169, 169, 0.5))', color: 'transparent', display: 'inline', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>PROJECTS</h2>

                {
                    loading ? <>
                        <span className="loading loading-ring loading-xs"></span>
                        <span className="loading loading-ring loading-sm"></span>
                        <span className="loading loading-ring loading-md"></span>
                        <span className="loading loading-ring loading-lg"></span>
                    </>
                        :
                        <>
                            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-10 px-20 mt-6">
                                {
                                    projects.map(project => <ShowProjects
                                        key={project._id}
                                        project={project}
                                    ></ShowProjects>)
                                }
                            </div>
                        </>
                }
            </div>
        </>
    );
};

export default Projects;