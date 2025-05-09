function contar() {
    const texto = document.getElementById('texto').value.trim();
    const resultado = document.getElementById('resultado');
  
    const palavras = texto.split(/\s+/).filter(p => p).length;
    const letras = texto.replace(/\s/g, '').length;
  
    resultado.innerHTML = `Palavras: ${palavras}<br>Letras (sem espaços): ${letras}`;
  }
  