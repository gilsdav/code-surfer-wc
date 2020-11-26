import React, { /*useContext,*/ useEffect } from 'react';
import PropTypes from 'prop-types';
// import { EventContext/*, Styled*/ } from 'direflow-component';
// import styles from './App.css';
import { CodeSurfer } from "@code-surfer/standalone";
import { base, vsDark } from "@code-surfer/themes";
import { useSpring } from "use-spring";

const App = (props) => {
  // const dispatch = useContext(EventContext);

  // const handleClick = () => {
  //   const event = new Event('my-event');
  //   dispatch(event);
  // };

  const [{ progress, teleport }, setProgress] = React.useState({
    progress: 0,
    teleport: true
  });
  const [p] = useSpring(progress, {
    decimals: 3,
    stiffness: 80,
    damping: 48,
    mass: 8,
    teleport
  });

  useEffect( () => {
    if (props.progress >= 0 && props.progress <= (props.steps.length - 1)) {
      setProgress({ progress: props.progress, teleport: false });
    }
  }, [props.progress, props.steps])

  return (
    <div style={{
      width: props.width,
      height: props.height,
      display: "flex",
      alignItems: "center",
      fontSize: props.fontSize
    }}>
      <style dangerouslySetInnerHTML={{__html: `
        .cs-content, .cs-scaled-content {
          background-color: transparent;
        }
      `}}></style>
      <CodeSurfer progress={p} steps={props.steps} theme={props.dark ? vsDark : base} />
    </div>
  );
};

App.defaultProps = {
  width: '100%',
  height: '95vh',
  fontSize: '2rem',
  dark: true,
  progress: 0,
  steps: [
    {
      code: `var x1 = 1
debugger`,
      focus: "1",
      lang: "js"
    },
    {
      code: `var x0 = 3
var x1 = 1
var x0 = 3`,
      lang: "js"
    }
  ]
}

App.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  dark: PropTypes.bool,
  progress: PropTypes.number,
  steps: PropTypes.array
};

// App.componentWillReceiveProps = (nextProps) => {
//   console.log('test');
//   // You don't have to do this check first, but it can help prevent an unneeded render
//   if (nextProps.progress !== this.state.progress) {
//     // this.setState({ startTime: nextProps.startTime });
//     this.setProgress({ progress: nextProps.progress });
//   }
// }


export default App;
