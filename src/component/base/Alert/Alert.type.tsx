import { AlertType } from 'src/typings';

export interface AlertProps {
  type: AlertType;
  onClose: () => void;
}
