//Devolve o URL do nosso site
function getScriptUrl() {
 var url = ScriptApp.getService().getUrl();
 return url;
}



//Arranca com a página html
function doGet(e) {
  if (!e.parameter.page) {
    // abre a "home page" por defeito
    return HtmlService.createTemplateFromFile('Intro').evaluate()
	   .setTitle('Título da aplicação')
               .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  }
  // senão, usa o parâmetro para abrir outro ficheiro html
  return HtmlService.createTemplateFromFile(e.parameter['page']).evaluate()
                   .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}