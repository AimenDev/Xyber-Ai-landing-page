import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";
import { useTranslation } from "react-i18next"; // Import the translation hook

const Hero = () => {
  const { t } = useTranslation(); // Initialize the translation hook
  
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              {t('hero.videoEditing')} {/* Replacing with translation key */}
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              {t('hero.amazinglySimple')} {/* Replacing with translation key */}
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              {t('hero.description')}{" "}
              <span className="font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {" "}
                Xyber AI {/* You can keep product names untranslated */}
              </span>{" "}
              {t('hero.videoEditorDescription')}
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">{t('hero.tryNow')}</Button> {/* Translation for button text */}
            </LinkScroll>
          </div>

          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res -z-2">
            <img
              src="/images/hero.png"
              className="size-1230 max-lg:h-auto"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
