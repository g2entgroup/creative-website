import { liteClient as algoliasearch } from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import {
  searchBox,
  hits,
  pagination,
  configure,
  trendingItems,
  relatedProducts,
} from 'instantsearch.js/es/widgets';

import 'instantsearch.css/themes/satellite.css';

const searchClient = algoliasearch(
  'L057IAF2ES',
  '2b26fab9cd7ce56b126b883282923890'
);

const search = instantsearch({
  indexName: 'creative',
  searchClient,
  insights: true,
});

const docItemTemplate = (item, { html }) => html`
  <article class="recommend-hit" onClick="${() => { window.aa?.('clickedObjectIDs', { index: 'creative', eventName: 'Recommendation Clicked', objectIDs: [item.objectID] }); if (item.url) window.open(item.url, '_blank'); }}">
    <div class="recommend-hit-header">
      ${item.lvl0 ? html`<span class="recommend-hit-lvl0">${item.lvl0}</span>` : ''}
      ${item.lvl1 ? html`<span class="recommend-hit-lvl1"> › ${item.lvl1}</span>` : ''}
    </div>
    ${item.content ? html`<div class="recommend-hit-content">${item.content}</div>` : ''}
    ${item.url ? html`<span class="recommend-hit-link">View page →</span>` : ''}
  </article>
`;

search.addWidgets([
  searchBox({
    container: '#searchbox',
    placeholder: 'Search Creative docs, blog, and pages...',
  }),
  hits({
    container: '#hits',
    templates: {
      item: (hit, { html, components, sendEvent }) => html`
        <article class="hit" onClick="${() => { sendEvent('click', hit, 'Search Result Clicked'); if (hit.url) window.open(hit.url, '_blank'); }}">
          <div class="hit-header">
            ${hit.lvl0 ? html`<span class="hit-lvl0">${components.Highlight({ hit, attribute: 'lvl0' })}</span>` : ''}
            ${hit.lvl1 ? html`<span class="hit-lvl1"> › ${components.Highlight({ hit, attribute: 'lvl1' })}</span>` : ''}
          </div>
          ${hit.content ? html`
            <div class="hit-content">${components.Highlight({ hit, attribute: 'content' })}</div>
          ` : ''}
          ${hit.url ? html`<span class="hit-link">View page →</span>` : ''}
        </article>
      `,
      empty: `No results for "{{query}}"`,
    },
  }),
  configure({
    hitsPerPage: 10,
    attributesToRetrieve: ['lvl0', 'lvl1', 'content', 'url', 'type'],
  }),
  pagination({
    container: '#pagination',
  }),
  trendingItems({
    container: '#trending-items',
    limit: 6,
    templates: {
      header: 'Popular pages',
      item: (item, { html }) => docItemTemplate(item, { html }),
    },
  }),
  relatedProducts({
    container: '#related-items',
    objectIDs: ['/community/intro'],
    limit: 4,
    templates: {
      header: 'Related pages',
      item: (item, { html }) => docItemTemplate(item, { html }),
    },
  }),
]);

search.start();
