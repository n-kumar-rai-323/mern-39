const randomStringGenerator = (len = 100) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = chars.length;
  let random = '';
  for (let i = 0; i < len; i++) {
    const position = Math.floor(Math.random() * length);
    random += chars[position];
  }
  return random;
};

module.exports = { randomStringGenerator };
