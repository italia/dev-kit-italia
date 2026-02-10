// .storybook/addons/changelog-tab.tsx
import React, { useState } from 'react';
import { addons, types } from 'storybook/manager-api';
import { useParameter } from 'storybook/manager-api';

const ADDON_ID = 'custom-changelog';
const PANEL_ID = `${ADDON_ID}/panel`;

const styles = `
  .changelog-button {
    outline: none;
    transition: background-color 0.15s ease;
  }
  .changelog-button:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  .changelog-button:focus-visible {
    outline: 2px solid #0066cc;
    outline-offset: -2px;
  }
  .changelog-content a {
    color: #0066cc;
    text-decoration: none;
  }
  .changelog-content a:hover {
    text-decoration: underline;
  }
  .changelog-content ul {
    list-style-type: disc;
    margin: 4px 0; 
    padding-left: 20px;
  }
  .changelog-content ul ul {
    list-style-type: circle;
    margin: 4px 0; p
    adding-left: 20px;
  }
  .changelog-content li {
    padding: 4px 0;
  }
  .changelog-content h3, .changelog-content h4 {
    margin: 16px 0 8px 0; 
    font-size: 13px; 
    font-weight: 600;
  }
`;

interface Section {
  version: string;
  content: string;
}

function parseChangelog(markdown: string): Section[] {
  const sections: Section[] = [];
  const lines = markdown.split('\n');
  let current: Section | null = null;

  lines.forEach((line) => {
    if (line.startsWith('## ')) {
      if (current) sections.push(current);
      current = { version: line.replace('## ', ''), content: '' };
    } else if (current) {
      current.content += line + '\n';
    }
  });

  if (current) sections.push(current);
  return sections;
}

function markdownToHtml(md: string): string {
  let html = md
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^  - (.+)$/gim, '<linested>$1</linested>')
    .replace(/^\- (.+)$/gim, '<li>$1</li>');

  html = html.replace(/(<linested>.*?<\/linested>(?:\n<linested>.*?<\/linested>)*)/gs, '<ul>$1</ul>');
  html = html.replace(/<linested>/g, '<li>').replace(/<\/linested>/g, '</li>');
  html = html.replace(/(<li>.*?<\/li>(?:\n<li>.*?<\/li>)*)/gs, '<ul>$1</ul>');

  html = html
    .replace(/\n\n/g, '<br>')
    .replace(/\n/g, ' ')
    .replace(/<br>\s*<\/ul>/g, '</ul>')
    .replace(/<\/ul>\s*<br>/g, '</ul>')
    .replace(/<br>\s*<ul/g, '<ul')
    .replace(/<\/h4>\s*<br>/g, '</h4>')
    .replace(/<\/h4>\s*<br>/g, '</h3>');

  return html;
}

const Accordion: React.FC<{ section: Section; defaultOpen: boolean; index: number }> = ({
  section,
  defaultOpen,
  index
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const headerId = `changelog-heading-${index}`;
  const collapseId = `changelog-collapse-${index}`;

  return (
    <div style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
      <h3 id={headerId} style={{ margin: 0 }}>
        <button
          className="changelog-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={collapseId}
          style={{
            width: '100%',
            padding: '12px 16px',
            background: 'transparent',
            border: 'none',
            textAlign: 'left',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#333',
          }}
        >
          <span>{section.version}</span>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            aria-hidden="true"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
            }}
          >
            <path
              d="M2 3L5 6L8 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </button>
      </h3>
      {isOpen && (
        <div
          id={collapseId}
          role="region"
          aria-labelledby={headerId}
          className="changelog-content"
          style={{
            padding: '0 16px 16px 16px',
            fontSize: '13px',
            color: '#333',
            lineHeight: 1.6,
          }}
          dangerouslySetInnerHTML={{ __html: markdownToHtml(section.content) }}
        />
      )}
    </div>
  );
};

const ChangelogPanel: React.FC<{ active: boolean }> = ({ active }) => {
  const changelog = useParameter<string>('changelog', '');

  if (!active) return null;

  if (!changelog) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: '#999', fontSize: '13px' }}>
        Nessun changelog disponibile
      </div>
    );
  }

  const sections = parseChangelog(changelog);

  return (
    <>
      <style>{styles}</style>
      <div style={{
        height: '100%',
        overflowY: 'auto',
      }}>
        {sections.map((section, index) => (
          <Accordion
            key={section.version}
            section={section}
            defaultOpen={index === 0}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Changelog',
    render: ({ active, key }) => <ChangelogPanel active={active} key={key} />,
  });
});