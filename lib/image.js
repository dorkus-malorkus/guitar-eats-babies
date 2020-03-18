

class Image {

  static preload(imgURL) {

    let promise = new Promise((resolve, reject) => {
      let img = document.createElement('img');

      img.onload = resolve.bind(this, img);
      img.src = imgURL;
    });

    return promise;
  }

  static updateHeader(imgEl) {
    let el = document.getElementById('page-header-image');

    imgEl.classList.add('inactive');

    el.prepend(imgEl);
  }

  static nextHeaderImage() {
    let headerFiles = Content.HeaderImages;
    let randomIdx = Math.floor(Math.random() * headerFiles.length);
    let storedIdx = Cookie.get('headerImg');

    let curImgIdx = storedIdx || randomIdx;
    let newImgIdx = Math.floor(Math.random() * headerFiles.length);

    let els = document.getElementById('page-header-image')
      .getElementsByTagName('img');

    els[curImgIdx].classList.add('inactive');
    els[newImgIdx].classList.remove('inactive');

    Cookie.set('headerImg', newImgIdx, 3600);

    clearTimeout(window.headerImgTimeout);
    window.headerImgTimeout = setTimeout(this.nextHeaderImage, 12000);
  }

}
