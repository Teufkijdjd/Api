module.exports = (req, res) => {
  // 1. ตั้งรหัสลับของคุณตรงนี้
  const secretKey = "MY_PASSWORD_123"; 

  // 2. เช็คว่าคนที่เข้ามาส่งรหัสมาถูกไหม
  if (req.headers['x-auth-token'] === secretKey) {
    // ถ้าถูก: ส่งสคริปต์ตัวจริงไปให้รัน
    res.status(200).send('print("loadstring(game:HttpGet("https://pastebin.com/raw/g9trxTQs"))();") -- ใส่โค้ด Lua ของคุณที่นี่');
  } else {
    // ถ้าผิด (เปิดผ่านเบราว์เซอร์): หลอกว่าเป็นหน้า 404
    res.status(404).send('<h1>404 Not Found</h1><p>The requested URL was not found.</p>');
  }
};
