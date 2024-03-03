import Image from "next/image";
import Spline from "@splinetool/react-spline";
import styles from '../styles/home.module.css'; 
import ButtonPrimary from '@/components/ButtonPrimary';
import ButtonSecondary from "@/components/ButtonSecondary";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.landingContainer}>
          <div className={styles.landingContent}>
            <h1>Explore the <span className={styles.greenText}>taste</span>
              <br/>
            enjoy the <span className={styles.greenText}>moment</span></h1>
            <p>Revolutionize your culinary journey with Culinary Compass, your ultimate destination for personalized recipes and dining experiences. Discover, savor, and indulge in every bite.</p>
            <div className={styles.buttonContainer}>
              <ButtonPrimary buttonText="GET STARTED" link="/" />
              <ButtonSecondary buttonText="LEARN MORE" link="/" />
            </div>
          </div>
          <div className={styles.splineLogo}>
            <Spline scene="https://prod.spline.design/gcizkJmmgbVnw-XI/scene.splinecode" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
          </div>
        </div>

        <div className={`${styles.wave} ${styles.wavetop}`}></div>
        <div className={styles.goldBG}>
          <div className={styles.mobileContainer}>
            <div className={styles.splinePhone}>
              <Spline scene="https://prod.spline.design/3GJkCGIzK3lrhnK3/scene.splinecode" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
            </div>
            <div className={styles.mobileContent}>
              <h1>Plan your next <br />meal <span className={styles.greenText}>on the go!</span></h1>
              <p>Embark on your culinary journey with Culinary Compass, now accessible as a versatile web app. Enjoy curated recipes and dining recommendations wherever you are, and savor global flavors with ease.</p>
              {/* <div className={styles.buttonContainer}>
                <ButtonPrimary buttonText="GET STARTED" link="/" />
                <ButtonSecondary buttonText="LEARN MORE" link="/" />
              </div> */}
            </div>
          </div>
        </div>
        <div className={styles.wave}></div>

        <div className={styles.pricingContainer}>
          <div className={styles.pricingText}>
            <h1>Tasty meals, <span className={styles.greenText}>low prices</span></h1>
            <p>Join the flavor revolution without breaking the bank! Explore our flexible pricing models designed to suit every taste bud and budget. Your culinary journey starts here!</p>
          </div>
          <div className={styles.cardContainer}>
                <Card
                  title="Essential Access"
                  desc="Access curated recipes and restaurant recommendations anytime, anywhere. Unlock the full potential of your culinary journey."
                  spline="https://prod.spline.design/vcXKExZkQnhDzhfA/scene.splinecode"
                  cta="UNLOCK"
                />
                <Card
                  title="Premium Pass"
                  desc="Upgrade to premium for exclusive recipes, personalized restaurant recommendations, and VIP perks."
                  spline="https://prod.spline.design/n5bWhsQ6bSx7il5w/scene.splinecode"
                  cta="JOIN NOW"
                />
                <Card
                  title="Family Plan"
                  desc="Share the joy of cooking with loved ones. Enjoy unlimited access for the whole family."
                  spline="https://prod.spline.design/3CO1ozEo4AMMdrJs/scene.splinecode"
                  cta="GET STARTED"
                />
          </div>
        </div>

        <div className={styles.newsContainer}>
          <div className={styles.newsContent}>
            <h1>Stay <span className={styles.greenText}>in touch!</span></h1>
            <p>Stay in the loop with the latest culinary trends, mouthwatering recipes, and exclusive offers! Don't miss out – sign up now for our newsletter and elevate your culinary experience!</p>
            <ButtonPrimary buttonText="SIGN UP NOW" link="/" />
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}