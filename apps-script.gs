// Pega este código en Extensiones > Apps Script de tu hoja de cálculo de Google.
// Después: Implementar > Nueva implementación > Aplicación web
//   Ejecutar como: Yo  |  Quién tiene acceso: Cualquier persona
// Copia la URL resultante en CONFIG.endpoint de index.html.

const SHEET_NAME = 'Pedidos';
const HEADERS = ['Fecha', 'Pedido', 'Nombre tutor/a', 'Apellidos tutor/a', 'Email',
                 'Jugador/a', 'Equipo', 'Prenda', 'Talla', 'Nombre mochila', 'Precio', 'Total pedido'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const d = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) {
      sh.appendRow(HEADERS);
      sh.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
      sh.setFrozenRows(1);
    }
    const now = new Date();
    // Una fila por prenda
    const rows = d.rows.map(r => [now, d.orderId, d.tutorName, d.tutorSurname, d.email,
      r.player, r.team, r.product, r.size, r.custom, r.price, d.total]);
    sh.getRange(sh.getLastRow() + 1, 1, rows.length, HEADERS.length).setValues(rows);
    return ContentService.createTextOutput('ok');
  } finally {
    lock.releaseLock();
  }
}
