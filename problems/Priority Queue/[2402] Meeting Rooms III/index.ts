import { MinPriorityQueue } from '@datastructures-js/priority-queue';

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

  // [endTime, idx]
  const used = new MinPriorityQueue({
    compare: (a: [number, number], b: [number, number]) =>
      a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1],
  });

  const unused = new MinPriorityQueue({ priority: (el: number) => el });
  for (let i = 0; i < n; i++) {
    unused.enqueue(i);
  }

  const count: number[] = new Array(n).fill(0);

  for (const meeting of meetings) {
    const start = meeting[0];
    const end = meeting[1];

    while (!used.isEmpty() && (used.front() as unknown as [number, number])[0] <= start) {
      const room = (used.front() as unknown as [number, number])[1];
      used.dequeue();
      unused.enqueue(room);
    }

    if (!unused.isEmpty()) {
      const room = unused.front().element;
      unused.dequeue();
      used.enqueue([end, room]);
      count[room]++;
    } else {
      const [roomAvailableTime, room] = used.front() as unknown as [number, number];
      used.dequeue();
      used.enqueue([roomAvailableTime + end - start, room]);
      count[room]++;
    }
  }

  let maxCount = 0;
  let maxRoom = 0;
  for (let i = 0; i < n; i++) {
    if (count[i] > maxCount) {
      maxCount = count[i];
      maxRoom = i;
    }
  }

  return maxRoom;
}

export { mostBooked };
