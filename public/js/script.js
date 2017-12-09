// Drum Arrays
let kicks = createArray();
let snares = createArray();
let hiHats = createArray();
let rideCymbals = createArray();

function createArray() {
  return Array(16).fill(false);
}

function pickRightArray(drumArray) {
  switch (drumArray) {
    case 'kicks':
      return kicks;
      break;
    case 'snares':
      return snares;
      break;
    case 'hiHats':
      return hiHats;
      break;
    case 'rideCymbals':
      return rideCymbals;
      break;
    default:
      return undefined;
  }
}

function toggleDrum (drumArray, index) {
  let drums = pickRightArray(drumArray);
   if(!drums || index > 15 || index < 0) {
    return;
   }

   return drums[index] = !drums[index];
}

const modifyDrums = {
  clearDrums(drumArray) {
    let drums = pickRightArray(drumArray);
    for (let drumsIndex in drums) {
      drums[drumsIndex] = false;
    }
  },

  invertDrums(drumArray) {
    let drums = pickRightArray(drumArray);
    for (let drumsIndex in drums) {
      drums[drumsIndex] = !drums[drumsIndex];
    }
  }
}

function clear (drumArray) {
  return modifyDrums.clearDrums(drumArray);
}

function invert (drumArray) {
  return modifyDrums.invertDrums(drumArray);
}

