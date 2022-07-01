import React from 'react'

const About = () => {
  const name = 'sourav tripathi';
  return (
    <main className='About'>
        <h2>About</h2>
        <p style={{marginTop:'1rem'}}>
          This is blog post app  is made by {name.toLocaleUpperCase()}.
        </p>
    </main>
  )
}

export default About