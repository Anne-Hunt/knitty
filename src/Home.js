import React from "react";
import { useState } from "react";

const Home = () => {
    const seeMore = () => {

    }

    const craft = ''

    return (
        <div className="center">
            <h2>All The Knitting Projects*, All The Time</h2>
            <p><small>*some may be crochet</small></p>
            <div className="projects">
                <p>projects here</p>
            </div>
            <div>
                <button onClick={seeMore}>See More</button>
            </div>
        </div>
    );
}

export default Home;