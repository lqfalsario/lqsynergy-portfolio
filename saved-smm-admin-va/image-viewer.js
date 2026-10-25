(function () {
  'use strict';

  if (!document.querySelector('a[data-image-viewer]') || document.getElementById('lq-image-viewer-dialog')) return;

  const dialog = document.createElement('dialog');
  // Without native dialog support the existing image hrefs remain usable.
  if (typeof dialog.showModal !== 'function') return;

  dialog.id = 'lq-image-viewer-dialog';
  dialog.className = 'lq-image-viewer';
  dialog.setAttribute('aria-labelledby', 'lq-image-viewer-title');
  dialog.setAttribute('aria-describedby', 'lq-image-viewer-help');
  dialog.innerHTML = `
    <div class="lq-image-viewer__surface">
      <div class="lq-image-viewer__toolbar">
        <div class="lq-image-viewer__heading">
          <p class="lq-image-viewer__eyebrow">Work sample</p>
          <h2 class="lq-image-viewer__title" id="lq-image-viewer-title">Image preview</h2>
        </div>
        <div class="lq-image-viewer__actions">
          <button class="lq-image-viewer__button lq-image-viewer__zoom" type="button" aria-pressed="false" aria-controls="lq-image-viewer-stage" disabled>Zoom in</button>
          <button class="lq-image-viewer__button lq-image-viewer__close" type="button" aria-label="Close image preview" autofocus>Close <span aria-hidden="true">Ã—</span></button>
        </div>
      </div>
      <div class="lq-image-viewer__stage" id="lq-image-viewer-stage" role="region" aria-label="Image preview" aria-busy="true" tabindex="0">
        <img class="lq-image-viewer__image" alt="" decoding="as¶»§q«^