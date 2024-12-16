import React, { useEffect, useRef } from "react";

const Home = () => {
  const topImgRef = useRef(null);

  useEffect(() => {
    const currentElement = topImgRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div>
      <section ref={topImgRef} className="topImg">
        <img src="/img/sean-do-EHLd2utEf68-unsplash.jpg" alt="gameRoom" />
        <div className="textOnImg">
          <h1>キミの未来はここから始まる</h1>
          <p>今ここから変化する、その摩擦に心を燃やせ。もやせ…</p>
        </div>
      </section>

      <section className="hero">
        <h2>ブランド戦略で未来をデザイン</h2>
        <p>
          私たちのビジョンは、未来を形作るためのユニークで大胆なブランド戦略を提供することです。
        </p>
      </section>

      {/* 新しいセクションの追加 */}
      <section className="featureSection">
        <div className="feature">
          <div className="featureImage">
            <img src="/img/rainer-bleek-8kWZyDfLNAo-unsplash.jpg" alt="Feature 1" />
          </div>
          <div className="featureText">
            <h2>インスピレーションを刺激</h2>
            <p>ゲームの世界は、無限の可能性を秘めた創造の源です。<br />
            このセクションでは、プレイヤーとしての好奇心をくすぐり、アイデアが膨らむ瞬間をお届けします。<br />
            斬新なゲームプレイ、ユニークなストーリー展開、ビジュアルや音楽の芸術的要素――ゲームはあなたに新しい視点と体験を提供します。<br />
            ここで紹介する内容が、新たな冒険への一歩となり、次のインスピレーションの種となることを願っています。<br />
            あなたの想像力をかき立て、一層楽しいゲームの世界へ誘いましょう！</p>
          </div>
        </div>

        <div className="feature">
        <div className="featureImage">
            <img src="/img/campaign-creators-pypeCEaJeZY-unsplash.jpg" alt="Feature 2" />
          </div>
          <div className="featureText">
            <h2>戦略的パートナーシップ</h2>
            <p>戦略的パートナーシップ 
              ゲーム業界の進化を支えるために、私たちは多くの企業や団体と戦略的パートナーシップを構築しています。<br />
              このパートナーシップにより、最新技術の導入や革新的なアイデアの実現が可能となり、ユーザーにこれまでにないエンターテインメント体験を提供しています。<br />
              共同プロジェクトやコラボレーションを通じて、ゲーム開発だけでなく、イベント運営、マーケティング施策にも力を注ぎ、業界全体の成長を目指しています。<br />
              私たちの信念は、互いの強みを生かした協力が新たな可能性を切り開くことです。</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

