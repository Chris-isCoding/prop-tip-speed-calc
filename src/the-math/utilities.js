function round(value, decimals = 2) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals) || 0;
}

export { round };
