import { ChangeEventHandler } from 'react';
import { RawDraftContentState } from 'draft-js';

export interface WYSIWYGProps {
  value: string;
  onChange: (contentState: RawDraftContentState) => void;
  onBlur: ChangeEventHandler;
  className?: string;
}
