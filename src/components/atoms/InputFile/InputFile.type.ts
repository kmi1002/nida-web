export enum FileStatus {
  none = 'none',
  count = 'count',
  format = 'format',
}

export interface InputBaseProps {
  label: string;
  placeholder: string;
  preview?: 'file' | 'image';
  accept?: string;
  items?: { [k: string]: any }[];
  errorCount: string;
  errorEmpty: string;
}

export interface InputFileProps extends InputBaseProps {
  maxCount: number;
}

export interface InputFileViewProps extends InputBaseProps {
  status: FileStatus;
  onPropChangeFiles: (files: File[]) => void;
  onPropRemove: (file: number) => void;
}
