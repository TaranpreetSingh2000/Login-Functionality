import React from 'react';
import { Link } from 'react-router-dom';
import logo from './ayasya-logo.png';


function Home({authenticated}) {
  return (
    
    <div style={styles.container}>
    <img src={logo} style={styles.img}/>
      <h2 style={styles.heading}>Welcome to Our Website</h2>
      <p style={styles.description}>Explore and discover amazing things!</p>
      {authenticated ? (
        <>
          <button style={styles.button}>
            <Link to="/navbar" style={styles.link}>
              Go to Dashboard
            </Link>
          </button>
        </>
      ) : (
        <>
          <button style={styles.button}>
            <Link to="/login" style={styles.link}>
              Sign In
            </Link>
          </button>
        </>
      )}
      {/* <button style={styles.button}>
        <Link to="/login" style={styles.link}>
          Sign In
        </Link>
      </button> */}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: 'powderblue',
    height: '100vh',
    paddingTop: '100px'
     },
  heading: {
    fontSize: '3em',
    marginBottom: '20px',
    color: 'crimson',
  },
  description: {
    fontSize: '1.2em',
    marginBottom: '30px',
    color: '#555',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1.2em',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  img:{
    width:'10%',
  }
};

export default Home;
