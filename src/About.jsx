// About.jsx
import React from "react";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="section-header">
          <h2>会社概要</h2>
          <p>ゲームの未来を創造する！ポートフォリオ株式会社のミッションについてご紹介します。</p>
        </div>

        <div className="company-info">
          <div className="info-item">
            <h3>会社名</h3>
            <p>ポートフォリオ株式会社</p>
          </div>
          <div className="info-item">
            <h3>設立</h3>
            <p>2024年12月15日</p>
          </div>
          <div className="info-item">
            <h3>所在地</h3>
            <p>愛知県名古屋市中村区1-19-8 Game Tower 5F</p>
          </div>
          <div className="info-item">
            <h3>事業内容</h3>
            <ul>
              <li>ゲーム開発（コンソール、PC、モバイル）</li>
              <li>ゲーム関連のWebサービス提供</li>
              <li>ゲームエンターテインメントのイベント開催</li>
              <li>VR/AR技術の研究開発</li>
            </ul>
          </div>
          <div className="info-item">
            <h3>代表者</h3>
            <p>代表取締役 CEO 足立 卓馬</p>
          </div>
        </div>

        <section className="mission">
          <div className="missionContent">
            <div className="missionText">
              <h3>私たちのミッション</h3>
              <p>
                ポートフォリオ株式会社は、最先端のゲームテクノロジーとエンターテインメントを融合させ、新しい体験を提供し続けます。<br />
                プレイヤーの冒険を革新するだけでなく、ゲーム開発者がアイデアを形にするための最適な環境を提供しています。
              </p>
              <p>
                私たちは「ゲーム業界の未来を創る」という強い信念を持ち、すべてのプロジェクトに全力で取り組んでいます。<br />
                社員全員がゲーム愛を持ち、技術とクリエイティビティで革新を起こし、プレイヤーに驚きと感動を届けます。
              </p>
            </div>
            <div className="photo">
              <img src="/img/me.jpg" alt="社長の写真" />
            </div>
          </div>
        </section>



        <section className="culture">
          <div className="culture-container">
            <div className="culture-image">
              <img src="/img/austin-distel-mpN7xjKQ_Ns-unsplash.jpg" alt="社内の様子" />
            </div>
            <div className="culture-text">
              <h3>社内文化</h3>
              <p>
                私たちの社内は自由で創造的な環境です。オープンなコミュニケーションを重視し、チームで共に成長することを大切にしています。<br />
                ゲーム開発のフローがスムーズに進むように、社員全員が意見を出し合い、協力して仕事を進めています。
              </p>
              <p>
                また、社内イベントやリクリエーション活動が豊富で、社員がリラックスして楽しめる時間も大切にしています。
              </p>
            </div>
          </div>
        </section>

        <footer className="footer-note">
          <p>ポートフォリオ株式会社のビジョンと使命は常に進化しています。これからも挑戦し続けます。</p>
        </footer>
      </div>
    </section>
  );
};

export default About;
