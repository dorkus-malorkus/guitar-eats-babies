





const Site = {

  clearContent: () => {

    let elIds = [
      'page-content-home',
      'page-content-services',
      'page-content-gallery',
      //'page-content-testimonials',
      'page-content-aboutus',
      //'page-content-resources',
      'page-content-pricing',
    ];

    elIds.forEach((elId) => {
      let el = document.getElementById(elId);

      let btnElId = [elId.match(/(?!=-)[a-z]*$/).toString(), 'header', 'button'].join('-');
      let btnEl = document.getElementById(btnElId);


      btnEl.classList.remove('selected');
      el.classList.add('inactive');
    });

  },

  showContent: (elId) => {
    Site.clearContent();

    let el = document.getElementById(elId);

      let btnElId = [elId.match(/(?!=-)[a-z]*$/).toString(), 'header', 'button'].join('-');
    let btnEl = document.getElementById(btnElId);

    btnEl.classList.add('selected');
    el.classList.remove('inactive');
  },

  showHomeContent: () => {
    let id = 'page-content-home'

    Site.showContent(id);
  },

  showServicesContent: () => {
    let id = 'page-content-services'

    Site.showContent(id);
  },

  showGalleryContent: () => {
    let id = 'page-content-gallery'

    Site.showContent(id);
  },

  //showTestimonialsContent: () => {
  //  let id = 'page-content-testimonials';
  //
  //  Site.showContent(id);
  //},

  showAboutUsContent: () => {
    let id = 'page-content-aboutus';

    Site.showContent(id);
  },

  //showResourcesContent: () => {
  //  let id = 'page-content-resources'
  //
  //  Site.showContent(id);
  //},

  showPricingContent: () => {
    let id = 'page-content-pricing'

    Site.showContent(id);
  },

  showContactusContent: () => {
    let id = 'page-content-contactus';

    Site.showContent(id);
  },


};
