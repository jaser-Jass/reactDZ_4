
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div>
            <h1>О нас</h1>
            <Link  to="/">Перейти на главную страницу</Link>
        </div>
    );
};

export default AboutPage;