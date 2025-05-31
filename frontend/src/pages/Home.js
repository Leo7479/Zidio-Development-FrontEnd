import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../styles/Home.css';

const Home = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    setFeaturedJobs([
      {
        id: 1,
        title: 'Senior UX Designer',
        company: 'Facebook',
        salary: '$30K–$35K',
        type: 'Contract Base',
        location: 'Australia',
        timeRemaining: '4 Days Remaining',
        logo: '/job-image-1.png',
      },
      {
        id: 2,
        title: 'Software Engineer',
        company: 'Apple',
        salary: '$60K–$80K',
        type: 'Full Time',
        location: 'China',
        timeRemaining: '4 Days Remaining',
        logo: '/job-image-2.png',
      },
      {
        id: 3,
        title: 'Junior Graphic Designer',
        company: 'Google',
        salary: '$40K–$70K',
        type: 'Full Time',
        location: 'Canada',
        timeRemaining: '4 Days Remaining',
        logo: '/job-image-3.png',
      }
    ]);
  }, []);

  const categories = [
    { icon: '/graphics-design.png', label: 'Graphics & Design', count: 357 },
    { icon: '/code-programming.png', label: 'Code & Programming', count: 197 },
    { icon: '/digital-marketing.png', label: 'Digital Marketing', count: 199 },
    { icon: '/video-animation.png', label: 'Video & Animation', count: 247 },
    { icon: '/music-audio.png', label: 'Music & Audio', count: 204 },
    { icon: '/account-finance.png', label: 'Account & Finance', count: 187 },
    { icon: '/health-care.png', label: 'Health & Care', count: 125 },
    { icon: '/data-science.png', label: 'Data & Science', count: 97 }
  ];

  const handleSearch = () => {
    // Implement search functionality here
    alert(`Searching for: ${searchTerm} in ${location}`);
  };

  const handleApply = (jobTitle) => {
    // Implement apply functionality here
    alert(`Applying for: ${jobTitle}`);
  };

  return (
    <div className="home-container">
      <Header activePage="home" />
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-left">
            <h1>Find a job that suits your interest & skills.</h1>
            
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Job title, keyword..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <input 
                type="text" 
                placeholder="Your Location" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <button onClick={handleSearch}>Find Job</button>
            </div>
            <p className="suggestions">
              Suggestions: Designer, Programming, <button className="suggestion-link">Digital Marketing</button>, Video, Animation
            </p>
          </div>
          <div className="hero-right">
            <img src="/hero-illustration.png" alt="Search Illustration" />
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats">
          <div className="stat-item">
            <img src="/live-job.png" alt="Live Job" />
            <div>
              <strong>1,75,324</strong>
              <span>Live Job</span>
            </div>
          </div>
          <div className="stat-item">
            <img src="/companies.png" alt="Companies" />
            <div>
              <strong>97,354</strong>
              <span>Companies</span>
            </div>
          </div>
          <div className="stat-item">
            <img src="/candidates.png" alt="Candidates" />
            <div>
              <strong>38,47,154</strong>
              <span>Candidates</span>
            </div>
          </div>
          <div className="stat-item">
            <img src="/new-jobs.png" alt="New Jobs" />
            <div>
              <strong>7,532</strong>
              <span>New Jobs</span>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="categories">
          <h2>Popular category</h2>
          <div className="category-grid">
            {categories.map((cat, idx) => (
              <div key={idx} className="category-item">
                <img src={cat.icon} alt={cat.label} />
                <p>{cat.label}</p>
                <span>{cat.count} open position</span>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="featured-jobs">
          <h2>Featured Jobs</h2>
          {featuredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-image">
                <img src={job.logo} alt={job.title} />
              </div>
              <div className="job-info">
                <h3>{job.title}</h3>
                <p>{job.company} · {job.type} · {job.location}</p>
                <p>{job.salary}</p>
                <p>{job.timeRemaining}</p>
              </div>
              <button onClick={() => handleApply(job.title)}>Apply Now</button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
