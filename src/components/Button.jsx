import { mergeStyleClassName } from '../utils';
import './Button.css';

const ButtonOutline = ({ children, classlist, ...buttonProps }) => (
  <Button {...buttonProps} classlist={['buttonOutline'].concat(classlist)}>
    {children}
  </Button>
);

const Button = ({ children, className: _, classlist, ...buttonProps }) => (
  <button
    {...buttonProps}
    className={mergeStyleClassName.apply(null, classlist)}
  >
    {children}
  </button>
);

const PrimaryButton = ({ children, ...rest }) => (
  <Button classlist={['buttonPrimary', 'center-content']} {...rest}>
    {children}
  </Button>
);

export { ButtonOutline, PrimaryButton };
