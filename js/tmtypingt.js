google.load("elements", "1", {
            packages: "transliteration"
          });
 
      function onLoad() {
        var options = {
            sourceLanguage:
                google.elements.transliteration.LanguageCode.ENGLISH,
            destinationLanguage:
                [google.elements.transliteration.LanguageCode.TAMIL],
            shortcutKey: 'ctrl+g',
            transliterationEnabled: true
        };
 
        var control =
            new google.elements.transliteration.TransliterationControl(options);
 
        control.makeTransliteratable(['transliterateDiv']);
		control.c.qc.t13n.c[3].c.d.keyup[0].ia.F.p = 'https://www.google.com';
      }
      google.setOnLoadCallback(onLoad);
	  
	  
	  