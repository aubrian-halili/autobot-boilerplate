export function arrayToObject(arr, key = 'id') {
  const obj = {};
  arr.forEach((i) => Object.assign(obj, { [i[key]]: i }));
  return obj;
}

export function objectToArray(obj) {
  return Object.keys(obj).map((key) => obj[key]);
}

export const formatMoney = (price, c = 2, d = '.', t = ',') => {
  let n = price;
  const s = n < 0 ? '-' : '';
  const i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c), 10));
  const o = i.length;
  const j = o > 3 ? o % 3 : 0;

  return s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${t}`) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
};

export const isMobile = () => (/mobile|tablet/i.test(navigator.userAgent));

export const isSafari = () => (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor));
