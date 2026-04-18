import React from 'react';

export function BrandMark({ compact = false }) {
  return (
    <div
      className={`brand-mark${compact ? ' brand-mark--compact' : ''}`}
      role="img"
      aria-label="Blackletter Limited logo"
    >
      <div className="brand-mark__crest" aria-hidden="true">
        <span className="brand-mark__bracket">&lt;</span>
        <div className="brand-mark__monogram">
          <span className="brand-mark__monogram-letter brand-mark__monogram-letter--b">
            B
          </span>
          <span className="brand-mark__monogram-letter brand-mark__monogram-letter--l">
            L
          </span>
        </div>
        <span className="brand-mark__bracket brand-mark__bracket--right">&gt;</span>
      </div>

      <div className="brand-mark__wordmark">
        <span className="brand-mark__name">Blackletter</span>
        <span className="brand-mark__limited">Limited</span>
      </div>
    </div>
  );
}
