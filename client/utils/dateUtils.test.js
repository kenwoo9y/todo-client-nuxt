import { describe, it, expect } from 'vitest';
import { formatDateTime, formatDateForAPI } from '@/utils/dateUtils';

describe('dateUtils', () => {
  describe('formatDateTime', () => {
    it('正しい日時フォーマットに変換される', () => {
      const input = '2024-03-15T10:30:00';
      const expected = '2024-03-15 19:30'; // 日本時間（UTC+9）
      expect(formatDateTime(input)).toBe(expected);
    });

    it('nullの場合は空文字を返す', () => {
      expect(formatDateTime(null)).toBe('');
    });

    it('undefinedの場合は空文字を返す', () => {
      expect(formatDateTime(undefined)).toBe('');
    });

    it('空文字の場合は空文字を返す', () => {
      expect(formatDateTime('')).toBe('');
    });

    it('should handle date crossing midnight in JST', () => {
      const originalDateTime = '2021-01-01T14:59:00.000'; // UTC 14:59 = JST 23:59
      const formattedDate = formatDateTime(originalDateTime);
      expect(formattedDate).toBe('2021-01-01 23:59');

      const crossingDateTime = '2021-01-01T15:00:00.000'; // UTC 15:00 = JST 00:00 (next day)
      const crossingFormattedDate = formatDateTime(crossingDateTime);
      expect(crossingFormattedDate).toBe('2021-01-02 00:00');
    });
  });

  describe('formatDateForAPI', () => {
    it('Date オブジェクトを YYYY-MM-DD 形式に変換', () => {
      const input = new Date('2024-03-15');
      expect(formatDateForAPI(input)).toBe('2024-03-15');
    });

    it('YYYY-MM-DD 形式の文字列はそのまま返す', () => {
      const input = '2024-03-15';
      expect(formatDateForAPI(input)).toBe('2024-03-15');
    });

    it('nullの場合は null を返す', () => {
      expect(formatDateForAPI(null)).toBeNull();
    });

    it('異なる形式の日付文字列を YYYY-MM-DD に変換', () => {
      const input = '2024/03/15';
      expect(formatDateForAPI(input)).toBe('2024-03-15');
    });
  });
});
