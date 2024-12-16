const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;


// CORSの設定（すべてのオリジンを許可）
app.use(cors());

// 受け取ったJSONを解析できるようにする
app.use(bodyParser.json());



// ミドルウェア設定
app.use(cors());
app.use(bodyParser.json());

// メール送信機能のルート
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Nodemailer設定
  const transporter = nodemailer.createTransport({
    service: "gmail", // ここではGmailを例にしています
    auth: {
      user: "your-email@gmail.com",  // 送信元メールアドレス
      pass: "your-email-password",   // メールアカウントのパスワード
    },
  });

  const mailOptions = {
    from: email,
    to: "contact@yourwebsite.com", // 受信先メールアドレス
    subject: "お問い合わせフォーム - ゲーム開発",
    text: `
      お名前: ${name}
      メールアドレス: ${email}
      メッセージ: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false });
  }
});

// サーバーの起動
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
