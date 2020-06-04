import React from "react";
import {
    Container,
    Jumbotron,
    Button,
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Spinner,
} from "reactstrap";
import { Header } from "../components";
import { PostsApi } from "../api";

class MainPage extends React.Component {
    state = {
        status: null,
        posts: [],
    };
    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts = async () => {
        this.setState({
            status: "loading",
        });
        const posts = await PostsApi.getPosts();
        this.setState({
            status: "ready",
            posts,
        });
    };

    render() {
        const { status, posts } = this.state;
        return (
            <>
                <Container className="mb-4">
                    <Header />
                </Container>
                <Container>
                    <Jumbotron>
                        <h1 className="display-3">Hello, world!</h1>
                        <p className="lead">
                            This is a simple hero unit, a simple Jumbotron-style
                            component for calling extra attention to featured
                            content or information.
                        </p>
                        <hr className="my-2" />
                        <p>
                            It uses utility classes for typography and spacing
                            to space content out within the larger container.
                        </p>
                        <p className="lead">
                            <Button color="primary">Learn More</Button>
                        </p>
                    </Jumbotron>
                </Container>
                <Container>
                    {status === "ready"
                        ? posts.map((post) => (
                              <Card>
                                  <CardBody>
                                      <CardTitle>{post.title}</CardTitle>
                                      <CardSubtitle>Card subtitle</CardSubtitle>
                                      <CardText>{post.body}</CardText>
                                      <Button>Button</Button>
                                  </CardBody>
                              </Card>
                          ))
                        : null}

                    {status === "loading" ? (
                        <Spinner style={{ width: "3rem", height: "3rem" }} />
                    ) : null}
                </Container>
            </>
        );
    }
}

export default MainPage;
