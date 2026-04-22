import React from 'react';
import headerCompleteFullHtml from './html/header-complete-full-example.html?raw';

export default function HeaderCompleteFullExample() {
  return <div dangerouslySetInnerHTML={{ __html: headerCompleteFullHtml }} />;
}
