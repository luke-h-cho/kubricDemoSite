import React, {useState} from 'react';

const People = (props) => {
  return (
    <div>
      <div>
        <h1>
            Meet Our Team:
        </h1>
      </div>
      <div id="people">
        <div className="person">
          <img src=""/>
          <div className="info">
            <div className="name">Laura Botel</div>
            <div className="description"></div>
          </div>
          <div className="link">
            <a><img src="/"/>GITHUB</a>
            <a><img src="/"/>LINKEDIN</a>
          </div>
      </div>
        <div className="person">
          <img src="https://media-exp1.licdn.com/dms/image/C5103AQGgwlivDqcUow/profile-displayphoto-shrink_800_800/0/1517590847014?e=1640822400&v=beta&t=Dv9KX9dO5F8j-vpQakfNVNXteUVx2JP1j3440MIx6P8"/>
          <div className="info">
            <div className="name">Luke Cho</div>
            <div className="description">Fullstack Engineer</div>
          </div>
          <div className="link">
            <a href="https://github.com/luke-h-cho"><i class="fab fa-github-square"></i></a>
            <a href="https://www.linkedin.com/in/luke-h-cho/"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="person">
          <img src=""/>
          <div className="info">
            <div className="name">James Cross</div>
            <div className="description"></div>
          </div>
          <div className="link">
            <a><img src="/"/>GITHUB</a>
            <a><img src="/"/>LINKEDIN</a>
          </div>
        </div>
        <div className="person">
          <img src=""/>
          <div className="info">
           <div className="name">John Haberstroh</div>
            <div className="description"></div>
          </div>
          <div className="link">
            <a><img src="/"/>GITHUB</a>
            <a><img src="/"/>LINKEDIN</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;