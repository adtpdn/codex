import { Progress as AntProgress } from 'antd';
import type { ProgressProps } from 'antd';

export const Progress = ({ ...props }: ProgressProps) => {
  return <AntProgress {...props} />;
};