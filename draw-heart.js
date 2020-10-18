// live code: http://playcode.io/693654/
const drawHeart = (n) => {
    console.log("For input", n, ":");
    for (let i = -n; i < n * 2; i++) { // -3 -2 -1 0 1 2 3 4 5 6
      // 0 1 2 3 2 1 -1 -2 -3
      const w = n - Math.abs(i);
      // -3 -2 -1 0 1 2 3 2 1 0
      const m = n - Math.abs(i - n);
  
      const wing = getPLine(w);
  
      let mid;
      if (i < 0) mid = getSpace(n * 2 - w * 2 - 1);
      else if (i === 0) mid = "0";
      else mid = getPLine(m);
      if (i % n !== 0 && i < n) mid = "0" + mid + "0";
  
      const print = getSpace(Math.abs(i)) + 0 + wing + mid + wing + 0;
  
      console.log(...print);
    }
    console.log(...(getSpace(n*2) + 0))
  };
  
  const getPLine = (lineNo) => {
    let line = "";
    for (let i = -(lineNo - 1); i < lineNo; i++) {
      line += lineNo - Math.abs(i);
    }
    return line;
  };
  
  const getSpace = (total) => {
    let space = "";
    for (let i = 0; i < total; i++) {
      space += " ";
    }
    return space;
  };

  module.exports = drawHeart;