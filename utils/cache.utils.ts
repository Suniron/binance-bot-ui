export const getCachedAddresses = (): string[] => {
  const cachedContent = localStorage.getItem("wsAddresses");

  if (!cachedContent) {
    return [];
  }

  return JSON.parse(cachedContent);
};

export const setCachedAddresses = (addresses: string[]) => {
  localStorage.setItem("wsAddresses", JSON.stringify(addresses));
};

export const addCachedAddress = (address: string) => {
  const cachedAddresses = getCachedAddresses();
  cachedAddresses.push(address);
  setCachedAddresses(cachedAddresses);
};
