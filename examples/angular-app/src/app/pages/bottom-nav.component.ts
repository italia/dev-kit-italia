import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './bottom-nav.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BottomNavComponent {
  previewStyle = {
    transform: 'translateZ(0)',
    overflow: 'hidden',
    position: 'relative',
    height: '200px',
    width: '100%',
    maxWidth: '400px',
    background: '#f5f5f5',
    border: '1px solid #cecece',
    marginBottom: '2rem',
  };

  previewContentStyle = {
    height: 'calc(100% - var(--it-bottom-nav-height, 64px))',
    overflowY: 'scroll',
  };

  scrollAreaStyle = {
    height: '400px',
    padding: '1rem',
    color: '#666',
    fontSize: '0.875rem',
  };
}
