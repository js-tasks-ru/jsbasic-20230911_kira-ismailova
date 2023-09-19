function checkSpam(str) {
  let newStr = str.toLowerCase();

  if (newStr.includes('1xbet now') || newStr.includes('xxx')) {
    return true;
  }
  
  return false;
}

