import React, { useEffect, useRef } from "react";

const Home = () => {
  const topImgRef = useRef(null); // 対象要素の参照を取得

  useEffect(() => {
    const currentElement = topImgRef.current; // refを変数にコピー

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // クラスを追加してアニメーションを開始
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target); // アニメーション完了後は監視を終了
        }
      },
      { threshold: 0.1 } // 10%がビューポート内に入ったら発火
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement); // cleanupで参照を使用
      }
    };
  }, []); // 空の依存配列で初回レンダリング時のみ実行

  return (
    <div>
      <section ref={topImgRef} className="topImg">
        {/* publicフォルダ内のimgフォルダから画像を参照する */}
        <img
          src="/img/sean-do-EHLd2utEf68-unsplash.jpg"
          alt="gameRoom"
        />
        <div className="textOnImg">
          <h1>キミの未来はここから始まる</h1>
          <p>今ここから変化する、その摩擦に心を燃やせ。</p>
        </div>
      </section>

      <section className="hero">
        <h2>ブランド戦略で未来をデザイン</h2>
        <p>
          私たちのビジョンは、未来を形作るためのユニークで大胆なブランド戦略を提供することです。
        </p>
      </section>
    </div>
  );
};

export default Home;
