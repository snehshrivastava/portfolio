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

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const fetchData = async () => {

        const data = await axios.get('http://localhost:3000/api/v1/blogs');
        console.log(data)
        setBlogs(data.data.data);
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    <strong className="purple">Blogs </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few things I generally forget.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                    {blogs &&
                        blogs.map(b => {
                            return <Col md={4} className="project-card">
                                <ProjectCard
                                    imgPath={chatify}
                                    isBlog={false}
                                    id={b._id}
                                    title={b.topic}
                                    description={b.article}
                                    ghLink=""
                                    demoLink=""
                                />
                            </Col>
                        })

                    }
                </Row>
            </Container>
        </Container >
    );
}

export default Blogs;
