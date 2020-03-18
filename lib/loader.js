


window['._static_template_objects'] = {
  header: new WebTemplate(),
  menu: new WebTemplate(),
  footer: new WebTemplate(),
  aboutus: new WebTemplate(),
  contactus: new WebTemplate(),
  gallery: new WebTemplate(),
  home: new WebTemplate(),
  pricing: new WebTemplate(),
  services: new WebTemplate(),
  testimonials: new WebTemplate(),
};

class Loader {

  static get TemplateObjects() {
    return window['._static_template_objects'];
  }

  static loadTemplates() {
    let templates = this.TemplateObjects;

    return {
      header: templates.header
        .load('templ/page-header-image.html.template'),

      menu: templates.menu
        .load('templ/page-header-menu.html.template'),

      footer: templates.footer
        .load('templ/page-footer.html.template'),

      aboutus: templates.aboutus
        .load('templ/aboutus.html.template'),

      contactus: templates.contactus
        .load('templ/contactus.html.template'),

      gallery: templates.gallery
        .load('templ/gallery.html.template'),

      home: templates.home
        .load('templ/home.html.template'),

      pricing: templates.pricing
        .load('templ/pricing.html.template'),

      services: templates.services
        .load('templ/services.html.template'),

      testimonials: templates.testimonials
        .load('templ/testimonials.html.template'),

    };

  }

}
