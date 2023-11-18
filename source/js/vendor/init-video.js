function findVideos() {
  let videos = document.querySelectorAll('[data-video="video-container"]');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
    let link = video.querySelector('[data-video="video-link"]');
    let media = video.querySelector('[data-video="video-media"]');
    let button = video.querySelector(".about__iframe-button");
    let id = parseMediaURL(link.href);  
    button.addEventListener("click", () => {
      let iframe = createIframe(id);
  
      link.remove();
      button.remove();
      video.appendChild(iframe);
    });
  }

function parseMediaURL(url) {
    let videoId = null;

    let match = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    videoId = match ? match[1] : null;

    if (!videoId) {
        match = url.match(/youtube\/([a-zA-Z0-9_-]+)/);
        videoId = match ? match[1] : null;
    }

    if (videoId) {
        return videoId;
    } else {
        console.error('Ошибка при извлечении идентификатора видео.');
        return null;
    }
}

function createIframe(id) {
  let iframe = document.createElement("iframe");

  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("allow", "autoplay");
  iframe.setAttribute("src", generateURL(id));
  iframe.classList.add("about__iframe");

  iframe.style.zIndex = 10;

  return iframe;
}

function generateURL(id) {
  let query = "?rel=0&showinfo=0&autoplay=1";

  return "https://www.youtube.com/embed/" + id + query;
}

export { findVideos };
