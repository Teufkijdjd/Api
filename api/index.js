module.exports = (req, res) => {
  // 1. ตั้งรหัสลับของคุณ (ห้ามบอกใคร)
  const secretKey = "ZeIoNhUb888"; 

  // 2. เช็คบัตรเชิญ (Header)
  if (req.headers['x-auth-token'] === secretKey) {
    // ถ้าใส่รหัสถูก: ส่งสคริปต์ Lua ให้รัน
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(`
        print("สคริปต์โหลดสำเร็จ!")
        -- ใส่โค้ด Lua ของคุณตรงนี้ --
        "loadstring(game:HttpGet("https://pastebin.com/raw/g9trxTQs"))();
    `);
  } else {
    // ถ้าใส่รหัสผิด (หรือเปิดผ่าน Browser): หลอกว่าเป็นหน้า 404 ของ Apache
    res.setHeader('Content-Type', 'text/html');
    res.status(404).send(`
        <!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
        <html><head><title>404 Not Found</title></head>
        <body>
            <h1>Not Found</h1>
            <p>The requested URL was not found on this server.</p>
            <hr>
            <address>Apache/2.4.41 (Ubuntu) Server at ${req.headers.host} Port 80</address>
        </body></html>
    `);
  }
};
