import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-content">
        <div className="footer-column">
          <h3>ABOUT</h3>
          <ul>
            <li>
              <Link to="/about" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer-link">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>HELP</h3>
          <ul>
            <li>
              <Link to="#" className="footer-link">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Report Infringement
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>CONSUMER POLICY</h3>
          <ul>
            <li>
              <Link to="#" className="footer-link">
                Terms Of Use
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>SOCIAL</h3>
          <ul>
            <li>
              <Link to="#" className="footer-link">
                Facebook
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Twitter
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                YouTube
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-copy">
        &copy; 2023 CureConnect App. All rights reserved.
      </p>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  margin-bottom: auto; /* Increase the bottom margin */
  background-color: #333;
  color: #fff;
  padding: 30px 0;
  text-align: center;
  height: 30vh;

  .footer-content {
    display: flex;
    justify-content: space-around;
  }

  .footer-column {
    flex: 1;
  }

  .footer-column h3 {
    font-size: 18px;
    margin-bottom: 15px;
  }

  .footer-link {
    color: #fff;
    text-decoration: none;
  }

  .footer-link:hover {
    text-decoration: underline;
  }

  .footer-copy {
    margin-top: 20px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
    }
  }
`;

export default Footer;
