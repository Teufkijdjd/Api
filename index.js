module.exports = (req, res) => {
  const secretKey = "zeionhub888"; // เปลี่ยนเป็นรหัสที่คุณตั้ง

  if (req.headers['x-auth-token'] === secretKey) {
    res.status(200).send('print("loadstring(game:HttpGet("https://pastebin.com/raw/g9trxTQs"))();")'); // โค้ดที่จะให้ Loadstring รัน
  } else {
    // หน้า 404 หลอกๆ
    res.status(404).send('<h1>404 Not Found</h1>');
  }
};
