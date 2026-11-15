(() => {
  'use strict';
  const originalRecipes = window.RECIPES || [];
  const chapters = (window.CHAPTERS || []).map(chapter => ({ ...chapter }));
  originalRecipes.forEach(recipe => {
    recipe.chapter ||= 'weitere';
    if (!chapters.some(chapter => chapter.id === recipe.chapter)) {
      chapters.push({ id: recipe.chapter || 'weitere', title: recipe.category || 'Weitere Rezepte', description: '' });
    }
  });
  const recipes = chapters.flatMap(chapter => originalRecipes.filter(recipe => recipe.chapter === chapter.id));
  const chapterFor = recipe => chapters.find(chapter => chapter.id === recipe.chapter);

  const $ = id => document.getElementById(id);
  const storageKey = 'unser-kochbuch:bookmarks:v1';
  let bookmarks = new Set();
  let storageAvailable = true;
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    if (Array.isArray(saved)) bookmarks = new Set(saved.filter(id => typeof id === 'string'));
  } catch { storageAvailable = false; }
  let current = -1;
  let savedOnly = false;
  const dialog = $('index-dialog');
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('de').replace(/ß/g, 'ss');
  function element(tag, text, className) {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  }
  function recipePage(index) { return String(index * 2 + 3).padStart(2, '0'); }
  function position() {
    $('page-position').textContent = current < 0 ? 'Inhaltsverzeichnis' : `${chapterFor(recipes[current]).title} · Rezept ${current + 1} von ${recipes.length}`;
  }
  function renderContents() {
    const activeChapters = chapters.filter(chapter => recipes.some(recipe => recipe.chapter === chapter.id));
    $('toc-summary').textContent = `${activeChapters.length} Kapitel · ${recipes.length} ${recipes.length === 1 ? 'Rezept' : 'Rezepte'}`;
    $('toc-empty').hidden = recipes.length > 0;
    $('chapter-list').replaceChildren(...activeChapters.map((chapter, number) => {
      const link = element('a', undefined, 'chapter-link');
      link.href = `#kapitel/${encodeURIComponent(chapter.id)}`;
      link.append(element('span', String(number + 1).padStart(2, '0')), element('span', chapter.title), element('small', `${recipes.filter(recipe => recipe.chapter === chapter.id).length} Rezepte`));
      return link;
    }));
    $('toc-chapters').replaceChildren(...activeChapters.map((chapter, number) => {
      const section = element('section', undefined, 'toc-chapter');
      const heading = element('h2', `${String(number + 1).padStart(2, '0')} · ${chapter.title}`);
      heading.id = `chapter-${chapter.id}`;
      heading.tabIndex = -1;
      const list = element('ol', undefined, 'toc-recipes');
      recipes.forEach((recipe, index) => {
        if (recipe.chapter !== chapter.id) return;
        const li = element('li');
        const link = element('a');
        link.href = `#${encodeURIComponent(recipe.id)}`;
        const title = element('span', recipe.title.replace(/\n/g, ' '));
        const page = element('span', recipePage(index), 'toc-page');
        page.setAttribute('aria-label', `Seite ${Number(recipePage(index))}`);
        link.append(title, page);
        li.append(link); list.append(li);
      });
      section.append(heading, element('p', chapter.description || '', 'chapter-description'), list);
      return section;
    }));
    $('chapter-filter').replaceChildren(element('option', 'Alle Kapitel'), ...activeChapters.map(chapter => {
      const option = element('option', chapter.title); option.value = chapter.id; return option;
    }));
    $('chapter-filter').firstElementChild.value = '';
  }
  function updateBookmark() {
    const saved = bookmarks.has(recipes[current].id);
    $('bookmark').setAttribute('aria-pressed', String(saved));
    $('bookmark').setAttribute('aria-label', saved ? 'Lesezeichen entfernen' : 'Lesezeichen setzen');
    $('bookmark').title = saved ? 'Lesezeichen entfernen' : 'Lesezeichen setzen';
  }
  function render(animate = false, direction = 'next') {
    const home = current < 0;
    $('toc-book').hidden = !home;
    $('book').hidden = home;
    $('bookmark').hidden = home;
    $('back-to-index').hidden = home;
    $('mobile-sections').hidden = home;
    document.body.classList.toggle('contents-view', home);
    $('previous').disabled = home;
    $('next').disabled = !recipes.length || current === recipes.length - 1;
    $('print-recipe').setAttribute('aria-label', home ? 'Inhaltsverzeichnis drucken' : 'Geöffnetes Rezept drucken');
    position();
    if (home) {
      document.title = 'Inhaltsverzeichnis · Unser Kochbuch';
      $('chapter').textContent = 'Inhaltsverzeichnis';
      return;
    }
    const recipe = recipes[current];
    $('recipe-title').textContent = recipe.title;
    document.title = `${recipe.title.replace(/\n/g, ' ')} · Unser Kochbuch`;
    $('recipe-category').textContent = recipe.category;
    $('chapter').textContent = chapterFor(recipe).title;
    $('recipe-description').textContent = recipe.description || '';
    $('recipe-image').src = recipe.image || 'assets/kitchen.svg';
    $('recipe-image').alt = recipe.imageAlt || '';
    $('image-caption').textContent = recipe.imageCaption || '';
    $('servings').textContent = recipe.servings || '';
    $('ingredients-note').textContent = recipe.ingredientsNote || '';
    let previousGroup = '';
    $('ingredients').replaceChildren(...recipe.ingredients.flatMap(ingredient => {
      const nodes = [];
      if (ingredient.group && ingredient.group !== previousGroup) {
        const heading = element('li', undefined, 'ingredient-group');
        heading.append(element('h3', ingredient.group));
        nodes.push(heading);
      }
      previousGroup = ingredient.group || '';
      const li = element('li');
      li.append(element('span', ingredient.amount), element('span', ingredient.name));
      return [...nodes, li];
    }));
    $('recipe-meta').replaceChildren(...(recipe.meta || []).map(item => element('span', item)));
    $('steps').replaceChildren(...recipe.steps.map(step => {
      const li = element('li');
      li.append(element('h3', step.title), element('p', step.text));
      return li;
    }));
    $('recipe-tip').textContent = recipe.tip || '';
    $('recipe-tip').hidden = !recipe.tip;
    const source = $('recipe-source');
    source.replaceChildren();
    source.hidden = true;
    if (recipe.source?.label) {
      source.append(element('span', 'Quelle · '), element('span', recipe.source.label));
      if (recipe.source.note) source.append(element('small', recipe.source.note));
      source.hidden = false;
    }
    if (recipe.source?.url) {
      try {
        const url = new URL(recipe.source.url);
        if (url.protocol === 'https:') {
          const link = element('a', recipe.source.label || 'Originalrezept');
          link.href = url.href;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          source.replaceChildren(element('span', 'Quelle · '), link, element('small', 'Originalrezept online öffnen ↗'));
          source.hidden = false;
        }
      } catch { /* Ohne gültigen HTTPS-Link keine Quelle anzeigen. */ }
    }

    $('left-number').textContent = recipePage(current);
    $('right-number').textContent = String(current * 2 + 4).padStart(2, '0');
    updateBookmark();
    if (animate) {
      $('book').classList.remove('turn-next', 'turn-previous');
      void $('book').offsetWidth;
      $('book').classList.add(`turn-${direction}`);
      $('announcement').textContent = `Geöffnet: ${recipe.title.replace(/\n/g, ' ')}`;
    }
  }
  function fromHash() {
    let id = '';
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { /* Ungültiger Link öffnet das Inhaltsverzeichnis. */ }
    const previous = current;
    current = recipes.findIndex(recipe => recipe.id === id);
    render(true, current < previous ? 'previous' : 'next');
    const chapterId = id.startsWith('kapitel/') ? id.slice(8) : null;
    const target = current < 0 ? (chapterId && document.getElementById(`chapter-${chapterId}`)) || $('toc-title') : $('recipe-title');
    target.focus({ preventScroll: true });
    if (chapterId || matchMedia('(max-width: 650px)').matches) target.scrollIntoView({ block: 'start' });
  }
  function go(index) {
    if (index < -1 || index >= recipes.length || index === current) return;
    location.hash = index < 0 ? 'inhaltsverzeichnis' : encodeURIComponent(recipes[index].id);
  }
  function results() {
    const query = normalize($('search').value.trim());
    const matches = recipes.filter(recipe => {
      const haystack = normalize([recipe.title, recipe.category, chapterFor(recipe).title, recipe.description, recipe.source?.label || '',
        ...recipe.ingredients.map(item => `${item.group || ''} ${item.name}`), ...recipe.steps.map(step => `${step.title} ${step.text}`)].join(' '));
      return (!$('chapter-filter').value || recipe.chapter === $('chapter-filter').value) && (!savedOnly || bookmarks.has(recipe.id)) && query.split(/\s+/).every(term => haystack.includes(term));
    });
    $('search-summary').textContent = matches.length ? `${matches.length} ${matches.length === 1 ? 'Eintrag' : 'Einträge'} gefunden` : savedOnly ? 'Keine passenden Lesezeichen. Merke dir eine Seite über das Band oben rechts.' : 'Keine Treffer. Versuche einen anderen Suchbegriff.';
    $('results').replaceChildren(...matches.map(recipe => {
      const li = element('li');
      const button = element('button', undefined, 'result-button');
      const title = element('span', recipe.title.replace(/\n/g, ' '));
      title.append(element('small', chapterFor(recipe).title));
      button.append(title, element('span', bookmarks.has(recipe.id) ? '◆' : '→'));
      button.addEventListener('click', () => {
        dialog.close();
        go(recipes.indexOf(recipe));
        // Auch bei Auswahl der bereits geöffneten Seite den Buchanfang fokussieren.
        requestAnimationFrame(() => $('recipe-title').focus({ preventScroll: false }));
      });
      li.append(button);
      return li;
    }));
  }
  $('open-index').addEventListener('click', () => { results(); dialog.showModal(); $('search').focus(); });
  $('close-index').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
  $('search').addEventListener('input', results);
  $('chapter-filter').addEventListener('change', results);
  function filter(saved) {
    savedOnly = saved;
    $('all-filter').setAttribute('aria-pressed', String(!saved));
    $('saved-filter').setAttribute('aria-pressed', String(saved));
    results();
  }
  $('all-filter').addEventListener('click', () => filter(false));
  $('saved-filter').addEventListener('click', () => filter(true));
  $('bookmark').addEventListener('click', () => {
    if (current < 0) return;
    const id = recipes[current].id;
    bookmarks.has(id) ? bookmarks.delete(id) : bookmarks.add(id);
    try { localStorage.setItem(storageKey, JSON.stringify([...bookmarks])); storageAvailable = true; }
    catch { storageAvailable = false; }
    updateBookmark();
    $('announcement').textContent = `${bookmarks.has(id) ? 'Lesezeichen gesetzt.' : 'Lesezeichen entfernt.'}${storageAvailable ? '' : ' Der Browser erlaubt keine dauerhafte Speicherung. Das Lesezeichen gilt nur bis zum Neuladen.'}`;
    if (!storageAvailable) document.querySelector('.storage-note').textContent = 'Der Browser erlaubt keine dauerhafte Speicherung. Lesezeichen gelten nur bis zum Neuladen.';
  });
  document.querySelectorAll('[data-section]').forEach(button => {
    button.addEventListener('click', () => {
      const target = $(button.dataset.section);
      target.focus({ preventScroll: true });
      target.scrollIntoView({ block: 'start' });
    });
  });
  $('print-recipe').addEventListener('click', () => window.print());
  $('previous').addEventListener('click', () => go(current - 1));
  $('next').addEventListener('click', () => go(current + 1));
  document.addEventListener('keydown', event => {
    if (dialog.open || $('install-dialog').open || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName) || event.target.isContentEditable) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault(); go(current + (event.key === 'ArrowLeft' ? -1 : 1));
    }
  });
  let start = null;
  [$('book'), $('toc-book')].forEach(surface => {
  surface.addEventListener('touchstart', event => {
    start = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
  }, { passive: true });
  surface.addEventListener('touchmove', event => { if (event.touches.length !== 1) start = null; }, { passive: true });
  surface.addEventListener('touchcancel', () => { start = null; });
  surface.addEventListener('touchend', event => {
    if (!start || event.touches.length) return;
    const dx = event.changedTouches[0].clientX - start.x;
    const dy = event.changedTouches[0].clientY - start.y;
    start = null;
    if (Math.abs(dx) > 65 && Math.abs(dx) > Math.abs(dy) * 1.5 && !window.getSelection()?.toString()) go(current + (dx < 0 ? 1 : -1));
  }, { passive: true });
  });
  $('recipe-image').addEventListener('error', () => {
    if (!$('recipe-image').src.endsWith('/assets/kitchen.svg')) $('recipe-image').src = 'assets/kitchen.svg';
  });
  window.addEventListener('hashchange', fromHash);
  renderContents();
  $('recipe-count').textContent = recipes.length;
  fromHash();
})();
