import React, { Component } from 'react';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';
import './App.css';

const Header = (props) =>
  <header className="App-header">
    <li><NavLink exact to="/">HOME</NavLink></li>
    <li><NavLink to="/projects">PORTFOLIO</NavLink></li>
  </header>



const Layout = (props) =>
 <div>
    <div className="left-container">
      <h2>Ngo Van Huong</h2>
      <p>Follow me on <a href="">Facebook</a>,
      <a href="">Twitter</a>,
      <a href="">Github
      </a> or send me an email</p>
      <img src="http://s.mxmcdn.net/images-storage/albums5/5/1/0/4/3/1/33134015_350_350.jpg" alt=""/>
    </div>
    <div className="right-container">
      <Header/>
      <div>
       {props.children}
      </div>
    </div>
      <Footer />
 </div>

const Footer = (props) =>
 <div className="footer">
   <p>
    © 2017 My team and <a href="">GitHub</a> Pages.
   </p>
 </div>

const Blog = (props) =>
  <div className="blog-container">
    <h3 className="title"><NavLink to={`/${props.title}`}>{props.title}</NavLink></h3>
    <p className="descriptions">{props.descriptions}</p>
    <p className="date">{props.date}</p>
  </div>

const BlogList = (props) => {
  let blogs = props.blogData.map((blog) => {
    //if (blog.type)
    return <Blog title={blog.title}
                descriptions={blog.descriptions}
                date={blog.date}
                link={blog.link} />
  });
  return (
    <div>
      {blogs}
    </div>
  );
}
const ProjectList = (props) => {
  let projects = props.projectData.map(project => {
    return (
      <Project title={project.title}
               descriptions={project.descriptions}
               imageUrl={project.imageUrl}
               linkSourceCode={project.linkSourceCode}
               linkDemo={project.linkDemo}/>
    )
  })
  return (<div>
     {projects}
    </div>)
}

const Project = (props) => {
  return (
    <div>
      <h3 class="title-project">{props.title}</h3>
      <p class="descriptions-project">{props.descriptions}</p>
      <a class="demo-project" href={props.linkDemo}>Demo</a>
      <a class="sourcecode-project" href={props.linkSourceCode}>Source Code</a>
      <img class="image-project" src={props.imageUrl} alt=""/>
    </div>
  );
}

const Home = (props) =>
  <Layout>
    <h1>This is Home Page</h1>
    <div className="line-separation"></div>
    <BlogList blogData={blogData}/>
  </Layout>

const ProjectPage = (props) =>
  <Layout>
    <h1>This is Project Page</h1>
    <ProjectList projectData={projectData}/>
  </Layout>

const NotFound = (props) =>
   <div>
    <h1>Page Not Found</h1>
   </div>

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={ProjectPage}/>
              <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const blogData = [
  {
    title: "Example Title",
    descriptions: "Duo ea omnes altera mediocrem, putent perfecto tincidunt in cum, ut sed delenit nusquam. Soleat discere has no, nec volutpat deterruisset concludaturque et. Cu pri congue phaedrum. Mentitum inimicus in usu, cum tibique corrumpit cu, nostrud equidem mel id.",
    date: "March 15, 2015",
    link: "https://example.com",
    type: "Tutorials"
  },
  {
    title: "Example Title",
    descriptions: "Duo ea omnes altera mediocrem, putent perfecto tincidunt in cum, ut sed delenit nusquam. Soleat discere has no, nec volutpat deterruisset concludaturque et. Cu pri congue phaedrum. Mentitum inimicus in usu, cum tibique corrumpit cu, nostrud equidem mel id.",
    date: "June 23, 2015",
    link: "https://example.com",
    type: "Personal"
  },
  {
    title: "Example Title",
    descriptions: "Duo ea omnes altera mediocrem, putent perfecto tincidunt in cum, ut sed delenit nusquam. Soleat discere has no, nec volutpat deterruisset concludaturque et. Cu pri congue phaedrum. Mentitum inimicus in usu, cum tibique corrumpit cu, nostrud equidem mel id.",
    date: "Aug 12, 2015",
    link: "https://example.com",
    type: "Recurse Center"
  },
  {
    title: "Example Title",
    descriptions: "Duo ea omnes altera mediocrem, putent perfecto tincidunt in cum, ut sed delenit nusquam. Soleat discere has no, nec volutpat deterruisset concludaturque et. Cu pri congue phaedrum. Mentitum inimicus in usu, cum tibique corrumpit cu, nostrud equidem mel id.",
    date: "June 79, 2015",
    link: "https://example.com",
    type: "Recurse Center"
  },
]

const projectData = [
  {
    title: 'Example Title Project',
    descriptions: "Mega Boilerplate is a starter project generator that focuses on simplicity and ease of use, while providing you with flexibility of choices. It was heavily inspired by the Hackathon Starter, but unlike it, you can customize any part of your application stack — from web framework and database to CSS preprocessor and client-side JavaScript framework. Currently, generators are primarily limited to Node.js web apps, but I am planning to expand support for other platforms and languages in the near future.",
    linkSourceCode: '',
    linkDemo: '',
    imageUrl: 'http://i.imgur.com/C7fMr95.png'
  },
  {
    title: 'Example Title Project',
    descriptions: "Mega Boilerplate is a starter project generator that focuses on simplicity and ease of use, while providing you with flexibility of choices. It was heavily inspired by the Hackathon Starter, but unlike it, you can customize any part of your application stack — from web framework and database to CSS preprocessor and client-side JavaScript framework. Currently, generators are primarily limited to Node.js web apps, but I am planning to expand support for other platforms and languages in the near future.",
    linkSourceCode: '',
    linkDemo: '',
    imageUrl: 'http://i.imgur.com/C7fMr95.png'
  },
  {
    title: 'Example Title Project',
    descriptions: "Mega Boilerplate is a starter project generator that focuses on simplicity and ease of use, while providing you with flexibility of choices. It was heavily inspired by the Hackathon Starter, but unlike it, you can customize any part of your application stack — from web framework and database to CSS preprocessor and client-side JavaScript framework. Currently, generators are primarily limited to Node.js web apps, but I am planning to expand support for other platforms and languages in the near future.",
    linkSourceCode: '',
    linkDemo: '',
    imageUrl: 'http://i.imgur.com/C7fMr95.png'
  }
]
export default App;
