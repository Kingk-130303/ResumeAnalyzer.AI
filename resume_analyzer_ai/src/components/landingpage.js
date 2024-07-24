// src/components/LandingPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/signup');
    };

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div style={styles.landingPage}>
            <h1 style={styles.title}>Welcome to AI-Powered Resume Analyzer</h1>
            <h2 style={styles.subtitle}>
                Improve your resume with AI-driven insights and land your dream job!
            </h2>
            <div style={styles.buttonContainer}>
                <button style={{ ...styles.button, ...styles.primaryButton }} onClick={handleSignUp}>
                    Sign Up
                </button>
                <button style={{ ...styles.button, ...styles.outlineButton }} onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
};

const styles = {
    landingPage: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
    },
    title: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
    },
    subtitle: {
        fontSize: '1.5rem',
        marginBottom: '2rem',
    },
    buttonContainer: {
        display: 'flex',
        gap: '1rem',
        marginTop: '2rem',
    },
    button: {
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        border: 'none',
        cursor: 'pointer',
    },
    primaryButton: {
        backgroundColor: '#007bff',
        color: 'white',
    },
    outlineButton: {
        backgroundColor: 'white',
        color: '#007bff',
        border: '2px solid #007bff',
    },
};

export default LandingPage;
