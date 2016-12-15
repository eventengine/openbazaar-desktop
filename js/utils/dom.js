// todo: check args and write unit test
// http://stackoverflow.com/a/21627295/632806
export function isScrolledIntoView(element) {
  let rect = element.getBoundingClientRect();
  const top = rect.top;
  const height = rect.height;
  let el = element.parentNode;

  do {
    rect = el.getBoundingClientRect();

    if (top <= rect.bottom === false) return false;

    // Check if the element is out of view due to a container scrolling
    if ((top + height) <= rect.top) return false;

    el = el.parentNode;
  } while (el !== document.body);
  // Check its within the document viewport
  return top <= document.documentElement.clientHeight;
}

// This is a partial alternative to $.parents() with the added
// benefit that it will stop going up the ancestor chain once
// it finds the element it's seeking.
export function findAncestorByTag(el, tag) {
  if (!el instanceof HTMLElement) {
    throw new Error('Please provide a DOM element.');
  }

  if (typeof tag !== 'string') {
    throw new Error('Please provide a tag name as a string.');
  }

  let ancestor = el.parentElement;

  while (ancestor && !ancestor.tagName === tag.toUpperCase()) {
    ancestor = ancestor.parentElement;
  }

  return ancestor;
}
