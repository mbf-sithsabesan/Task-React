import React from 'react';

class Home extends React.Component
{
  render(){
    return(
      <h1>This is a Home page</h1>

      );
  }
}
class Contact extends React.Component
{
  render(){
    return(
      <h1>This is a Contact page..</h1>

      );
  }
}

class Welcome extends React.Component
{
  render(){
    return(
      <h1>This is a Welcome page..</h1>

      );
  }
}

class About extends React.Component
{
  render(){
    return(
      <h1>This is a About page..</h1>

      );
  }
}

class Router extends React.Component
{
  constructor(){
    super();
    this.state = { route:window.location.hash.substr(1)}
  }

 componentDidMount(){
  window.addEventListener('hashchange',() => {
    this.setState({
      route:window.location.hash.substr(1)

    })
  })
 }
 render(){
  let Link;
  switch(this.state.route){
    case '/about' : Link= About ; break;
    case '/Contact':Link= Contact;break;
    case '/Welcome': Link = Welcome; break;
    default: Link = Home;

  }
  return(

    <div>
      <ul>
      <li><a href="#">Home</a></li>
       <li><a href="#/Welcome">Welcome</a></li>
      <li> <a href="#/about">About</a></li>
      <li><a href="#/Contact">Contact</a></li>


      </ul>
      <Link/>
    </div>

    );

 }
}



class App extends React.Component
{
  render(){
    return <Router/>
     
     
  }
}

export default App;
