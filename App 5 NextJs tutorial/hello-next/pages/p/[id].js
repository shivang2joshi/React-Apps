import { useRouter } from 'next/router';
import Layout from '../../comps/layout';
import fetch from 'isomorphic-unfetch';

const Post = (props) => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{props.show.name}</h1>
      <p>This is the blog post content.</p>
      <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      {props.show.image ? <img src={props.show.image.medium} /> : null}
    </Layout>
  );
}

Post.getInitialProps = async function (context) {

  const { id } = context.query;
  const response = await fetch('https://api.tvmaze.com/shows/' + id );
  const data = await response.json();
  // console.log(data);
  return ({
    show: data
  });

}
export default Post;