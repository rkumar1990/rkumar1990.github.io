// Post Enhancements: Reading Time, TOC, Copy Code, Share
(function() {
  
  // Calculate Reading Time
  function calculateReadingTime() {
    const readingTimeElement = document.getElementById('reading-time');
    if (!readingTimeElement) return;
    
    const content = document.querySelector('.post-content');
    if (!content) return;
    
    const text = content.textContent;
    const wordCount = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200); // 200 words per minute
    
    readingTimeElement.textContent = `${readingTime} min read • ${wordCount.toLocaleString()} words`;
  }

  // Generate Table of Contents
  function generateTOC() {
    const tocNav = document.getElementById('toc-nav');
    const content = document.querySelector('.post-content');
    
    if (!tocNav || !content) return;
    
    const headings = content.querySelectorAll('h2, h3');
    if (headings.length < 3) {
      const tocWrapper = document.querySelector('.toc-wrapper');
      if (tocWrapper) tocWrapper.style.display = 'none';
      return;
    }
    
    const tocList = document.createElement('ul');
    tocList.className = 'toc-list';
    
    headings.forEach((heading, index) => {
      // Add ID to heading if it doesn't have one
      if (!heading.id) {
        heading.id = `section-${index}`;
      }
      
      const listItem = document.createElement('li');
      listItem.className = heading.tagName === 'H3' ? 'toc-item toc-sub-item' : 'toc-item';
      
      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent;
      link.className = 'toc-link';
      
      link.addEventListener('click', function(e) {
        e.preventDefault();
        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Update active state
        document.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Update URL without triggering scroll
        history.pushState(null, null, `#${heading.id}`);
      });
      
      listItem.appendChild(link);
      tocList.appendChild(listItem);
    });
    
    tocNav.appendChild(tocList);
    
    // Highlight current section on scroll
    let isScrolling;
    window.addEventListener('scroll', function() {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        updateActiveTOC(headings);
      }, 100);
    }, false);
  }

  // Update active TOC item based on scroll position
  function updateActiveTOC(headings) {
    const scrollPosition = window.scrollY + 100;
    
    let currentSection = '';
    headings.forEach(heading => {
      if (heading.offsetTop <= scrollPosition) {
        currentSection = heading.id;
      }
    });
    
    document.querySelectorAll('.toc-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  // Copy code blocks
  function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre');
    
    codeBlocks.forEach(block => {
      const button = document.createElement('button');
      button.className = 'copy-code-btn';
      button.innerHTML = `
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
        </svg>
        Copy
      `;
      
      button.addEventListener('click', function() {
        const code = block.textContent;
        navigator.clipboard.writeText(code).then(() => {
          button.innerHTML = `
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            </svg>
            Copied!
          `;
          
          setTimeout(() => {
            button.innerHTML = `
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
              </svg>
              Copy
            `;
          }, 2000);
        });
      });
      
      block.style.position = 'relative';
      block.appendChild(button);
    });
  }

  // Initialize all enhancements
  document.addEventListener('DOMContentLoaded', function() {
    calculateReadingTime();
    generateTOC();
    addCopyButtons();
  });

})();

// Copy link to clipboard function for share button
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    const btn = event.target.closest('.share-btn');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = `
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
      Copied!
    `;
    setTimeout(() => {
      btn.innerHTML = originalHTML;
    }, 2000);
  });
}
