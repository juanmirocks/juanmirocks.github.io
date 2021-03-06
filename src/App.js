import React, { Component } from 'react';
import './App.css';
import profile from "./images/profile.jpg";

class App extends Component {
  render() {
    return (
      <div id="wrapper">

        <section id="main">
          <header>
            {/* Alternative src: "https://twitter.com/juanmirocks/profile_image?size=original" */}
            <span className="avatar"><img src={profile} alt="juanmirocks profile" /></span>
            <h1>Sup, I'm Juanmi</h1>

            <p>Co-founder at <a href="https://www.tagtog.net">🍃tagtog.net</a>, a text annotation tool to generate training data for <a href="https://en.wikipedia.org/wiki/Artificial_intelligence">#AI</a>. We apply <a href="https://en.wikipedia.org/wiki/Natural_language_processing">NLP</a>/<a href="https://en.wikipedia.org/wiki/Natural_language_understanding">NLU</a> techniques so that humans & machines can collaborate with each other. I'm also happy to help you with <a href="mailto:consult@juanmi.rocks">short-term consultant projects</a>. Let's connect:</p>

            <ul className="icons">
              <li><a href="https://www.linkedin.com/in/juanmirocks" className="fa-linkedin">LinkedIn</a></li>
              <li><a href="https://twitter.com/juanmirocks" className="fa-twitter">Twitter</a></li>
              <li><a href="https://medium.com/@juanmirocks" className="fa-medium">Medium</a></li>
              <li><a href="https://github.com/juanmirocks" className="fa-github">GitHub</a></li>
              <li><a href="https://stackoverflow.com/users/story/341320" className="fa-stack-overflow">StackOverflow</a></li>
              <li><a href="mailto:juanmi@tagtog.net" className="fa-envelope-o">E-Mail</a></li>
              {/* ResearchGate
                Steemit: https://steemit.com/@juanmirocks
              Academia
              Angel.co
              Tumblr
              Wordpress
              About.me */}
            </ul>

            <p>I live my own way. I don’t have all answers yet, but I’m learning and documenting my way to the top. Here you find the unfiltered side of me:</p>
            <ul className="icons">
              <li><a href="https://www.instagram.com/juanmirocks" className="fa-instagram">Instagram</a></li>
              <li><a href="https://www.youtube.com/channel/UCXEObTEkoKT2kRxl5FLx86Q" className="fa-youtube">YouTube</a></li>
              <li><a href="https://www.goodreads.com/juanmirocks" className="fa-book">Goodreads</a></li>
              {/* Facebook
              Snapchat
              Musically */}
            </ul>

          </header>

        </section>

        <footer id="footer">
          <ul className="copyright">
            <li><span className="copyleft"/> Juan Miguel Cejuela, aka, <a href="https://www.instagram.com/juanmirocks"><em>@juanmirocks</em></a></li>
          </ul>
        </footer>

      </div>

    );
  }
}

if ('addEventListener' in window) {
  window.addEventListener('load', function() { document.body.className = document.body.className.replace(/\bis-loading\b/, ''); });
  document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
}

export default App;
