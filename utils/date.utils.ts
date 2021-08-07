export const getHoursFromMs = (ms: number) => {
  return Math.floor(ms / 3600) % 24;
};
