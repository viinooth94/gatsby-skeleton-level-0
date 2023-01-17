import { useState, useRef, useLayoutEffect, useMemo } from "react";

// CANVAS
///////////

function set_window(canvas) {
  // need that to pass gatsby build
  const browser_is = typeof window !== "undefined";
  if(browser_is) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
}

export function GetWindow() {
  let canvas = {width:0, height:0};
  set_window(canvas);

  const [size, set_size] = useState(canvas);
  useRef(size);

  useLayoutEffect(() => {
    function window_resize(event) {
      set_window(canvas);
      set_size(canvas);
    }
    window.addEventListener("resize", window_resize)
    return () => {
      window.removeEventListener("resize", window_resize);
    }
  }, [canvas]);
  return canvas;
}

export function GetWidth() {
  return GetWindow().width;
}

export function Window_is_higher_than(value) {
  if(GetWidth() > value) {
    return true;
  } else return false;
}

// MISC
///////

export function get_css_value(name) {
  const browser_is = typeof window !== "undefined";
  if(browser_is) {
    return getComputedStyle(document.documentElement).getPropertyValue(name);
  } else return undefined;
}