

class Page {

  static updateContent(pageId) {
    let template = Loader.TemplateObjects[pageId];
    let promise = window.promises[pageId];

    let contentEl = document.getElementById('page-content');

    Cookie.set('page', pageId, 3600);

    contentEl.innerHTML = '';

    promise.then(
      template.render.bind(templates.header, contentEl)
    );

  }

}
