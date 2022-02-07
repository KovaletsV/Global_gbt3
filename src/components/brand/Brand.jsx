import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
import "./brand.css";

const Brand = () => (
    <div className="gpt3__brand section__padding">
        <div>
            <img src={google} alt="google" />
        </div>
        <div>
            <img src={slack} alt="stack" />
        </div>
        <div>
            <img src={atlassian} alt="atlas" />
        </div>
        <div>
            <img src={dropbox} alt="dropbpx" />
        </div>
        <div>
            <img src={shopify} alt="shopify" />
        </div>
    </div>
);

export default Brand;
