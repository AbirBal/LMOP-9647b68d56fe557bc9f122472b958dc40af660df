  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'fr', // Langue par défaut
      includedLanguages: 'fr,en,ar', // Langues disponibles : Français, Anglais, Arabe
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
  }
