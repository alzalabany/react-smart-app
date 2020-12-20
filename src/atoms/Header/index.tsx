import React from 'react';
import claim from '../../assets/brand/dt-claim.svg';
import logo from '../../assets/brand/dt-logo.svg';

const BrandBar = () => (
  <div className="brandbar" data-testid="appheader">
    <div className="container">
      <div className="brand-logo">
        <a href="/">
          <img src={logo} alt="Telekom Logo" />
          <span className="sr-only">Telekom Logo</span>
        </a>
      </div>

      <div className="brand-claim">
        <img src={claim} alt={'Brand Claim'} />
        <span className="sr-only">Brand Claim</span>
      </div>
    </div>
  </div>
);

export default BrandBar;
