export interface BtnProps {
  text: string;
  onClick?: () => void;
  classNames?: string;
  rightIcon?: () => React.ReactNode;
  leftIcon?: () => React.ReactNode;
  type?: string;
}
