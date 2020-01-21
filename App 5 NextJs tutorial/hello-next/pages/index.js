
import Layout from '../comps/layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Markdown from 'react-markdown';

const PostLink = (props) => {
    return (
        <li key={props.id}>
            <Link href="/p/[id]" as={`/p/${props.id}`} >
                <a>
                    {props.title}
                </a>
            </Link>
            <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
        </li>
    );
}

const Index = (props) => {
    return (
        <Layout>
            <h1>The Batman Shows</h1>
            <ol>
                {
                    props.shows.map(show => (
                        <PostLink id={show.id} title={show.name} />
                    ))
                }
            </ol>
            <div className="markdown">
                <Markdown
                    source={`This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well
                    
### This is a title
                    
And here's the content.`} />
            </div>
            <style jsx global>{`
                h1{
                font-family: 'Arial';
                }

                ol {
                padding: 20px;
                }

                li {
                list-style: none;
                margin: 5px 0;
                }
                .markdown {
                font-family: 'Arial';
                }

                .markdown a {
                text-decoration: none;
                color: blue;
                }

                .markdown a:hover {
                opacity: 0.6;
                }

                .markdown h3 {
                margin: 0;
                padding: 0;
                text-transform: uppercase;
                }
            `}
            </style>
        </Layout>
    );
}

Index.getInitialProps = async function () {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const shows = await response.json();

    console.log("sssss");
    return ({
        shows: shows.map(entry => entry.show)
    });
}

export default Index;