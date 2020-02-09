



const Gallery = {

  headerFiles: [
    'img/slideshows/header/austin-acoustic-saddle-angled.png',
    'img/slideshows/header/grey-ghost-pups-angled.png',
    'img/slideshows/header/serrania-saddle-angle-full.png',
    'img/slideshows/header/austin-acoustic-saddle-bridge-angled.png',
    'img/slideshows/header/grey-ghost-tuners.png',
    'img/slideshows/header/serrania-saddle-angle.png',
    //'img/slideshows/header/bridge-angled.png',
    'img/slideshows/header/serrania-saddle-straight.png',
    //'img/slideshows/header/bridge-straight.png',
    'img/slideshows/header/jackson-bridge-angled.png',
    'img/slideshows/header/strat-headstock.png',
    'img/slideshows/header/es335-bridge-pup-angled.png',
    //'img/slideshows/header/jackson-bridge-electronics-angled.png',
    'img/slideshows/header/strat-headstock-view.png',
    'img/slideshows/header/es335-bridge-pup-straight.png',
    'img/slideshows/header/jackson-headstock-angle.png',
    //'img/slideshows/header/strat-pups-bridgeview-angled.png',
    'img/slideshows/header/es335-electronics-angled.png',
    'img/slideshows/header/jackson-headstock-upside-down.png',
    //'img/slideshows/header/strat-pups-bridgeview.png',
    'img/slideshows/header/es335-pups-sideview.png',
    'img/slideshows/header/jackson-scalloped-neck-closeup.png',
    //'img/slideshows/header/strat-pups-bridgeview-straight.png',
    //'img/slideshows/header/explorer-bridge-electronics.png',
    'img/slideshows/header/jackson-scalloped-neck.png',
    //'img/slideshows/header/strat-pups-controls.png',
    'img/slideshows/header/explorer-bridge.png',
    'img/slideshows/header/neck-angled-headview.png',
    //'img/slideshows/header/strat-pups-sideview.png',
    'img/slideshows/header/generic-acoustic-neck-angled.png',
    'img/slideshows/header/niceman-bridge-pups-angled.png',
    'img/slideshows/header/swap-o-rama-special-bridge-straight.png',
    'img/slideshows/header/generic-acoustic-top-angled.png',
    'img/slideshows/header/niceman-bridge-pups-straignt.png',
    'img/slideshows/header/swap-o-rama-special-electronics-angled.png',
    'img/slideshows/header/generic-acoustic-top-bridge-angled.png',
    //'img/slideshows/header/niceman-bridge-straight.png',
    'img/slideshows/header/swap-o-rama-special-headstock-angled.png',
    'img/slideshows/header/generic-acoustic-top-saddle-angled.png',
    //'img/slideshows/header/niceman-electronics.png',
    'img/slideshows/header/swap-o-rama-special-headstock-straight.png',
    'img/slideshows/header/generic-acoustic-top-ssaddle-angled.png',
    'img/slideshows/header/pups-angled.png',
    'img/slideshows/header/swap-o-rama-special-saddles-straight.png',
    'img/slideshows/header/generic-classical-neck-angled.png',
    //'img/slideshows/header/rg540p-bridge-electronics-angled.png',
    'img/slideshows/header/swap-o-rama-special-top-angled.png',
    'img/slideshows/header/generic-classical-saddle-angled.png',
    //'img/slideshows/header/rg540p-bridge-electronics-full.png',
    'img/slideshows/header/unfinished-les-paul-body-paint.png',
    'img/slideshows/header/generic-classical-saddle-straight-as-well.png',
    'img/slideshows/header/rg540p-bridge-view.png',
    'img/slideshows/header/unfinished-les-paul-electronics-angled.png',
    'img/slideshows/header/generic-classical-saddle-straight.png',
    'img/slideshows/header/rg540p-headstock-angled.png',
    'img/slideshows/header/unfinished-les-paul-neck-angled.png',
    'img/slideshows/header/generic-classical-soundhole-straight.png',
    'img/slideshows/header/rg540p-headstock-rear.png',
    'img/slideshows/header/unfinished-les-paul-pups-straight.png',
    'img/slideshows/header/generic-neck-longview-as-well.png',
    //'img/slideshows/header/rg540p-pups-overview.png',
    //'img/slideshows/header/washburn-bridge-angled.png',
    'img/slideshows/header/generic-neck-longview.png',
    'img/slideshows/header/serrania-neck-headstock-angle.png',
    'img/slideshows/header/washburn-electronics-bridge-angled-as-well.png',
    'img/slideshows/header/grey-ghost-bridge.png',
    'img/slideshows/header/serrania-neck-headstock-full-angle.png',
    //'img/slideshows/header/washburn-electronics-bridge-angled.png',
    //'img/slideshows/header/grey-ghost-electronics-angled.png',
    'img/slideshows/header/serrania-neck-longview-as-well.png',
    'img/slideshows/header/grey-ghost-electronics-pups-angled.png',
    'img/slideshows/header/serrania-neck-longview.png',
  ],

  showPrevFrame(targEl) {
    let imgEls = targEl.getElementsByTagName('img');
    let imgAry = Array.from(imgEls);

    let imgIdx = imgAry.length - 1;
    while(imgAry[imgIdx].classList.contains('inactive')) {
      imgIdx--;
    }

    if (imgIdx > 0) {
      imgAry[imgIdx].classList.add('inactive');
      imgAry[imgIdx - 1].classList.remove('inactive');

      let btnEl = targEl.parentElement.getElementsByClassName('right')[0];

      btnEl.classList.remove('inactive');

      if (imgIdx == 1) {
        let btnEl = targEl.parentElement.getElementsByClassName('left')[0];

        btnEl.classList.add('inactive');
      }

    }

  },

  showNextFrame: (targEl) => {
    let imgEls = targEl.getElementsByTagName('img');
    let imgAry = Array.from(imgEls);

    let imgIdx = 0;
    while(imgAry[imgIdx].classList.contains('inactive')) {
      imgIdx++;
    }

    if (imgAry[imgIdx + 1]) {
      imgAry[imgIdx].classList.add('inactive');
      imgAry[++imgIdx].classList.remove('inactive');

      let btnEl = targEl.parentElement.getElementsByClassName('left')[0];

      btnEl.classList.remove('inactive');

      if ((imgIdx == imgAry.length - 1)) {
        let btnEl = targEl.parentElement.getElementsByClassName('right')[0];

        btnEl.classList.add('inactive');

      }

    }

  },

  randomizeHeaderImage: () => {
    let el = document.getElementById('page-header-image');
    let img = el.getElementsByTagName('img')[0];

    let imgSrc;
    do {
      let imgIdx = parseInt(Math.random() * Gallery.headerFiles.length);

      imgSrc = Gallery.headerFiles[imgIdx];
    } while (imgSrc == img.src);

    img.src = imgSrc;

  },

};
