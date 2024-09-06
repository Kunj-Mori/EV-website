import './Background.css';

export default function Background({ playStatus, heroCount }) {
  if (playStatus) {
    return (
      <video className='background fade-in' autoPlay loop muted>
        <source src="/Assets/video1.mp4" type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src="/Assets/image1.png" className="background fade-in" alt="Background 1" />;
  } else if (heroCount === 1) {
    return <img src="/Assets/image2.png" className="background fade-in" alt="Background 2" />;
  } else if (heroCount === 2) {
    return <img src="/Assets/image3.png" className="background fade-in" alt="Background 3" />;
  }
}
