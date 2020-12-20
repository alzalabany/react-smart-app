import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import claim from '../../assets/brand/dt-claim.svg';
import logo from '../../assets/brand/dt-logo.svg';
import './footer.scss';
import { FooterLink } from './types';

const currentYear = new Date().getFullYear();

export interface FooterProps {
  pages: FooterLink[];
}

export const Footer: FC<FooterProps> = ({ pages }) => (
  <footer className="footer" data-testid="footer">
    <div className="container">
      <div className="brand-images">
        <div className="brand-logo">
          <img src={logo} alt="Telekom Logo" />
          <span className="sr-only">Telekom Logo</span>
        </div>
        <div className="brand-claim">
          <img src={claim} alt={'brand_claim'} />
          <span className="sr-only">Brand Claim</span>
        </div>
      </div>
      <div className="footer-links">
        <div className="pages-links">
          {pages.map(page => (
            <Link
              to={`/static_page/${page.slug}`}
              rel="noopener noreferrer"
              className="text-light"
              key={page.slug}
            >
              {page.name}
            </Link>
          ))}
        </div>
        <div className="copyright">
          <p> {`© ${currentYear} Deutsche Telekom AG`} </p>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  pages: PropTypes.array.isRequired,
};
