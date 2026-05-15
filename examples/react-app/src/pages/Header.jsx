import React from 'react';
import headerHtml from './html/header.html?raw';

export default function Header() {
  return <div dangerouslySetInnerHTML={{ __html: headerHtml }} />;
}
