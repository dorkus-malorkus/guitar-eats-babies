

class Util {

  static shuffleArray(ary) { // NOTE: mutable operation.
    let targIdx;
    let buf;

    for (let baseIdx = ary.length - 1; baseIdx > 0; baseIdx--) {
      targIdx = Math.floor(Math.random() * (baseIdx + 1));

      buf = ary[baseIdx];
      ary[baseIdx] = ary[targIdx];
      ary[targIdx] = buf;
    }

    return ary;
  }

}
