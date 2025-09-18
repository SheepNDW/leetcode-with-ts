import { PriorityQueue } from '@datastructures-js/priority-queue';

interface FoodInfo {
  foodName: string;
  rating: number;
  cuisine: string;
}

function compare(a: FoodInfo, b: FoodInfo): number {
  if (a.rating !== b.rating) {
    return b.rating - a.rating;
  }
  if (a.foodName < b.foodName) return -1;
  if (a.foodName > b.foodName) return 1;
  return 0;
}

class FoodRatings {
  // food -> {foodName, rating, cuisine}
  private foodMap = new Map<string, FoodInfo>();
  // cuisine -> Queue<{foodName, rating, cuisine}>
  private cuisineFoodMap = new Map<string, PriorityQueue<FoodInfo>>();

  constructor(foods: string[], cuisines: string[], ratings: number[]) {
    for (let i = 0; i < foods.length; i++) {
      const foodName = foods[i];
      const cuisine = cuisines[i];
      const rating = ratings[i];

      this.foodMap.set(foodName, { foodName, rating, cuisine });

      if (!this.cuisineFoodMap.has(cuisine)) {
        this.cuisineFoodMap.set(cuisine, new PriorityQueue(compare));
      }
      this.cuisineFoodMap.get(cuisine)!.push({ foodName, rating, cuisine });
    }
  }

  changeRating(food: string, newRating: number): void {
    const foodInfo = this.foodMap.get(food)!;
    foodInfo.rating = newRating;

    this.cuisineFoodMap.get(foodInfo.cuisine)?.push({ ...foodInfo });
  }

  highestRated(cuisine: string): string {
    const pq = this.cuisineFoodMap.get(cuisine)!;

    while (!pq.isEmpty()) {
      const top = pq.front()!;

      if (this.foodMap.get(top.foodName)!.rating === top.rating) {
        return top.foodName;
      }

      pq.pop();
    }

    return '';
  }
}

export { FoodRatings };

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */
