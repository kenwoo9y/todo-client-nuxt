export function formatDateTime(originalDateTime) {
  // originalDateTime が null、undefined、または空文字の場合は空文字を返す
  if (!originalDateTime) return '';

  // すでにZが付いているかチェック
  const date = new Date(
    originalDateTime.endsWith('Z') ? originalDateTime : originalDateTime + 'Z',
  );

  // 日本時間に変換
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Tokyo', // 明示的にタイムゾーンを指定
  };

  const formattedDateTime = date
    .toLocaleDateString('ja-JP', options)
    .replace(/\//g, '-')
    .replace(/\s/g, ' ');

  return formattedDateTime;
}

export const formatDateForAPI = (date) => {
  if (!date) return null;

  // 日付文字列をYYYY-MM-DD形式に変換
  if (typeof date === 'string') {
    // 既にYYYY-MM-DD形式の場合はそのまま返す
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return date;
    }
  }

  // 日付オブジェクトに変換してフォーマット
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};
