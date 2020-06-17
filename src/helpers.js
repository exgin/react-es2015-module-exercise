// select a random item form items
function choice(items) {
  return _.sampleSize(items);
}

// remove 1st matching item from items
function remove(items, item) {
  return items.filter((el) => el !== item);
}

export { choice, remove };
