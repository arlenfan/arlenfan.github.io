import React from 'react';
import PublicationCard from './PublicationCard';
import './PublicationList.css';

const PublicationList = ({ publications }) => {
  return (
    <div className="publication-list-container">
      <div className="publication-list">
        {publications.map((publication) => (
          <PublicationCard key={publication.id} publication={publication} />
        ))}
      </div>
      
      {/* Pagination */}
      <div className="pagination-container">
        <nav className="pagination">
          <button 
            disabled 
            className="pagination-button pagination-button-disabled"
          >
            ← Previous
          </button>
          
          <div className="pagination-numbers">
            <button className="pagination-number pagination-number-active">1</button>
            <button className="pagination-number">2</button>
            <button className="pagination-number">3</button>
            <button className="pagination-number">4</button>
            <button className="pagination-number">5</button>
            <span className="pagination-ellipsis">...</span>
            <button className="pagination-number">26</button>
          </div>
          
          <button className="pagination-button">
            Next →
          </button>
        </nav>
      </div>
    </div>
  );
};

export default PublicationList;