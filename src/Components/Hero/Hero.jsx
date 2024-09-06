import './Hero.css';

export default function Hero({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src="/Assets/arrow_btn.png" alt="Arrow Button" />
      </div>
      <div className="hero-dot-play">
        <ul className='hero-dots'>
          <li onClick={() => { setHeroCount(0) }} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => { setHeroCount(1) }} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => { setHeroCount(2) }} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
        </ul>
        <div className="hero-play">
          <img onClick={() => { setPlayStatus(!playStatus) }} src={playStatus ? "/Assets/pause_icon.png" : "/Assets/play_icon.png"} alt="Play/Pause" />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
}
