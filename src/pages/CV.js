import React from 'react';
import { FileText, Paperclip, MapPin, Calendar, Building } from 'lucide-react';
import './CV.css';

// PublicationCard Component
const PublicationCard = ({ publication }) => {
  return (
    <div className="publication-card">
      {/* Thumbnail */}
      <div className="publication-thumbnail">
        <img 
          src={publication.thumbnail} 
          alt="thumbnail" 
          className="thumbnail-image"
        />
      </div>
      
      {/* Content */}
      <div className="publication-content">
        <div className="publication-meta">
          <h4 className="publication-title">
            {publication.title}
          </h4>
          <p className="publication-authors">{publication.authors}</p>
          <p className="publication-venue">{publication.venue}</p>
        </div>
        
        {/* Actions */}
        <div className="publication-actions">
          <a 
            href={publication.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="action-link"
          >
            <FileText size={16} />
            PDF
          </a>
          
          {publication.bibtexUrl && (
            <>
              <span className="action-separator">|</span>
              <a 
                href={publication.bibtexUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="action-link"
              >
                <Paperclip size={16} />
                Bibtex
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const CV = () => {
  const publications = [
    {
      id: 1,
      title: "Do LLMs have visualization literacy?",
      authors: "Hong, J., Seto, C., Fan, A., & Maciejewski, R.",
      venue: "IEEE TVCG (2025)",
      thumbnail: "https://via.placeholder.com/96x96?text=VL",
      pdfUrl: "#",
      bibtexUrl: "#"
    },
    {
      id: 2,
      title: "Understanding Reader Takeaways in Thematic Maps",
      authors: "Fan, A., et al.",
      venue: "CHI 2024",
      thumbnail: "https://via.placeholder.com/96x96?text=TM",
      pdfUrl: "#",
      bibtexUrl: "#"
    },
    {
      id: 3,
      title: "GeoLinter: A Linting Framework for Choropleth Maps",
      authors: "Lei, F., Fan, A., et al.",
      venue: "IEEE TVCG (2023)",
      thumbnail: "https://via.placeholder.com/96x96?text=GL",
      pdfUrl: "#",
      bibtexUrl: "#"
    },
    {
      id: 4,
      title: "Annotating line charts for addressing deception",
      authors: "Fan, A., et al.",
      venue: "CHI 2022",
      thumbnail: "https://via.placeholder.com/96x96?text=LC",
      pdfUrl: "#",
      bibtexUrl: "#"
    },
    {
      id: 5,
      title: "Visual analytics for diagnosing transfer learning",
      authors: "Ma, Y., Fan, A., et al.",
      venue: "IEEE TVCG (2020)",
      thumbnail: "https://via.placeholder.com/96x96?text=VA",
      pdfUrl: "#",
      bibtexUrl: "#"
    }
  ];

  return (
    <div className="cv-container">
      {/* Header */}
      <header className="cv-header">
        <h1 className="cv-name">Arlen Fan</h1>
        <p className="cv-title">Data Scientist & Engineer</p>
      </header>

      {/* Profile */}
      <section className="cv-section">
        <h2 className="section-title">Profile</h2>
        <div className="section-content">
          <p className="profile-text">
            I am a versatile data scientist, researcher, and developer with 6 years of professional experience building robust systems across e-commerce, internal tooling, and trading/risk management. 5 publications in top conferences and multiple patents, both granted and pending.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="cv-section">
        <h2 className="section-title">Experience</h2>
        <div className="section-content">
          
          <div className="experience-item">
            <div className="experience-header">
              <h3 className="job-title">Data Scientist</h3>
              <div className="company-info">
                <span className="company-name">
                  <Building size={16} />
                  Blade4 Capital
                </span>
                <span className="location">
                  <MapPin size={16} />
                  Scottsdale, AZ
                </span>
                <span className="duration">
                  <Calendar size={16} />
                  Sept 2023 - Present
                </span>
              </div>
            </div>
            <ul className="job-responsibilities">
              <li>Designed a Bayesian options backtesting engine to evaluate trading strategies under uncertainty.</li>
              <li>Integrated results with MongoDB and S3, comparing Bayesian models with threshold-based strategies.</li>
              <li>Built simulation tools and real-time dashboards using Python, Flask, and React.</li>
              <li>Modernized data pipelines using Pandas, NumPy, and Plotly.</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h3 className="job-title">Marketing Manager, Software Engineer</h3>
              <div className="company-info">
                <span className="company-name">
                  <Building size={16} />
                  Hessaire
                </span>
                <span className="location">
                  <MapPin size={16} />
                  Birmingham, AL
                </span>
                <span className="duration">
                  <Calendar size={16} />
                  Sept 2021 - Present
                </span>
              </div>
            </div>
            <ul className="job-responsibilities">
              <li>Built a headless e-commerce site with Next.js, TypeScript, and GraphQL.</li>
              <li>Developed analytics pipelines using Google Analytics, Segment, and custom logs.</li>
              <li>Architected internal tooling with Node.js for operations and customer service.</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h3 className="job-title">Software Engineering Intern</h3>
              <div className="company-info">
                <span className="company-name">
                  <Building size={16} />
                  CapitalOne
                </span>
                <span className="location">
                  <MapPin size={16} />
                  San Francisco, CA
                </span>
                <span className="duration">
                  <Calendar size={16} />
                  Jun 2021 – Aug 2021
                </span>
              </div>
            </div>
            <ul className="job-responsibilities">
              <li>Developed a credit card management dashboard in Angular 14 with AWS integrations.</li>
              <li>Focused on clean architecture in full-stack services.</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h3 className="job-title">Software Engineering Intern</h3>
              <div className="company-info">
                <span className="company-name">
                  <Building size={16} />
                  CapitalOne
                </span>
                <span className="location">
                  <MapPin size={16} />
                  Plano, TX
                </span>
                <span className="duration">
                  <Calendar size={16} />
                  Jun 2020 – Aug 2020
                </span>
              </div>
            </div>
            <ul className="job-responsibilities">
              <li>Built internal cloud tools using Java, Spring, and AWS microservices.</li>
              <li>Developed REST APIs and secure authentication systems.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Publications with Cards */}
      <section className="cv-section">
        <h2 className="section-title">Publications</h2>
        <div className="section-content">
          <div className="publications-grid">
            {publications.map(publication => (
              <PublicationCard key={publication.id} publication={publication} />
            ))}
          </div>
        </div>
      </section>

      {/* Patents */}
      <section className="cv-section">
        <h2 className="section-title">Patents</h2>
        <div className="section-content">
          <div className="patent-item">
            <p className="patent-citation">
              Fan, A., Ma, Y., & Maciejewski, R. (2023). <em>Systems and methods for annotating line charts.</em> US Patent App No. 18/106,926 (US20230274081A).
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="cv-section">
        <h2 className="section-title">Education</h2>
        <div className="section-content">
          
          <div className="education-item">
            <div className="degree-header">
              <h3 className="degree-title">M.S., Ph.D., Computer Science</h3>
              <span className="graduation-year">2025</span>
            </div>
            <p className="institution">Arizona State University</p>
            <p className="dissertation">Dissertation: Addressing Deception and Design Errors in Visualizations</p>
            <p className="advisor">Advisor: Ross Maciejewski</p>
          </div>

          <div className="education-item">
            <div className="degree-header">
              <h3 className="degree-title">B.S., Electrical and Computer Engineering</h3>
              <span className="graduation-year">2018</span>
            </div>
            <p className="institution">University of Rochester</p>
          </div>

        </div>
      </section>

      <style jsx>{`
        
      `}</style>
    </div>
  );
};

export default CV;