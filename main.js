// DOMから取得する際にArray.fromを利用して静的な配列に変換
const autoStyle12Elements = Array.from(document.getElementsByClassName('auto-style12'));
const tableRows = Array.from(document.querySelectorAll('tr'));
const autoStyle63Elements = Array.from(document.getElementsByClassName('auto-style63'));

// 3つの配列のうち、要素数が少ないものに合わせてループ回数を設定
const count = Math.min(autoStyle12Elements.length, tableRows.length, autoStyle63Elements.length);

for (let i = 0; i < count; i++) {
  // autoStyle12要素のテキストを取得
  const text = autoStyle12Elements[i].textContent.trim();

  // 対象の<tr>要素と置換対象の要素を取得
  const currentRow = tableRows[i];
  const elementToReplace = autoStyle63Elements[i];

  // URLの生成（空白を除去し小文字に変換)
  const url = 'https://www.britannica.com/dictionary/' + text.replace(/\s+/g, '').toLowerCase();

  // iframe要素を新たに作成し、属性をセット
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', url);
  iframe.setAttribute('height', '300px');
  iframe.setAttribute('loading', 'lazy');

  // 対象の<tr>内で、指定された子要素をiframeに置換する
  currentRow.replaceChild(iframe, elementToReplace);

  console.log(`Index ${i} の要素を置換しました。新しいiframeのsrc: ${url}`);
}
