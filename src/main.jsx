import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// 01. JSX syntax

// 01. Returning multiple elements
import App from "./01-jsx-syntax/01-returning-multiple-elements/01-bad-example";
// import App from "./01-jsx-syntax/01-returning-multiple-elements/02-good-example";
// import App from "./01-jsx-syntax/01-returning-multiple-elements/03-alternative-example";

// 02. Not generating unique keys
// import App from "./01-jsx-syntax/02-not-generating-unique-keys/01-bad-example";
// import App from './01-jsx-syntax/02-not-generating-unique-keys/02-wrong-example'
// import App from "./01-jsx-syntax/02-not-generating-unique-keys/03-good-example";
// import App from "./01-jsx-syntax/02-not-generating-unique-keys/04-wrong-example";

// 03. Rendering zero by mistake
// import App from "./01-jsx-syntax/03-rendering-zero-by-mistake/01-bad-example";
// import App from "./01-jsx-syntax/03-rendering-zero-by-mistake/02-good-example";
// import App from "./01-jsx-syntax/03-rendering-zero-by-mistake/03-alternative-example";

// 04. Missing whitespace in JSX
// import App from "./01-jsx-syntax/04-missing-whitespace-in-jsx/01-bad-example";
// import App from "./01-jsx-syntax/04-missing-whitespace-in-jsx/02-good-example";
// import App from "./01-jsx-syntax/04-missing-whitespace-in-jsx/03-alternative-example";

// 05. Missing curly brackets in styles
// import App from './01-jsx-syntax/05-missing-curly-brackets-in-styles/01-bad-example'
// import App from './01-jsx-syntax/05-missing-curly-brackets-in-styles/02-bad-example'
// import App from './01-jsx-syntax/05-missing-curly-brackets-in-styles/03-good-example'
// import App from "./01-jsx-syntax/05-missing-curly-brackets-in-styles/04-alternative-example";

// 06. Using class instead of className
// import App from './01-jsx-syntax/06-using-class-instead-of-classname/01-bad-example'
// import App from './01-jsx-syntax/06-using-class-instead-of-classname/02-good-example'

// 07. Ignoring how virtual DOM works
// import App from './01-jsx-syntax/07-ignoring-how-virtual-dom-works/01-bad-example'
// import App from './01-jsx-syntax/07-ignoring-how-virtual-dom-works/02-good-example'

// 02. useState hook

// 01. Mixing up state and props
// import App from './02-use-state-hook/01-mixing-up-state-and-props/01-bad-example'
// import App from './02-use-state-hook/01-mixing-up-state-and-props/02-good-example'

// 02. Mutating state directly
// import App from './02-use-state-hook/02-mutating-state-directly/01-bad-example'
// import App from './02-use-state-hook/02-mutating-state-directly/02-good-example'

// 03. Reading state right after update
// import App from './02-use-state-hook/03-reading-state-right-after-update/01-bad-example'
// import App from './02-use-state-hook/03-reading-state-right-after-update/02-good-example'

// 04. Forgetting functional updates
// import App from './02-use-state-hook/04-forgetting-functional-updates/01-bad-example'
// import App from './02-use-state-hook/04-forgetting-functional-updates/02-good-example'

// 05. Using hooks inside loops or conditions
// import App from './02-use-state-hook/05-using-hooks-inside-loops-or-conditions/01-bad-example'
// import App from './02-use-state-hook/05-using-hooks-inside-loops-or-conditions/02-bad-example'
// import App from './02-use-state-hook/05-using-hooks-inside-loops-or-conditions/03-bad-example'
// import App from './02-use-state-hook/05-using-hooks-inside-loops-or-conditions/04-good-example'

// 06. Switching from uncontrolled to controlled
// import App from './02-use-state-hook/06-switching-from-uncontrolled-to-controlled/01-bad-example'
// import App from './02-use-state-hook/06-switching-from-uncontrolled-to-controlled/02-good-uncontrolled-example'
// import App from './02-use-state-hook/06-switching-from-uncontrolled-to-controlled/03-good-controlled-example'
// import App from './02-use-state-hook/06-switching-from-uncontrolled-to-controlled/04-good-uncontrolled-with-default-value-example'
// import App from './02-use-state-hook/06-switching-from-uncontrolled-to-controlled/05-good-controlled-with-default-value-example'

// 03. useEffect hook

// 01. Forgetting dependency arrays in useEffect
// import App from './03-use-effect-hook/01-forgetting-dependency-arrays-in-useeffect/01-bad-example'
// import App from './03-use-effect-hook/01-forgetting-dependency-arrays-in-useeffect/02-good-example'

// 02. Missing dependencies from useEffect
// import App from './03-use-effect-hook/02-missing-dependencies-from-useeffect/01-bad-example'
// import App from './03-use-effect-hook/02-missing-dependencies-from-useeffect/02-good-example'

// 03. Creating infinite loops with useEffect
// import App from './03-use-effect-hook/03-creating-infinite-loops-with-useeffect/01-bad-example'
// import App from './03-use-effect-hook/03-creating-infinite-loops-with-useeffect/02-good-example'

// 04. Adding everything to the dependency array
// import App from './03-use-effect-hook/04-adding-everything-to-the-dependency-array/01-bad-example'
// import App from './03-use-effect-hook/04-adding-everything-to-the-dependency-array/02-good-example'

// 05. Not cleaning up effects properly
// import App from './03-use-effect-hook/05-not-cleaning-up-effects-properly/01-bad-example'
// import App from './03-use-effect-hook/05-not-cleaning-up-effects-properly/02-good-example'

// 06. Using async functions inside useEffect
// import App from './03-use-effect-hook/06-using-async-functions-inside-useeffect/01-bad-example'
// import App from './03-use-effect-hook/06-using-async-functions-inside-useeffect/02-good-example'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
