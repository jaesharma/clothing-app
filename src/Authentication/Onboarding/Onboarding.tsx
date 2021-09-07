import React, {useRef} from "react";
import {Dimensions, StyleSheet, View} from "react-native";
// import {ScrollView} from "react-native-gesture-handler";
import Animated, {
  divide,
  interpolateColors,
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
});

const slides = [
  {
    label: "Relaxed",
    color: "#bfeaf5",
    subtitle: "Find your outfits",
    description:
      "Confused about your outfits? Don't worry! Find the best outfits here!",
    picture: Images.MODEL_1,
  },
  {
    label: "Playful",
    color: "#beecc4",
    subtitle: "Hear it first, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfits ideas here.",
    picture: Images.MODEL_2,
  },
  {
    label: "Excentric",
    color: "#ffe4d9",
    subtitle: "Your style, Your way!",
    description:
      "Create our individual & unique style and look amazing everyday",
    picture: Images.MODEL_3,
  },
  {
    label: "Funky",
    color: "#ffdddd",
    subtitle: "Look good, Feel good",
    description:
      "Wear the latest trends in fashion and explore your personality",
    picture: Images.MODEL_4,
  },
];

const ComponentName = () => {
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
            {slides.map(({subtitle, description}, index) => (
              <SubSlide
                key={index}
                onPress={() => {
                  if (scroll.current) {
                    scroll.current.scrollTo({
                      x: width * (index + 1),
                      animated: true,
                    });
                  }
                }}
                last={index === slides.length - 1}
                {...{subtitle, description}}
              />
            ))}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default ComponentName;
