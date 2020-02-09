



const Gallery = {

  headerFiles: [
    'http://cdn.eatsbabies.com/img/slideshows/header/austin-acoustic-saddle-angled.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/grey-ghost-pups-angled.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/serrania-saddle-angle-full.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/austin-acoustic-saddle-bridge-angled.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/grey-ghost-tuners.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/serrania-saddle-angle.png',
    //'http://cdn.eatsbabies.com/img/slideshows/header/bridge-angled.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/serrania-saddle-straight.png',
    //'http://cdn.eatsbabies.com/img/slideshows/header/bridge-straight.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/jackson-bridge-angled.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/strat-headstock.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/es335-bridge-pup-angled.png',
    //'http://cdn.eatsbabies.com/img/slideshows/header/jackson-bridge-electronics-angled.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/strat-headstock-view.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/es335-bridge-pup-straight.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/jackson-headstock-angle.png',
    //'http://cdn.eatsbabies.com/img/slideshows/header/strat-pups-bridgeview-angled.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/es335-electronics-angled.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/jackson-headstock-upside-down.png',
    //'http://cdn.eatsbabies.com/img/slideshows/header/strat-pups-bridgeview.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/es335-pups-sideview.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/jackson-scalloped-neck-closeup.png',
    //'http://cdn.eatsbabies.com/img/slideshows/header/strat-pups-bridgeview-straight.png',
    //'http://cdn.eatsbabies.com/img/slideshows/header/explorer-bridge-electronics.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/jackson-scalloped-neck.png',
    //'http://cdn.eatsbabies.com/img/slideshows/header/strat-pups-controls.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/explorer-bridge.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/neck-angled-headview.png',
    //'http://cdn.eatsbabies.com/img/slideshows/header/strat-pups-sideview.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/generic-acoustic-neck-angled.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/niceman-bridge-pups-angled.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/swap-o-rama-special-bridge-straight.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/generic-acoustic-top-angled.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/niceman-bridge-pups-straignt.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/swap-o-rama-special-electronics-angled.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/generic-acoustic-top-bridge-angled.png',
    //'http://cdn.eatsbabies.com/img/slideshows/header/niceman-bridge-straight.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/swap-o-rama-special-headstock-angled.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/generic-acoustic-top-saddle-angled.png',
    //'http://cdn.eatsbabies.com/img/slideshows/header/niceman-electronics.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/swap-o-rama-special-headstock-straight.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/generic-acoustic-top-ssaddle-angled.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/pups-angled.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/swap-o-rama-special-saddles-straight.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/generic-classical-neck-angled.png',
    //'http://cdn.eatsbabies.com/img/slideshows/header/rg540p-bridge-electronics-angled.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/swap-o-rama-special-top-angled.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/generic-classical-saddle-angled.png',
    //'http://cdn.eatsbabies.com/img/slideshows/header/rg540p-bridge-electronics-full.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/unfinished-les-paul-body-paint.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/generic-classical-saddle-straight-as-well.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/rg540p-bridge-view.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/unfinished-les-paul-electronics-angled.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/generic-classical-saddle-straight.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/rg540p-headstock-angled.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/unfinished-les-paul-neck-angled.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/generic-classical-soundhole-straight.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/rg540p-headstock-rear.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/unfinished-les-paul-pups-straight.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/generic-neck-longview-as-well.png',
    //'http://cdn.eatsbabies.com/img/slideshows/header/rg540p-pups-overview.png',
    //'http://cdn.eatsbabies.com/img/slideshows/header/washburn-bridge-angled.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/generic-neck-longview.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/serrania-neck-headstock-angle.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/washburn-electronics-bridge-angled-as-well.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/grey-ghost-bridge.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/serrania-neck-headstock-full-angle.png',
    //'http://cdn.eatsbabies.com/img/slideshows/header/washburn-electronics-bridge-angled.png',
    //'http://cdn.eatsbabies.com/img/slideshows/header/grey-ghost-electronics-angled.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/serrania-neck-longview-as-well.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/grey-ghost-electronics-pups-angled.png',
    'http://cdn.eatsbabies.com/img/slideshows/header/serrania-neck-longview.png',
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
