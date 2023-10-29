import { describe, expect, it } from 'vitest';
import { longestPalindrome } from '.';

describe('longestPalindrome', () => {
  it('should return "bab" or "aba" when s="babad"', () => {
    const s = 'babad';
    const expected = ['bab', 'aba'];

    const result = longestPalindrome(s);

    expect(expected).toContain(result);
  });

  it('should return "bb" when s="cbbd"', () => {
    const s = 'cbbd';
    const expected = 'bb';

    const result = longestPalindrome(s);

    expect(result).toBe(expected);
  });

  it('should return "a" when s="a"', () => {
    const s = 'a';
    const expected = 'a';

    const result = longestPalindrome(s);

    expect(result).toBe(expected);
  });

  it('should return "11211" when s="11211"', () => {
    const s = '11211';
    const expected = '11211';

    const result = longestPalindrome(s);

    expect(result).toBe(expected);
  });

  it('TLE test case', () => {
    const s =
      'kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv';
    const expected = 'qahaq';

    const result = longestPalindrome(s);

    expect(result).toBe(expected);
  });
});
