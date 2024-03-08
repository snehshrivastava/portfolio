import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import axios from "axios";
import { useLocation } from "react-router-dom";

function BlogDes(props) {
    // const [blogs, setBlogs] = useState([]);
    const location = useLocation();
    // useEffect(async () => {
    //     const data = await axios.get('http://localhost:3000/api/v1/blogs');
    //     console.log(data)
    //     setBlogs(data.data.data);
    // }, [])

    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    <strong className="purple">{location.state.title} </strong>
                </h1>
                <p style={{ color: "white" }}>
                    {location.state.description}
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                    {/* {blogs &&
                        blogs.map(b => {
                            return <Col md={4} className="project-card">
                                <ProjectCard
                                    imgPath={chatify}
                                    isBlog={false}
                                    id={b._id}
                                    title={b.title}
                                    description={b.article}
                                    ghLink="https://github.com/soumyajit4419/Chatify"
                                    demoLink="https://chatify-49.web.app/"
                                />
                            </Col>
                        })

                    } */}
                </Row>
            </Container>
        </Container >
    );
}

export default BlogDes;
