// Services.jsx
import React, { useEffect } from "react";

const Services = () => {
  // 画像フェードインのアニメーション効果
  useEffect(() => {
    const headerImage = document.querySelector('.services__header img');
    if (headerImage) {
      headerImage.style.opacity = 0;
      headerImage.style.transition = 'opacity 2s';
      setTimeout(() => {
        headerImage.style.opacity = 1;
      }, 200);
    }
  }, []);

  return (
    <div className="services">
      {/* サービスページのヘッダー */}
      <div className="services__header">
        <img src="/img/gameingTop.png" alt="Banner" />
        <h2>サービス</h2>
        <p>ポートフォリオ株式会社が提供するゲーム業界特化のサービスをご紹介します。</p>
      </div>

      {/* サービスリスト */}
      <ul className="services__list">
        <li className="services__item">
          <img src="/img/sean-do-EHLd2utEf68-unsplash.jpg" alt="Game Development" />
          <h3>ゲーム開発</h3>
          <p>高品質なゲームを開発するための総合的なサポートを提供します。</p>
        </li>
        <li className="services__item">
          <img src="/img/fabio-magalhaes-nmTm7knUnqs-unsplash.jpg" alt="Project Management" />
          <h3>プロデュース & プロジェクト管理</h3>
          <p>プロジェクトの進行管理から完成までをスムーズに行います。</p>
        </li>
        <li className="services__item">
          <img src="/img/glenn-carstens-peters-0woyPEJQ7jc-unsplash.jpg" alt="Art and Design" />
          <h3>アート & デザイン</h3>
          <p>ゲームの世界観を高める独自のデザインとアートを制作します。</p>
        </li>
        <li className="services__item">
          <img src="/img/mahdi-chaghari-RqO_02KT36w-unsplash.jpg" alt="Mobile Optimization" />
          <h3>モバイルゲーム最適化</h3>
          <p>モバイル向けの最適化とユーザー体験の向上を支援します。</p>
        </li>
      </ul>
    </div>
  );
};

export default Services;
