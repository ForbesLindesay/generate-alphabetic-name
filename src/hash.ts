// source: https://github.com/styled-components/styled-components/blob/0aa3170c255a49cd41c3fbeb2b8051b5d132f229/src/vendor/glamor/hash.js

/**
 * Generate a numeric 32 bit hash of a string
 */
export default function hash(str: string): number {
  for (var e = str.length | 0, a = e | 0, d = 0, b; e >= 4; ) {
    (b =
      (str.charCodeAt(d) & 255) |
      ((str.charCodeAt(++d) & 255) << 8) |
      ((str.charCodeAt(++d) & 255) << 16) |
      ((str.charCodeAt(++d) & 255) << 24)),
      (b =
        1540483477 * (b & 65535) + (((1540483477 * (b >>> 16)) & 65535) << 16)),
      (b ^= b >>> 24),
      (b =
        1540483477 * (b & 65535) + (((1540483477 * (b >>> 16)) & 65535) << 16)),
      (a =
        (1540483477 * (a & 65535) +
          (((1540483477 * (a >>> 16)) & 65535) << 16)) ^
        b),
      (e -= 4),
      ++d;
  }
  switch (e) {
    case 3:
      a ^= (str.charCodeAt(d + 2) & 255) << 16;
    case 2:
      a ^= (str.charCodeAt(d + 1) & 255) << 8;
    case 1:
      (a ^= str.charCodeAt(d) & 255),
        (a =
          1540483477 * (a & 65535) +
          (((1540483477 * (a >>> 16)) & 65535) << 16));
  }
  a ^= a >>> 13;
  a = 1540483477 * (a & 65535) + (((1540483477 * (a >>> 16)) & 65535) << 16);
  return (a ^ (a >>> 15)) >>> 0;
}
