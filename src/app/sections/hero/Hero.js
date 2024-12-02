import Header from "./Header";
import Main from "./Main";

export default function Hero() {
  return (
      <section className="relative w-full h-full">
          {/* Background Image */}
          <img
              src="/assest/decore/Decore.png"
              alt=""
              className="absolute top-[0px] right-[0px] w-[766.31px] h-[872.58px] opacity-100"
          />
          
          {/* Header and Main */}
          <div className="relative z-10">
              <Header />
              <Main />
          </div>
      </section>
  );
}

