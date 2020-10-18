// live code: http://playcode.io/693654/
const drawHeart = (n) => {
    console.log("For input", n, ":");
    for (let i = -n; i <= n * 2; i++) {
      // -3-2-10123456
      // 012321-1-2-3
      const h = n - Math.abs(i);
      // -3-2-10123210
      const b = n - Math.abs(i - n);
  
      const wing = getPLine(h);
  
      let mid;
      if (i < 0) mid = getSpace(n * 2 - h * 2 - 1);
      else if (i === 0) mid = "0";
      else mid = getPLine(b);
      if (i % n !== 0 && i < n) mid = "0" + mid + "0";
  
      const print = getSpace(Math.abs(i)) + 0 + wing + mid + wing + (i === n * 2 ? "" : "0");
  
      console.log(...print);
    }
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