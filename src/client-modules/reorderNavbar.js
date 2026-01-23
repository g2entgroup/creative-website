/**
 * Reorder navbar items: Launch Apps, Color Mode Toggle, (other items), Search
 * This ensures the color mode toggle appears after Launch Apps and Search is always last
 */

if (typeof window !== 'undefined') {
  let isReordering = false;
  let reorderTimeout = null;

  function reorderNavbarItems() {
    // Prevent infinite loops
    if (isReordering) {
      return;
    }

    const rightNavbarItems = document.querySelector('.navbar__items--right');
    if (!rightNavbarItems) {
      return;
    }

    // Get all navbar items
    const items = Array.from(rightNavbarItems.children);
    
    // Find each item type
    let dropdownItem = null;
    let colorModeItem = null;
    let searchItem = null;
    const otherItems = [];

    items.forEach((item) => {
      // Check if it's the dropdown (Launch Apps)
      if (item.classList.contains('navbar__item--dropdown')) {
        dropdownItem = item;
      }
      // Check if it's the search
      else if (item.querySelector('.navbar__search')) {
        searchItem = item;
      }
      // Check if it's the color mode toggle (has clean-btn button with aria-label containing "dark" or "light")
      else if (item.querySelector('button[class*="clean-btn"][aria-label*="dark"], button[class*="clean-btn"][aria-label*="light"]')) {
        colorModeItem = item;
      }
      else {
        otherItems.push(item);
      }
    });

    // Check if reordering is needed
    // Order: Launch Apps, Color Mode Toggle, Other Items, Search (last)
    const orderedItems = [];
    if (dropdownItem) orderedItems.push(dropdownItem);
    if (colorModeItem) orderedItems.push(colorModeItem);
    orderedItems.push(...otherItems);
    if (searchItem) orderedItems.push(searchItem);

    // Only reorder if the order is different
    let needsReorder = false;
    for (let i = 0; i < orderedItems.length; i++) {
      if (rightNavbarItems.children[i] !== orderedItems[i]) {
        needsReorder = true;
        break;
      }
    }

    if (!needsReorder) {
      return;
    }

    // Re-append in the correct order
    isReordering = true;
    orderedItems.forEach((item) => {
      rightNavbarItems.appendChild(item);
    });
    
    // Reset flag after a short delay
    setTimeout(() => {
      isReordering = false;
    }, 100);
  }

  function debouncedReorder() {
    if (reorderTimeout) {
      clearTimeout(reorderTimeout);
    }
    reorderTimeout = setTimeout(reorderNavbarItems, 50);
  }

  // Run on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      reorderNavbarItems();
      // Set up observer after initial load
      setupObserver();
    });
  } else {
    reorderNavbarItems();
    setupObserver();
  }

  // Also run after navigation (for SPA behavior)
  window.addEventListener('load', reorderNavbarItems);
  
  function setupObserver() {
    // Use MutationObserver to handle dynamic content
    const navbarContainer = document.querySelector('.navbar__items--right');
    if (navbarContainer) {
      const observer = new MutationObserver(debouncedReorder);
      observer.observe(navbarContainer, {
        childList: true
      });
    }
  }
}
