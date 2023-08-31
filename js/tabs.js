

tabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
      e.preventDefault();
  
      tabs.forEach(tab => tab.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
  
      tab.classList.add('active'); // Ajoute la classe active à l'onglet
      const tabId = tab.getAttribute('data-tab');
      const content = document.getElementById(tabId);
      content.classList.add('active');
    });
  });