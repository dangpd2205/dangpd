export const STATUS_SUCCESS = 'success';
export const STATUS_ERROR = 'error';
export const NEED_LOGOUT_CODES = [];
export const DEFAULT_JOB_PERMALINK = 'moi-nhat';
export const DEFAULT_PER_PAGE = 20;
export const DEFAULT_DATE_FORMAT = 'DD/MM/YYYY';
export const DEFAULT_MONTH_FORMAT = 'MM/YYYY';
export const DEFAULT_DATETIME_FORMAT = 'HH:mm DD/MM/YYYY';
export const DATE_FORMAT = 'YYYY/MM/DD';
export const HOME_JOB_SPOTLIGHT_LIMIT = 20;

export const ERROR_MESSAGE = {
  COMMON: 'Đã xảy ra lỗi trong quá trình thực hiện'
};

export const VALIDATE_MESSAGE = {
  COMMON: 'Xin vui lòng kiểm tra lại và nhập đầy đủ những thông tin bắt buộc.',
  RESUME_FILE: 'Kích thước tệp tải lên không được vượt quá 10Mb.'
};

export const DEFAULT_SCROLL_SETTINGS = {
  suppressScrollY: false,
  suppressScrollX: false,
  wheelPropagation: false
};

export const USER_TYPE = {
  USER: 'user',
  ADMIN: 'admin'
};

export const BONUS_TYPE = {
  MAIN: 'main',
  WARRANTY: 'warranty'
};

export const USER_SETTING = {
  COMMON: 'Lưu thông tin thành công'
};

export const XSS_WHITE_LIST = {
  a: ['target', 'href', 'title', 'class'],
  abbr: ['title', 'class'],
  address: [],
  area: ['shape', 'coords', 'href', 'alt'],
  article: [],
  aside: [],
  audio: [
    'autoplay',
    'controls',
    'crossorigin',
    'loop',
    'muted',
    'preload',
    'src'
  ],
  b: [],
  bdi: ['dir'],
  bdo: ['dir'],
  big: [],
  blockquote: ['cite'],
  br: [],
  caption: [],
  center: [],
  cite: [],
  code: [],
  col: ['align', 'valign', 'span', 'width'],
  colgroup: ['align', 'valign', 'span', 'width'],
  dd: [],
  del: ['datetime'],
  details: ['open'],
  div: [],
  dl: [],
  dt: [],
  em: [],
  figcaption: [],
  figure: [],
  font: ['color', 'size', 'face'],
  footer: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  header: [],
  doctor: [],
  i: [],
  img: ['src', 'alt', 'title', 'width', 'height'],
  ins: ['datetime'],
  li: [],
  mark: [],
  nav: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  section: [],
  small: [],
  span: [],
  sub: [],
  summary: [],
  sup: [],
  strong: [],
  strike: [],
  table: ['width', 'border', 'align', 'valign'],
  tbody: ['align', 'valign'],
  td: ['width', 'rowspan', 'colspan', 'align', 'valign'],
  tfoot: ['align', 'valign'],
  th: ['width', 'rowspan', 'colspan', 'align', 'valign'],
  thead: ['align', 'valign'],
  tr: ['rowspan', 'align', 'valign'],
  tt: [],
  u: [],
  ul: [],
  video: [
    'autoplay',
    'controls',
    'crossorigin',
    'loop',
    'muted',
    'playsinline',
    'poster',
    'preload',
    'src',
    'height',
    'width'
  ],
  link: ['rel', 'href'],
  label: ['for'],
  form: ['method'],
  input: [],
  button: [],
  progress: ['value', 'max', 'class'],
  svg: [],
  g: [],
  defs: [],
  clippath: [],
  rect: [],
  path: []
};

export const YEARS = [
  { name: '1962', value: 1962 },
  { name: '1963', value: 1963 },
  { name: '1964', value: 1964 },
  { name: '1965', value: 1965 },
  { name: '1966', value: 1966 },
  { name: '1967', value: 1967 },
  { name: '1968', value: 1968 },
  { name: '1969', value: 1969 },
  { name: '1970', value: 1970 },
  { name: '1971', value: 1971 },
  { name: '1972', value: 1972 },
  { name: '1973', value: 1973 },
  { name: '1974', value: 1974 },
  { name: '1975', value: 1975 },
  { name: '1976', value: 1976 },
  { name: '1977', value: 1977 },
  { name: '1978', value: 1978 },
  { name: '1979', value: 1979 },
  { name: '1980', value: 1980 },
  { name: '1981', value: 1981 },
  { name: '1982', value: 1982 },
  { name: '1983', value: 1983 },
  { name: '1984', value: 1984 },
  { name: '1985', value: 1985 },
  { name: '1986', value: 1986 },
  { name: '1987', value: 1987 },
  { name: '1988', value: 1988 },
  { name: '1989', value: 1989 },
  { name: '1990', value: 1990 },
  { name: '1991', value: 1991 },
  { name: '1992', value: 1992 },
  { name: '1993', value: 1993 },
  { name: '1994', value: 1994 },
  { name: '1995', value: 1995 },
  { name: '1996', value: 1996 },
  { name: '1997', value: 1997 },
  { name: '1998', value: 1998 }
];

export const MONTHS = [
  { name: '1', value: 1 },
  { name: '2', value: 2 },
  { name: '3', value: 3 },
  { name: '4', value: 4 },
  { name: '5', value: 5 },
  { name: '6', value: 6 },
  { name: '7', value: 7 },
  { name: '8', value: 8 },
  { name: '9', value: 9 },
  { name: '10', value: 10 },
  { name: '11', value: 11 },
  { name: '12', value: 12 }
];

export const DAYS = [
  { name: '1', value: 1 },
  { name: '2', value: 2 },
  { name: '3', value: 3 },
  { name: '4', value: 4 },
  { name: '5', value: 5 },
  { name: '6', value: 6 },
  { name: '7', value: 7 },
  { name: '8', value: 8 },
  { name: '9', value: 9 },
  { name: '10', value: 10 },
  { name: '11', value: 11 },
  { name: '12', value: 12 },
  { name: '13', value: 13 },
  { name: '14', value: 14 },
  { name: '15', value: 15 },
  { name: '16', value: 16 },
  { name: '17', value: 17 },
  { name: '18', value: 18 },
  { name: '19', value: 19 },
  { name: '20', value: 20 },
  { name: '21', value: 21 },
  { name: '22', value: 22 },
  { name: '23', value: 23 },
  { name: '24', value: 24 },
  { name: '25', value: 25 },
  { name: '26', value: 26 },
  { name: '27', value: 27 },
  { name: '28', value: 28 },
  { name: '29', value: 29 },
  { name: '30', value: 30 },
  { name: '31', value: 31 }
];
