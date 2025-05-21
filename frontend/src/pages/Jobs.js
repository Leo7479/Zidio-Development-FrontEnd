import React from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import { Card, CardContent } from "../components/Card";
import '../styles/Jobs.css';

import { Mail, Upload } from "lucide-react";

const Jobs = () => {
  return (
    <div className="jobs-page">
      <Header activePage="jobs" />

      <div className="jobs-header">
        <h1>Find your dream job</h1>
        <div className="jobs-search">
          <Input placeholder="Search job title, keywords or company" className="search-input" />
          <Input placeholder="Location" defaultValue="Chicago, IL" className="location-input" />
          <Button className="search-button">Search</Button>
        </div>
      </div>

      <div className="jobs-container">
        <div className="jobs-content">
          <div className="jobs-sidebar">
            <h2>Filters</h2>
            <div>
              <h3>JOB TYPE</h3>
              <ul>
                <li>Full Time (134)</li>
                <li>Part Time (12)</li>
                <li>Contract (19)</li>
                <li>Internship (8)</li>
                <li>Freelance (5)</li>
              </ul>
            </div>

            <div>
              <h3>LOCATION</h3>
              <ul>
                <li>Chicago, IL (284)</li>
                <li>Niles, IL (8)</li>
                <li>Oak Brook, IL (7)</li>
                <li>Northbrook, IL (3)</li>
                <li>Evanston, IL (2)</li>
              </ul>
            </div>

            <div>
              <h3>COMPANY</h3>
              <ul>
                <li>Deloitte</li>
                <li>Grubhub</li>
                <li>Frey Design</li>
                <li>Adobe</li>
                <li>Zebra Technologies</li>
              </ul>
            </div>
          </div>

          <div className="jobs-list">
            <div className="job-card notice">
              <div className="notice-upload">
                <Upload className="icon" />
                <span>Upload your resume</span>
              </div>
              <p>We'll match you with the best jobs. Right job, Right away!</p>
            </div>

            <Card>
              <CardContent className="job-card-content">
                <h3>Visual Designer</h3>
                <p>Deloitte - Chicago IL</p>
                <div>Experience: 3 to 5 Years | Full-Time | $57k - $62k per annum</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="job-card-content">
                <h3>Product Designer</h3>
                <p>Grubhub - Chicago IL</p>
                <div>Experience: 3 to 5 Years | Full-Time | $44k - $52k per annum</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="job-card-content">
                <h3>Designer</h3>
                <p>Frey Design Group, INC - Chicago IL</p>
                <div>Experience: 3 to 5 Years | Internship | $18k - $24k per annum</div>
              </CardContent>
            </Card>
          </div>

          <div className="jobs-subscribe">
            <div className="subscribe-box">
              <h3>Be the first to see new jobs in <span>Chicago, IL</span></h3>
              <div className="subscribe-input">
                <Mail className="icon" />
                <input type="email" placeholder="Email" />
              </div>
              <Button className="subscribe-button">Subscribe Now</Button>
            </div>

            <div className="popular-companies">
              <h4>Popular in <span>Chicago</span></h4>
              <ul>
                <li>Workday</li>
                <li>Salesforce</li>
                <li>Robert International</li>
                <li>CarMax</li>
                <li>SAP America Inc.</li>
                <li>Alliance Data</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;