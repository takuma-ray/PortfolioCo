// Recruit.jsx
import React from "react";

const Recruit = () => {
  return (
    <div className="recruit-container">
      <div className="recruit-header">
        <h2>採用情報</h2>
        <p>ゲームの未来を共に作り上げる仲間を募集中！</p>
      </div>
      <section className="company-overview">
        <h3>私たちのビジョン</h3>
        <p>
          私たちポートフォリオ株式会社は、ゲーム業界の未来を切り開く革新的な開発チームです。<br />革新的なゲーム体験を提供し、プレイヤーが夢中になれるコンテンツを作り出します。あなたも一緒にこの挑戦に加わりませんか？
        </p>
      </section>

      <section className="open-positions">
        <h3>現在募集中のポジション</h3>
        <div className="position-list">
          <div className="position">
            <h4>ゲームプログラマー</h4>
            <p>ゲーム開発の基盤を作るプログラマーを募集します。</p>
            <button className="apply-btn">応募する</button>
          </div>

          <div className="position">
            <h4>ゲームデザイナー</h4>
            <p>ゲームの世界観を作り上げるデザイナーを募集中！</p>
            <button className="apply-btn">応募する</button>
          </div>

          <div className="position">
            <h4>サウンドエンジニア</h4>
            <p>ゲームに命を吹き込む音響エンジニアを募集！</p>
            <button className="apply-btn">応募する</button>
          </div>
        </div>
      </section>

      <section className="why-join">
        <h3>なぜポートフォリオ株式会社に参加するべきか？</h3>
        <ul>
          <li>革新的でクリエイティブなプロジェクトに取り組むチャンス。</li>
          <li>フレンドリーで協力的なチーム環境。</li>
          <li>フレックス制度・リモートワークの選択肢あり。</li>
          <li>業界で高評価の福利厚生制度。</li>
        </ul>
      </section>

      <section className="employee-benefits">
        <h3>社員福利厚生</h3>
        <ul>
          <li>柔軟な働き方：フレックス勤務、リモートワーク、時短勤務OK！</li>
          <li>最新ゲーム機器の支給、ゲーム開発に必要なツールやソフトの提供。</li>
          <li>オフィスに無料のドリンクバーとゲームコーナー。</li>
          <li>毎年開発者イベント、インハウストレーニングの開催。</li>
        </ul>
      </section>

      <section className="how-to-apply">
        <h3>応募方法</h3>
        <p>以下のフォームから、履歴書とポートフォリオを送信してください。チームと共にゲームの未来を切り拓きましょう！</p>
        <button className="apply-btn">応募フォームへ</button>
      </section>
    </div>
  );
};

export default Recruit;
