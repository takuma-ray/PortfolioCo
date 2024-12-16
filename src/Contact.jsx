import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("送信中...");

    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      setStatus("メールを送信しました。");
    } else {
      setStatus("送信に失敗しました。後ほど再度お試しください。");
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        {/* 画像セクション */}
        <div className="header-image">
          <img
            src="/img/1920600.png"  // ここに画像のURLを挿入
            alt="お問い合わせ"
            className="contact-header-img"
          />
        </div>

        <h2>お問い合わせ</h2>
        <p>ゲーム開発に関するお問い合わせ、ご質問は以下のフォームからご連絡ください。</p>

        <div className="contact-form">
          <h3>お問合せフォーム</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">お名前</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="例: 山田 太郎"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">メールアドレス</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="例: sample@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">メッセージ</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="ここにメッセージを書いてください"
              ></textarea>
            </div>

            <div className="form-group">
              <button type="submit">送信</button>
            </div>
          </form>
          {status && <p>{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
