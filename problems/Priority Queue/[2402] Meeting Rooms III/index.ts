import { MinPriorityQueue, PriorityQueue } from '@datastructures-js/priority-queue';

/*
  sorting and counting
*/
function mostBooked0(n: number, meetings: number[][]): number {
  meetings.sort((a, b) => a[0] - b[0]); // Sorting the meetings by their start time

  const lastAvailable: number[] = new Array(n).fill(0); // When each room will be available
  const roomUsedCount: number[] = new Array(n).fill(0); // Count of how many times each room is used

  for (const [start, end] of meetings) {
    let found = false;
    let earlyEndRoom = 0;
    let earlyEndTime = Infinity;

    for (let room = 0; room < n; room++) {
      if (lastAvailable[room] <= start) {
        // If the room is available for the current meeting
        lastAvailable[room] = end; // Update the room's next available time
        roomUsedCount[room]++; // Increment the usage count
        found = true; // Mark as found so we don't use the early end logic
        break; // Exit the loop as we've found a room
      }

      // Keep track of the earliest available room in case none are available at the start time
      if (lastAvailable[room] < earlyEndTime) {
        earlyEndTime = lastAvailable[room];
        earlyEndRoom = room;
      }
    }

    if (!found) {
      // If no room is available at the meeting's start time, use the earliest ending room
      lastAvailable[earlyEndRoom] = earlyEndTime + (end - start); // Update its next available time
      roomUsedCount[earlyEndRoom]++; // Increment the usage count
    }
  }

  // Determine the room that was used the most
  let resultRoom = 0;
  for (let room = 1; room < n; room++) {
    if (roomUsedCount[room] > roomUsedCount[resultRoom]) {
      resultRoom = room;
    }
  }

  return resultRoom;
}

/*
  counting using priority queue
*/
function mostBooked(n: number, meetings: number[][]): number {
  meetings.sort((a, b) => a[0] - b[0]);

  const count: number[] = new Array(n).fill(0);
  const freeRooms = new MinPriorityQueue<number>();
  // [end time, room index]
  const busyRooms = new PriorityQueue<[number, number]>((a, b) => a[0] - b[0] || a[1] - b[1]);

  for (let i = 0; i < n; i++) {
    freeRooms.push(i);
  }

  for (const [start, end] of meetings) {
    while (!busyRooms.isEmpty() && busyRooms.front()![0] <= start) {
      freeRooms.push(busyRooms.pop()![1]);
    }

    if (!freeRooms.isEmpty()) {
      const room = freeRooms.pop()!;
      count[room]++;
      busyRooms.push([end, room]);
    } else {
      const [earliestEnd, room] = busyRooms.pop()!;
      count[room]++;
      busyRooms.push([earliestEnd + (end - start), room]);
    }
  }

  let maxIndex = 0;
  for (let i = 1; i < n; i++) {
    if (count[i] > count[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

export { mostBooked };
