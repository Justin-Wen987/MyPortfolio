const t = window.portfolioI18n.t;
const previews = [...document.querySelectorAll('.loop-preview')];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const dialog = document.querySelector('#video-dialog');
const fullVideo = document.querySelector('#full-video');
const videoStatus = document.querySelector('#video-status');
const imageDialog = document.querySelector('#image-dialog');
const enlargedImage = document.querySelector('#enlarged-image');
const imageStage = document.querySelector('.image-stage');
const zoomButton = document.querySelector('#image-zoom');
let lastTrigger;
let imageTrigger;

function updatePreview(video) {
  const button = video.closest('.preview').querySelector('.preview-toggle');
  const playing = !video.paused;
  const project = video.dataset.project || 'Project';
  button.classList.toggle('is-playing', playing);
  button.querySelector('span').textContent = playing ? t('Pause preview') : t('Play preview');
  button.setAttribute('aria-label', t(`${playing ? 'Pause' : 'Play'} preview: ${project}`));
}

function loadPreview(video) {
  if (!video.getAttribute('src')) video.src = video.dataset.src;
}

async function playPreview(video) {
  loadPreview(video);
  try {
    await video.play();
    video.closest('.preview').querySelector('.media-status').textContent = '';
  } catch {
    // Browsers can block autoplay. The visible Play preview button remains available.
    updatePreview(video);
  }
}

function syncPreview(video) {
  const shouldPlay = video.dataset.inView === 'true' &&
    video.dataset.userPaused !== 'true' && !reduceMotion.matches &&
    !document.hidden && !dialog.open && !imageDialog.open;
  if (shouldPlay) playPreview(video);
  else video.pause();
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.dataset.inView = String(entry.isIntersecting);
    syncPreview(entry.target);
  });
}, { threshold: 0.2 });

previews.forEach(video => {
  video.closest('.preview').querySelector('.preview-controls').hidden = false;
  video.addEventListener('play', () => updatePreview(video));
  video.addEventListener('pause', () => updatePreview(video));
  video.addEventListener('error', () => {
    video.closest('.preview').querySelector('.media-status').textContent = t('Preview unavailable. You can still open the full video.');
  });
  video.closest('.preview').querySelector('.preview-toggle').addEventListener('click', () => {
    if (video.paused) {
      video.dataset.userPaused = 'false';
      playPreview(video);
    } else {
      video.dataset.userPaused = 'true';
      video.pause();
    }
  });
  observer.observe(video);
});

document.addEventListener('visibilitychange', () => previews.forEach(syncPreview));
reduceMotion.addEventListener('change', () => previews.forEach(syncPreview));

document.querySelectorAll('[data-watch]').forEach(button => {
  button.addEventListener('click', () => {
    lastTrigger = button;
    document.querySelector('#video-dialog-title').textContent = button.dataset.title;
    dialog.querySelector('.dialog-fallback').href = button.dataset.watch;
    fullVideo.src = button.dataset.watch;
    fullVideo.muted = false;
    videoStatus.hidden = true;
    videoStatus.textContent = '';
    dialog.showModal();
    previews.forEach(video => video.pause());
    fullVideo.play().catch(() => {});
  });
});

fullVideo.addEventListener('error', () => {
  videoStatus.textContent = t('Video could not be loaded. Try opening it directly using the link below.');
  videoStatus.hidden = false;
});

document.querySelector('#video-dialog .dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => {
  fullVideo.pause();
  fullVideo.removeAttribute('src');
  fullVideo.load();
  previews.forEach(syncPreview);
  lastTrigger?.focus({ preventScroll: true });
});

document.querySelectorAll('main [data-image]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    imageTrigger = link;
    const sourceImage = link.querySelector('img');
    const project = link.closest('article')?.querySelector('h1, h3')?.textContent || 'Project';
    document.querySelector('#image-dialog-title').textContent = t(`${project} screenshot`);
    enlargedImage.alt = link.dataset.imageAlt || sourceImage.alt;
    document.querySelector('#image-caption').textContent = enlargedImage.alt;
    document.querySelector('#image-original').href = link.href;
    document.querySelector('#image-status').textContent = '';
    imageStage.classList.remove('is-zoomed');
    zoomButton.setAttribute('aria-pressed', 'false');
    zoomButton.textContent = t('Zoom in');
    zoomButton.disabled = true;
    enlargedImage.src = link.href;
    imageDialog.showModal();
    previews.forEach(video => video.pause());
    imageStage.scrollTo(0, 0);
  });
});

enlargedImage.addEventListener('load', () => { zoomButton.disabled = false; });
enlargedImage.addEventListener('error', () => {
  document.querySelector('#image-status').textContent = t('Image could not be loaded. Try opening the original image.');
});
zoomButton.addEventListener('click', () => {
  const zoomed = imageStage.classList.toggle('is-zoomed');
  zoomButton.setAttribute('aria-pressed', String(zoomed));
  zoomButton.textContent = zoomed ? t('Fit image') : t('Zoom in');
  imageStage.scrollTo(0, 0);
});
document.querySelector('#image-close').addEventListener('click', () => imageDialog.close());
imageDialog.addEventListener('close', () => {
  previews.forEach(syncPreview);
  imageTrigger?.focus({ preventScroll: true });
});

document.querySelectorAll('[data-copy-email]').forEach(button => {
  button.hidden = false;
  button.addEventListener('click', async () => {
    const email = 'wen.changyu@outlook.com';
    const status = button.closest('.email-actions').querySelector('.copy-status');
    let copied = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        copied = true;
      }
    } catch {
      // Local-file browsing or browser permissions can require the selection fallback.
    }
    if (!copied) {
      const selection = document.createElement('textarea');
      selection.value = email;
      selection.readOnly = true;
      selection.style.cssText = 'position:fixed;inset-inline-start:-9999px;';
      document.body.append(selection);
      selection.select();
      copied = document.execCommand('copy');
      selection.remove();
      button.focus({ preventScroll: true });
    }
    status.textContent = copied ? t('Email copied.') : t('Please select and copy the email address above.');
  });
});
