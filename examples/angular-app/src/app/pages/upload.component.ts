import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

const THUMBS = [
  'https://picsum.photos/seed/upload1/128/128',
  'https://picsum.photos/seed/upload2/128/128',
  'https://picsum.photos/seed/upload3/128/128',
  'https://picsum.photos/seed/upload4/128/128',
];

@Component({
  selector: 'app-upload',
  standalone: true,
  templateUrl: './upload.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UploadComponent implements AfterViewInit, OnDestroy {
  @ViewChild('uploadStates') uploadStates!: ElementRef;
  @ViewChild('uploadGalleryFilled') uploadGalleryFilled!: ElementRef;
  @ViewChild('ddLoading') ddLoading!: ElementRef;
  @ViewChild('ddSuccess') ddSuccess!: ElementRef;
  @ViewChild('ddInteractive') ddInteractive!: ElementRef;
  @ViewChild('btnSimulate') btnSimulate!: ElementRef;
  @ViewChild('uploadForm') uploadForm!: ElementRef;
  @ViewChild('uploadFormResult') uploadFormResult!: ElementRef;

  private _simTimer: ReturnType<typeof setInterval> | undefined;

  ngAfterViewInit() {
    setTimeout(() => this._init(), 0);
  }

  private async _init() {
    // Upload con stati file
    const upload = this.uploadStates?.nativeElement;
    if (upload) {
      if (upload.updateComplete) await upload.updateComplete;
      const id1 = upload.addFile(new File(['x'.repeat(71_303_168)], 'nome-file-01.jpg', { type: 'image/jpeg' }));
      const id2 = upload.addFile(new File(['x'.repeat(9_437_184)], 'nome-file-02-nome-file-lungo-per-ellissi.jpg', { type: 'image/jpeg' }));
      const id3 = upload.addFile(new File(['x'.repeat(3_145_728)], 'nome-file-03.jpg', { type: 'image/jpeg' }));
      const id4 = upload.addFile(new File(['x'.repeat(2_097_152)], 'nome-file-04.jpg', { type: 'image/jpeg' }));
      upload.setFileStatus(id1, 'success');
      upload.setFileStatus(id2, 'success');
      upload.setFileStatus(id3, 'loading', 43);
      upload.setFileStatus(id4, 'error');
      upload.setFileThumbnail(id1, THUMBS[0]);
      upload.setFileThumbnail(id2, THUMBS[1]);
      upload.setFileThumbnail(id3, THUMBS[2]);
      upload.setFileThumbnail(id4, THUMBS[3]);
    }

    // Gallery pre-filled
    const gallery = this.uploadGalleryFilled?.nativeElement;
    if (gallery) {
      if (gallery.updateComplete) await gallery.updateComplete;
      const g1 = gallery.addFile(new File(['x'], 'foto-01.jpg', { type: 'image/jpeg' }));
      const g2 = gallery.addFile(new File(['x'], 'foto-02.jpg', { type: 'image/jpeg' }));
      gallery.setFileThumbnail(g1, THUMBS[0]);
      gallery.setFileThumbnail(g2, THUMBS[1]);
      gallery.setFileStatus(g1, 'success');
      gallery.setFileStatus(g2, 'success');
    }

    // DD loading state
    const ddLoading = this.ddLoading?.nativeElement;
    if (ddLoading) ddLoading.start();

    // DD success state
    const ddSuccess = this.ddSuccess?.nativeElement;
    if (ddSuccess) {
      ddSuccess.start();
      ddSuccess.progress(1);
      ddSuccess.success();
    }

    // DD interactive
    const dd = this.ddInteractive?.nativeElement;
    const btn = this.btnSimulate?.nativeElement;
    if (dd && btn) {
      const simulate = () => {
        clearInterval(this._simTimer);
        dd.reset();
        dd.start();
        let p = 0;
        this._simTimer = setInterval(() => {
          p = Math.min(1, p + 0.1);
          dd.progress(p);
          if (p >= 1) {
            clearInterval(this._simTimer);
            setTimeout(() => dd.success(), 500);
          }
        }, 300);
      };
      btn.addEventListener('click', simulate);
      dd.addEventListener('it-dd-drop', (e: Event) => { e.preventDefault(); simulate(); });
    }

    // Form submit
    const form = this.uploadForm?.nativeElement;
    const result = this.uploadFormResult?.nativeElement;
    if (form) {
      form.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        if (result) result.innerHTML = '<strong style="color: green;">✔ Form inviato con successo!</strong>';
      });
    }
  }

  ngOnDestroy() {
    clearInterval(this._simTimer);
  }
}
