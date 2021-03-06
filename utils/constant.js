const { env } = require('./env');
const UPLOAD_PATH = env === 'dev' ? './admin-upload-ebook': '/root/upload/admin-upload/ebook';

const OLD_UPLOAD_URL = env === 'dev' ? 'https://book.youbaobao.xyz/book/res/img': 'http://127.0.0.1:3000/book/res/img';

const UPLOAD_URL = env === 'dev' ? 'http://127.0.0.1:3000/admin-upload-ebook': 'http://127.0.0.1:3000/admin-upload-ebook';

module.exports = {
  CODE_ERROR: -1,
  CODE_SUCCESS: 0,
  CODE_TOKEN_EXPIRED: -2,
  debug: true,
  PWD_SALT: 'admin_imooc_node',
  PRIVATE_KEY: 'admin_imooc_node_test_jwlee_top',
  JWT_EXPIRED: 60 * 60,  // token失效时间
  UPLOAD_PATH,
  MIME_TYPE_EPUB: 'application/epub+zip',
  UPLOAD_URL,
  OLD_UPLOAD_URL
}