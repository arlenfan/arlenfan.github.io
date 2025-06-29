import React from 'react';
import { FileText, Paperclip } from 'lucide-react';
import './PublicationCard.css';

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

export default PublicationCard;