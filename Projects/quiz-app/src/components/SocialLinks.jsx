import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialLinks = () => {

    return (
        <div className="d-flex gap-3 fs-3 justify-content-center">
            {/* LinkedIn */}
            <div className="d-flex gap-3 fs-3 px-4 py-2 border-bottom">
                <a href="https://www.linkedin.com/in/iiuzaifa/" target="_blank" rel="noreferrer">
                    <FaLinkedin color="#0A66C2" />
                </a>

                {/* GitHub */}
                <a href="https://github.com/iuzaifa" target="_blank" rel="noreferrer">
                    <FaGithub color="black" />
                </a>

                <a href="mailto:abuhuzaifaw7@gmail.com" className="icon-btn">
                    <img src="/gmail.png" alt="Email" />
                </a>

                <a href="https://leetcode.com/u/abuhuzaiifa/" target="_blank" rel="noreferrer" className="icon-btn">
                    <img src="/leetcode.png" alt="LeetCode" />
                </a>
            </div>


        </div>
    );
};

export default SocialLinks;
