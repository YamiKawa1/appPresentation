import React from 'react';

function About(props) {
  return (
      <div id='about'>
        <div className='about-image'>
            <img src={props.image} />
        </div>
        <div className='about-text'>
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio architecto quos mollitia iste provident similique, explicabo quidem non asperiores quasi nam quis, porro molestiae repudiandae reiciendis perferendis eos. Alias, ipsa.</p>
            <button>{props.button}</button>
        </div>
      </div>
  )
}

export default About;
