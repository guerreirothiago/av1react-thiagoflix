 function scrollRow(rowId, scrollAmount) {
      const row = document.getElementById(rowId);
      row.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
    
    document.getElementById('classification').addEventListener('change', function() {
      const selected = this.value;
      if (selected) {
        console.log('Classificação selecionada:', selected);
      }
    });