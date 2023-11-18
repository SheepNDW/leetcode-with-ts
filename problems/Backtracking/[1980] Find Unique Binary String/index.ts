// recursively generate all strings
function findDifferentBinaryString0(nums: string[]): string {
  const n = nums.length;
  const set = new Set(nums);

  const backtracking = (currStr: string): string => {
    if (currStr.length === n) {
      const isUnique = !set.has(currStr);
      return isUnique ? currStr : '';
    }

    for (const bit of ['0', '1']) {
      const result = backtracking(currStr + bit);
      if (result) return result;
    }

    return '';
  };

  let ans = backtracking('');
  return ans;
}

/**
 * Cantor's Diagonal Argument
 *
 * 考慮一個 n×n 的矩陣，其中每列代表一個給定的二進位字串 nums[i]。
 * 我們的目標是構造一個新的二進位字串，這個字串在每一位上都不同於對應的 nums[i][i]（即矩陣的對角線元素）。
 *
 * 例如，假設 nums 是 ["01", "10"]，我們可以構造一個字串，
 * 其中第一位不同於 nums[0][0]（即 '0'），第二位不同於 nums[1][1]（即 '0'），所以新字串是 "11"。
 */
function findDifferentBinaryString(nums: string[]): string {
  let result = '';

  for (let i = 0; i < nums.length; i++) {
    if (nums[i][i] === '0') {
      result += '1';
    } else {
      result += '0';
    }
  }

  return result;
}

export { findDifferentBinaryString };
