for (i=0;i<3001;i++){

  const link = document.querySelectorAll('a')
 
  const url_a = link[i]

  url_a.setAttribute('href', 'https://www.oxfordlearnersdictionaries.com/us/definition/english/' + url_a.textContent);
}
