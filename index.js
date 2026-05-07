export const PETAL = "Network-Gold";
export const INVARIANT = "NETWORK_STATIONARY";
export function verify(input) {
  if (!input || typeof input !== "object") {
    return {
      pass: false,
      stationary: false,
      signal: "network-gold:INVALID_INPUT",
      reason: "input must be an object"
    };
  }
  const stationary =
    input.repo === "Riverbraid-Network-Gold" &&
    input.petal === "Network-Gold" &&
    input.ring === 1 &&
    input.invariant === "NETWORK_STATIONARY";
  return {
    pass: true,
    stationary,
    signal: stationary ? "network-gold:STATIONARY" : "network-gold:DRIFT",
    reason: stationary
      ? "Stationary fields match declared petal identity"
      : "One or more stationary fields drift from declaration"
  };
}
