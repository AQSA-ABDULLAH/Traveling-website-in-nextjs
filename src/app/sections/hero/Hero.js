import Header from "./Header";
import Main from "./Main";

export default function Hero() {
  return (
      <section className="relative w-full h-full pr-20">
          {/* Background Image */}
          <img
              src="/assest/decore/Decore.png"
              alt=""
              className="absolute top-[0px] right-[0px] w-[620px] h-[640px] opacity-100 2xl:w-[850px] 2xl:h-[920px]"
          />
          
          {/* Header and Main */}
          <div className="relative z-10">
              <Header />
              <Main />
          </div>
      </section>
  );
}

