import {useRef} from 'react';
import {View} from "react-native";

import {arrow,shift, useFloating} from '.';

App;
function App() {
  const arrowRef = useRef(null);
  useFloating();
  const {reference, floating, update} = useFloating({
    placement: 'right',
    middleware: [shift(), arrow({element: arrowRef})],
    // @ts-expect-error
    strategy: 'fixed',
  });
  reference(null);
  reference({
    getBoundingClientRect() {
      return {
        x: 0,
        y: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: 0,
        height: 0,
      };
    },
  });
  reference(null);
  floating(null);
  update();
  return <View ref={arrowRef} />
}
