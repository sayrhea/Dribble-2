import React, { useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CgOptions } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";
import { useAnimate, motion, easeIn } from "framer-motion";
import CharacterA from "../images/characterA.svg?react";

const defaultTransition = { duration: 0.5, ease: [0.82, -0.01, 0.55, 1] };
const h1Transition = { delay: 0.2, duration: 0.6, ease: "linear" };
const scene1 = [
  {
    className: ".first",
    styles: {
      clipPath: "inset(0 0 0 0)",
    },
    options: defaultTransition,
  },
];
const scene2 = [
  {
    className: ".first",
    styles: {
      height: "100px",
      width: "100px",
      right: 0,
      top: 0,
    },
    options: defaultTransition,
  },
  {
    className: ".second",
    styles: {
      bottom: "100px",
      left: "100px",
      height: "calc(100% - 200px)",
      width: "calc(100% - 200px)",
    },
    options: defaultTransition,
  },
  {
    className: ".third",
    styles: {
      top: "calc(100% - 100px)",
      left: 0,
      height: "100px",
      width: "100px",
    },
    options: defaultTransition,
  },
];
const scene3 = [
  {
    className: ".second",
    styles: {
      height: "calc(50% - 150px)",
      width: "calc(50% - 150px)",
      left: "calc(50% + 50px)",
      top: "100px",
    },
    options: defaultTransition,
  },
  {
    className: ".third",
    styles: {
      // height: "100px",
      // width: "100px",
      left: "calc(50% - 50px)",
      top: "calc(50% - 50px)",
    },
    options: defaultTransition,
  },
  {
    className: ".fourth",
    styles: {
      height: "calc(50% - 150px)",
      width: "calc(50% - 150px)",
      left: "100px",
      top: "calc(50% + 50px)",
    },
    options: defaultTransition,
  },
  {
    className: ".fifth",
    styles: {
      height: "100px",
      width: "100px",
      left: "0px",
      top: "calc(100% - 100px)",
    },
    options: defaultTransition,
  },
];
const scene4 = [
  {
    className: ".second",
    styles: {
      height: "0%",
      width: "0%",
      left: "100%",
      top: "100px",
      x: -100,
    },
    options: defaultTransition,
  },
  {
    className: ".third",
    styles: {
      height: "60px",
      width: "60px",
      left: "calc(100% - 160px)",
      top: "40px",
    },
    options: defaultTransition,
  },
  {
    className: ".fourth",
    styles: {
      height: "0%",
      width: "0%",
      left: "100%",
      top: "100px",
      x: -160,
    },
    options: defaultTransition,
  },
  {
    className: ".fifth",
    styles: {
      height: "40px",
      width: "40px",
      left: "calc(100% - 200px)",
      top: "60px",
    },
    options: defaultTransition,
  },
];
function HomePage() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    document.body.classList.remove("loading");
    async function animateTimeline() {
      await animate(scene1[0].className, scene1[0].styles, scene1[0].options);
      animate(scene2[0].className, scene2[0].styles, scene2[0].options);
      animate(scene2[1].className, scene2[1].styles, scene2[1].options);
      await animate(scene2[2].className, scene2[2].styles, scene2[2].options);
      animate(scene3[0].className, scene3[0].styles, scene3[0].options);
      animate(scene3[1].className, scene3[1].styles, scene3[1].options);
      animate(scene3[2].className, scene3[2].styles, scene3[2].options);
      await animate(scene3[3].className, scene3[3].styles, scene3[3].options);
      animate(scene4[0].className, scene4[0].styles, scene4[0].options);
      animate(scene4[1].className, scene4[1].styles, scene4[1].options);
      animate(scene4[2].className, scene4[2].styles, scene4[2].options);
      await animate(scene4[3].className, scene4[3].styles, scene4[3].options);
    }
    animateTimeline();
  }, []);
  return (
    <div>
      <div
        style={{
          width: "100%",
          scrollSnapAlign: "start",
          minHeight: "100vh",
        }}
      >
        <motion.header
          style={{
            position: "relative",
            height: "132px",
            width: "100%",
          }}
        >
          <motion.div
            layout
            ref={scope}
            style={{
              position: "fixed",
              top: 16,
              bottom: 16,
              left: 16,
              right: 16,
            }}
            animate={{
              position: "absolute",
              transition: {
                delay: 2.5,
              },
            }}
          >
            <motion.div
              style={{
                position: "absolute",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
              className="first"
              initial={{
                width: "100%",
                height: "100%",
                clipPath: "inset(100% 0px 0px 0px)",
              }}
            >
              <CharacterA style={{ height: "100%", fill: "blue" }}></CharacterA>
            </motion.div>
            <motion.div
              layout
              className="second"
              style={{
                position: "absolute",
                overflow: "hidden",
              }}
              initial={{
                bottom: 0,
                left: 0,
                height: 0,
                width: 0,
              }}
            >
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
                src="/tim-mossholder.jpg"
              />
            </motion.div>
            <motion.div
              style={{
                position: "absolute",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
              className="third"
              initial={{
                top: "100%",
                left: 0,
                height: 0,
                width: 0,
              }}
            >
              <CharacterA style={{ height: "100%", fill: "blue" }}></CharacterA>
            </motion.div>
            <motion.div
              layout
              className="fourth"
              style={{
                position: "absolute",
                overflow: "hidden",
              }}
              initial={{
                bottom: 0,
                left: 0,
                height: 0,
                width: 0,
              }}
            >
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
                src="/tim-mossholder.jpg"
              />
            </motion.div>
            <motion.div
              style={{
                position: "absolute",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
              className="fifth"
              initial={{
                bottom: 0,
                left: 0,
                height: 0,
                width: 0,
              }}
            >
              <CharacterA style={{ height: "100%", fill: "blue" }}></CharacterA>
            </motion.div>
          </motion.div>
          <motion.nav
            style={{
              display: "flex",
              gap: "8px",
              fontSize: "18px",
              margin: "16px",
            }}
            initial={{ y: "-40px" }}
            animate={{
              y: 0,
              transition: { delay: 2, duration: 0.6, ease: "easeIn" },
            }}
          >
            <button
              style={{
                backgroundColor: "#1C49DF",
                textAlign: "center",
                color: "white",
                fontSize: "19px",
                padding: "3px 18px 0px 18px",
                borderRadius: "20px",
                border: "none",
                cursor: "pointer",
              }}
            >
              <CgOptions />
            </button>
            <button
              style={{
                backgroundColor: "#1C49DF",
                textAlign: "center",
                color: "white",
                fontSize: "19px",
                padding: "3px 18px 0px 18px",
                borderRadius: "20px",
                border: "none",
                cursor: "pointer",
              }}
            >
              <IoCartOutline />
            </button>
            <ul style={{ display: "flex", listStyleType: "none", gap: "8px" }}>
              <li>MAN</li>
              <li>WOMAN</li>
              <li>FITNESS</li>
              <li>SALE</li>
            </ul>
          </motion.nav>
        </motion.header>
        <motion.main>
          <div className="body-header" style={{ padding: "0px 16px" }}>
            <motion.div
              style={{ display: "flex", alignItems: "baseline" }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  ...defaultTransition,
                },
              }}
            >
              <motion.img
                style={{
                  height: "100px",
                  width: "80px",
                  paddingRight: "30px",
                }}
                src="/jacket-small.jpg"
                initial={{ y: "-80px", opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { ...defaultTransition, delay: 2.5 },
                }}
              />
              <div style={{ overflow: "hidden" }}>
                <motion.h1
                  style={{ fontSize: "80px", fontFamily: "Roboto" }}
                  initial={{ y: "80px", opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { ...defaultTransition, delay: 2.5 },
                  }}
                >
                  {" "}
                  A Winter Story{" "}
                </motion.h1>
              </div>
            </motion.div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                overflow: "hidden",
              }}
            >
              <motion.h1
                style={{
                  fontFamily: "IBM Plex Serif",
                  fontSize: "70px",
                }}
                initial={{ y: "70px", opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { ...defaultTransition, delay: 2.8 },
                }}
              >
                Promotion Up To 50%
              </motion.h1>
              <motion.div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flex: "1",
                  padding: "16px 0px 16px 16px",
                }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { ...defaultTransition, delay: 2.5 },
                }}
              >
                <button
                  style={{
                    backgroundColor: "#1C49DF",
                    textAlign: "center",
                    color: "white",
                    fontSize: "19px",
                    padding: "1px 18px",
                    borderRadius: "20px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <FaArrowRight />
                </button>
                <div>
                  <button
                    style={{
                      backgroundColor: "#fff",
                      border: "1.5px solid #d5d9d9",
                      borderRadius: "20px",
                      color: "#0f1111",
                      cursor: "pointer",
                      display: "inline-block",
                      fontSize: "13px",
                      lineHeight: "25px",
                      padding: "0 20px",
                      position: "relative",
                      textAlign: "center",
                    }}
                  >
                    JACKET
                  </button>
                  <button
                    style={{
                      backgroundColor: "#fff",
                      border: "1.5px solid #d5d9d9",
                      borderRadius: "20px",
                      color: "#0f1111",
                      cursor: "pointer",
                      display: "inline-block",
                      fontSize: "13px",
                      lineHeight: "25px",
                      padding: "0 20px",
                      position: "relative",
                      textAlign: "center",
                      marginLeft: "10px",
                    }}
                  >
                    BLACK
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="body-img"
            style={{ marginTop: "50px", padding: "0px 16px" }}
            initial={{
              clipPath: "inset(100% 0px 0px 0px)",
              overflow: "hidden",
            }}
            animate={{ clipPath: "inset(0 0 0 0)", overflow: "auto" }}
            transition={{ delay: 1.5, duration: 0.75, ease: "easeOut" }}
          >
            <motion.img
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
              initial={{ scale: 1.05 }}
              animate={{
                scale: 1,
                borderRadius: "10px",
                transition: { delay: 2.5, ease: "easeIn", duration: "0.5" },
              }}
              src="/body-img.jpeg"
            />
          </motion.div>
        </motion.main>
      </div>
      <div
        className="shop-page"
        style={{
          scrollSnapAlign: "start",
          display: "flex",
        }}
      >
        <header
          style={{
            display: "flex",
            flex: "1",
            gap: "16px",
            margin: "16px",
            overflow: "hidden",
            height: "1230px",
          }}
        >
          <motion.div
            style={{
              height: "100%",
            }}
            initial={{ width: "70%" }}
            whileInView={{
              width: "30%",
              transition: { delay: 1, duration: 1, ease: "linear" },
            }}
            viewport={{ margin: "90% 0px 0px 0px" }}
          >
            <div style={{ overflow: "hidden" }}>
              <motion.h1
                style={{ fontSize: "80px", fontFamily: "Roboto" }}
                initial={{ y: "80px", opacity: 0 }}
                whileInView={{
                  y: "0",
                  opacity: 1,
                  transition: h1Transition,
                }}
              >
                Shop
              </motion.h1>
              <motion.h1
                style={{
                  fontFamily: "IBM Plex Serif",
                  fontSize: "70px",
                }}
                initial={{ y: "70px", opacity: 0 }}
                whileInView={{
                  y: "0",
                  opacity: 1,
                  transition: h1Transition,
                }}
              >
                Man
              </motion.h1>
            </div>
            <img
              src="/jacket-men.png"
              style={{
                flex: 1,
                width: "100%",
                borderRadius: "12px",
                marginTop: "32px",
              }}
            />
          </motion.div>
          <motion.div
            style={{
              // display: "flex",
              // flrx: 1,
              flexDirection: "column",
              height: "100vh",
            }}
            initial={{ width: "30%" }}
            animate={{
              width: "70%",
              transition: { delay: 1, duration: 1, ease: "linear" },
            }}
          >
            <div>
              <motion.h1
                style={{ fontSize: "80px", fontFamily: "Roboto" }}
                initial={{ y: "80px", opacity: 0 }}
                whileInView={{
                  y: "0",
                  opacity: 1,
                  transition: h1Transition,
                }}
              >
                Shop
              </motion.h1>
              <motion.h1
                style={{
                  fontFamily: "IBM Plex Serif",
                  fontSize: "70px",
                }}
                initial={{ y: "70px", opacity: 0 }}
                whileInView={{
                  y: "0",
                  opacity: 1,
                  transition: h1Transition,
                }}
              >
                Woman
              </motion.h1>
            </div>
            <img
              src="/jacket-women.png"
              style={{
                flex: 1,
                width: "100%",
                borderRadius: "12px",
                marginTop: "32px",
              }}
            />
          </motion.div>
        </header>
      </div>
    </div>
  );
}

export default HomePage;
