import "css/homepage.css";
import img1 from "assets/images/homepage/balenciaga-white-track-low-top-sneakers-1.jpg";
import img2 from "assets/images/homepage/balenciaga-track-faded-effect-sneakers-2.jpg";
import img3 from "assets/images/homepage/balenciaga-grey-track-clear-sole-sneakers-3.jpg";
import img4 from "assets/images/homepage/balenciaga-grey-triple-s-chunky-sneaker-4.jpg";
import img5 from "assets/images/homepage/balenciaga-black-runner-sneakers-5.jpg";
// import vid1 from "assets/videos/vid1.mp4";

export default function Home() {
  const images = [img1, img2, img3, img4, img5];
  return (
    <main>
      {/* <video loop autoPlay muted className="bg-video">
        <source src={vid1} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      {/* <div className="bg-trs">
        <div>Ts</div>
      </div> */}
      {images.map((img) => (
        <div className="item" key={img}>
          <img src={img} alt="" />
        </div>
      ))}
    </main>
  );
}
