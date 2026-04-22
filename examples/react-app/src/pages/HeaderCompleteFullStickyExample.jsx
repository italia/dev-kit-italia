import React from 'react';
import headerCompleteFullStickyHtml from './html/header-complete-full-sticky-example.html?raw';

export default function HeaderCompleteFullStickyExample() {
  return <div dangerouslySetInnerHTML={{ __html: headerCompleteFullStickyHtml }} />;
}
