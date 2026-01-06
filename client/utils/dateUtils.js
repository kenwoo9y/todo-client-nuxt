export function formatDateTime(originalDateTime) {
  // Return empty string if originalDateTime is null, undefined, or empty
  if (!originalDateTime) return '';

  // Check if Z is already appended
  const date = new Date(
    originalDateTime.endsWith('Z') ? originalDateTime : originalDateTime + 'Z',
  );

  // Convert to Japan time
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Tokyo', // Explicitly specify timezone
  };

  const formattedDateTime = date
    .toLocaleDateString('ja-JP', options)
    .replace(/\//g, '-')
    .replace(/\s/g, ' ');

  return formattedDateTime;
}

export const formatDateForAPI = (date) => {
  if (!date) return null;

  // Convert date string to YYYY-MM-DD format
  if (typeof date === 'string') {
    // Return as is if already in YYYY-MM-DD format
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return date;
    }
  }

  // Convert to date object and format
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};
