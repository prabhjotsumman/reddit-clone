import React from "react";
// import styled from 'styled-components'
import Container from "../../components/Container";
import Section from "../../components/Section";
import DownvoteButton from "../../components/VoteButton/DownvoteButton";
import UpvoteButton from "../../components/VoteButton/UpvoteButton";
import ShareButton from "../../components/ShareButton/ShareButton";
// import CommentSection from "../../containers/CommentSection/";

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 100,
      views : 1230,
      author : "",
      category : "",
      title: "This is the Topic title",
      text: "This is topic sub title line and little description",
    };
  }
  render() {
    return (
      <Container small>
        <Section padded>
          <h2>{this.state.title}</h2>
          <p onClick={() => console.log("heading!")}>{this.state.text}</p>
          
          <button onClick={() => this.setState({ votes: this.state.votes + 1 })}> <UpvoteButton /> </button>
          
          <span>{this.state.votes}</span>
          
          <button onClick={() => this.setState({ votes: this.state.votes - 1 })} ><DownvoteButton /></button>

          <ShareButton />
          {/* <CommentSection/> */}
        </Section>
      </Container>
    );
  }
}

export default PostList;
