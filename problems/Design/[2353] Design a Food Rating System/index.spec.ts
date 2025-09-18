import { describe, expect, it } from 'vitest';
import { FoodRatings } from '.';

describe('FoodRatings', () => {
  it('should correctly initialize and retrieve highest rated food', () => {
    const foodRatings = new FoodRatings(
      ['kimchi', 'miso', 'sushi', 'moussaka', 'ramen', 'bulgogi'],
      ['korean', 'japanese', 'japanese', 'greek', 'japanese', 'korean'],
      [9, 12, 8, 15, 14, 7]
    );

    expect(foodRatings.highestRated('korean')).toBe('kimchi');
    expect(foodRatings.highestRated('japanese')).toBe('ramen');
  });

  it('should update the rating and reflect the highest rated food correctly', () => {
    const foodRatings = new FoodRatings(
      ['kimchi', 'miso', 'sushi', 'moussaka', 'ramen', 'bulgogi'],
      ['korean', 'japanese', 'japanese', 'greek', 'japanese', 'korean'],
      [9, 12, 8, 15, 14, 7]
    );

    foodRatings.changeRating('sushi', 16);
    expect(foodRatings.highestRated('japanese')).toBe('sushi');

    foodRatings.changeRating('ramen', 16);
    expect(foodRatings.highestRated('japanese')).toBe('ramen');
  });
});
