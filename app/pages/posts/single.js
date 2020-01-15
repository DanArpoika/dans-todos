import React from 'react';
import Helmet from 'react-helmet';
import Container from 'Components/Container';

const SinglePost = props => (
  <main>
    <Helmet
      title={`Post ${props.postId}`}
      meta={[{ property: 'og:title', content: `Post ${props.postId}` }]}
    />
    <Container>
      <div>
        <h1>My blog post #{props.postId}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </Container>
  </main>
);

SinglePost.getInitialProps = ({ query }) => ({ postId: query.id });

export default SinglePost;
