import React from "react";
import { useState } from "react";
import { InstagramEmbed } from 'react-social-media-embed';

const Home = () => {
    const seeMore = () => {

    }

    const craft = ''

    return (
        <div className="center">
            <h2>All The Knitting Projects*, All The Time</h2>
            <p><small>*some may be crochet</small></p>
            <div className="projects">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <InstagramEmbed url="https://www.instagram.com/ahuntdev/?__a=1" width={328} />
                </div>
            </div>
            <div>
                <button onClick={seeMore}>See More</button>
            </div>
        </div>
    );
}

export default Home;