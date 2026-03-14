// Search functionality using Lunr.js
(function() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  if (!searchInput) return;

  let searchIndex;
  let documents = [];
  
  // Simple search data - you can generate this from your posts
  const searchData = [
    {
      id: 'cloud-hosting',
      title: 'Complete Guide to Cloud Hosting',
      url: '/docs/blog/posts/Complete-guide-to-cloud-hosting.html',
      excerpt: 'Everything you need to know about cloud hosting, from basics to advanced topics.',
      tags: ['cloud', 'hosting', 'aws', 'azure', 'gcp', 'devops']
    },
    {
      id: 'technical-writer',
      title: 'How to become a technical writer',
      url: '/docs/blog/posts/How-to-become-a-technical-writer.html',
      excerpt: 'A rewarding career that combines communication skills with technical knowledge.',
      tags: ['career', 'technical writing', 'guide', 'skills']
    },
    {
      id: 'github-technical-writing',
      title: 'How to use GitHub in technical writing',
      url: '/docs/blog/posts/How-to-use-GitHub-in-technical-writing.html',
      excerpt: 'Version control platform that helps you manage your documentation.',
      tags: ['github', 'workflow', 'version control', 'documentation']
    },
    {
      id: 'rest-api',
      title: 'How to document REST API endpoints',
      url: '/docs/blog/posts/rest-api-guides/How-to-document-REST-API-endpoints.html',
      excerpt: 'Complete guide to documenting REST APIs with examples.',
      tags: ['api', 'documentation', 'rest', 'developer docs']
    },
    {
      id: 'post-endpoints',
      title: 'How to document POST endpoints',
      url: '/docs/blog/posts/rest-api-guides/How-to-document-POST-endpoints.html',
      excerpt: 'POST endpoints create resources. Learn how to document required fields and validation rules.',
      tags: ['api', 'documentation', 'post', 'http methods']
    },
    {
      id: 'get-endpoints',
      title: 'How to document GET endpoints',
      url: '/docs/blog/posts/rest-api-guides/How-to-document-GET-endpoints.html',
      excerpt: 'GET operation retrieves data from the server for the requested parameter.',
      tags: ['api', 'documentation', 'get', 'http methods']
    },
    {
      id: 'update-endpoints',
      title: 'How to document UPDATE endpoints',
      url: '/docs/blog/posts/rest-api-guides/How-to-document-UPDATE-endpoints.html',
      excerpt: 'UPDATE operation changes existing resources and data in the database.',
      tags: ['api', 'documentation', 'update', 'http methods']
    },
    {
      id: 'delete-endpoints',
      title: 'How to document DELETE endpoints',
      url: '/docs/blog/posts/rest-api-guides/How-to-document-DELETE-endpoints.html',
      excerpt: 'DELETE operation removes resources from the database.',
      tags: ['api', 'documentation', 'delete', 'http methods']
    }
  ];

  // Simple search function
  function performSearch(query) {
    if (!query || query.length < 2) {
      searchResults.innerHTML = '';
      searchResults.style.display = 'none';
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results = searchData.filter(doc => {
      return doc.title.toLowerCase().includes(lowerQuery) ||
             doc.excerpt.toLowerCase().includes(lowerQuery) ||
             doc.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
    });

    displayResults(results, query);
  }

  function displayResults(results, query) {
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
      searchResults.style.display = 'block';
      return;
    }

    const html = results.map(result => {
      const highlightedTitle = highlightText(result.title, query);
      const highlightedExcerpt = highlightText(result.excerpt, query);
      
      return `
        <a href="${result.url}" class="search-result-item">
          <h4>${highlightedTitle}</h4>
          <p>${highlightedExcerpt}</p>
          <div class="search-tags">
            ${result.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </a>
      `;
    }).join('');

    searchResults.innerHTML = html;
    searchResults.style.display = 'block';
  }

  function highlightText(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  // Event listeners
  let searchTimeout;
  searchInput.addEventListener('input', function(e) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      performSearch(e.target.value);
    }, 300);
  });

  // Close search results when clicking outside
  document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.style.display = 'none';
    }
  });

  // Keyboard navigation
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      searchResults.style.display = 'none';
      searchInput.blur();
    }
  });
})();
