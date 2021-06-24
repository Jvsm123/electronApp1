const { app, BrowserWindow } = require('electron');

function criarJanela()
{
  const janela new BrowserWindow(
  {
    width: 800,
    height: 800
  });

  janela.loadFile('./index.html');
}
