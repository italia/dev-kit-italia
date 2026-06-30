import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-transfer',
  standalone: true,
  templateUrl: './transfer.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TransferComponent implements AfterViewInit, OnDestroy {
  @ViewChild('transferCancelable') transferCancelableRef!: ElementRef;
  @ViewChild('transferAsync') transferAsyncRef!: ElementRef;

  transferStatus = '';
  asyncStatus = '';
  private _onTransfer!: (e: Event) => void;
  private _onTransferAsync!: (e: Event) => void;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this._onTransfer = (e: Event) => {
      const event = e as CustomEvent<{ action: string; target: string[] }>;
      if (event.detail.action === 'transfer' && event.detail.target.length > 3) {
        event.preventDefault();
        this.transferStatus = 'Limite di 3 elementi nel target raggiunto.';
      } else {
        this.transferStatus = '';
      }
      this.cdr.detectChanges();
    };
    this.transferCancelableRef.nativeElement.addEventListener('it-transfer', this._onTransfer);

    this._onTransferAsync = (e: Event) => {
      const event = e as CustomEvent<{ action: string; source: string[]; target: string[]; items: string[] }>;
      const el = this.transferAsyncRef.nativeElement;
      event.preventDefault();
      this.asyncStatus = 'Attendere conferma…';
      this.cdr.detectChanges();
      setTimeout(() => {
        el.commit(event.detail);
        this.asyncStatus = '';
        this.cdr.detectChanges();
      }, 1000);
    };
    this.transferAsyncRef.nativeElement.addEventListener('it-transfer', this._onTransferAsync);
  }

  ngOnDestroy(): void {
    this.transferCancelableRef?.nativeElement.removeEventListener('it-transfer', this._onTransfer);
    this.transferAsyncRef?.nativeElement.removeEventListener('it-transfer', this._onTransferAsync);
  }
}
