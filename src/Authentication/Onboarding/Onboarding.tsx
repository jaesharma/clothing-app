import React, {useRef} from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  ImageRequireSource,
} from "react-native";
// import {ScrollView} from "react-native-gesture-handler";
import Animated, {
  divide,
  Extrapolate,
  interpolateColors,
  interpolateNode,
  multiply,
} from "react-native-reanimated";
import {useScrollHandler} from "react-native-redash";

import Slide from "./Slide";
import SubSlide from "./SubSlide";
import Dot from "./Dot";
import * as Images from "./../../images/index";

const {width, height} = Dimensions.get("window");
const BORDER_RADIUS = 75;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: 0.61 * height,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    height: BORDER_RADIUS,
    justifyContent: "center",
    alignItems: "center",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

const slides = [
  {
    label: "Relaxed",
    color: "#bfeaf5",
    subtitle: "Find your outfits",
    description:
      "Confused about your outfits? Don't worry! Find the best outfits here!",
    picture: {
      src: Images.MODEL_1,
      width: 2513,
      height: 3583,
    },
  },
  {
    label: "Playful",
    color: "#beecc4",
    subtitle: "Hear it first, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfits ideas here.",
    picture: {
      src: Images.MODEL_2,
      width: 2791,
      height: 3744,
    },
  },
  {
    label: "Excentric",
    color: "#ffe4d9",
    subtitle: "Your style, Your way!",
    description:
      "Create our individual & unique style and look amazing everyday",
    picture: {
      src: Images.MODEL_3,
      width: 2738,
      height: 3244,
    },
  },
  {
    label: "Funky",
    color: "#ffdddd",
    subtitle: "Look good, Feel good",
    description:
      "Wear the latest trends in fashion and explore your personality",
    picture: {
      src: Images.MODEL_4,
      width: 1757,
      height: 2551,
    },
  },
];

const Onboarding = props => {
  const scroll = useRef<Animated.ScrollView>(null);
  const {scrollHandler, x} = useScrollHandler();
  const inputRange = slides.map((_, index) => index * width);
  const outputColorRange = slides.map(slide => slide.color);
  const backgroundColor = interpolateColors(x, {
    inputRange,
    outputColorRange,
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, {backgroundColor}]}>
        {slides.map(({picture}, index) => {
          const opacity = interpolateNode(x, {
            inputRange: [
              (index - 0.5) * width,
              index * width,
              (index + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View style={[styles.underlay, {opacity}]} key={index}>
              <Image
                source={picture.src}
                style={{
                  width: width - BORDER_RADIUS,
                  height:
                    ((width - BORDER_RADIUS) * picture.height) / picture.width,
                }}
              />
            </Animated.View>
          );
        })}
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}>
          {slides.map((slideData, index) => (
            <Slide {...slideData} right={!!(index % 2)} key={index} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{...StyleSheet.absoluteFillObject, backgroundColor}}
        />
        <View style={[styles.footerContent]}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot
                key={index}
                currentIndex={divide(x, width)}
                {...{index, x}}
              />
            ))}
          </View>
          <Animated.View
            style={{
              width: width * slides.length,
              flex: 1,
              flexDirection: "row",
              transform: [
                {
                  translateX: multiply(x, -1),
                },
              ],
            }}>
            {slides.map(({subtitle, description}, index) => {
              const last = index === slides.length - 1;
              return (
                <SubSlide
                  key={index}
                  onPress={() => {
                    if (last) {
                      props.navigation.navigate("Welcome");
                    } else {
                      if (scroll.current) {
                        scroll.current?.scrollTo({
                          x: width * (index + 1),
                          animated: true,
                        });
                      }
                    }
                  }}
                  {...{subtitle, description, last}}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
