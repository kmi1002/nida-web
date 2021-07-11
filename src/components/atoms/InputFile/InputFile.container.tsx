import React, { useEffect, useState } from 'react';
import InputFileView from './InputFile.view';
import { InputFileProps, FileStatus } from './InputFile.type';

const InputFileContainer = ({
  label,
  placeholder,
  preview,
  accept,
  items,
  maxCount,
  errorEmpty,
  errorCount,
}: InputFileProps) => {
  const [state, setState] = useState<{ status: FileStatus; files: { [k: string]: any }[] }>({
    status: FileStatus.none,
    files: [],
  });

  const getFiles = (files: File[]) => {
    if (preview === 'image') {
      files.forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setState(prevState => ({
            ...prevState,
            files: prevState.files.concat({ file, url: reader.result }),
          }));
        };

        reader.readAsDataURL(file);
      });
    } else {
      files.forEach(file => {
        setState(prevState => ({
          ...prevState,
          status: FileStatus.none,
          files: prevState.files.concat({ file }),
        }));
      });
    }
  };

  const onChangeFiles = (files: File[]) => {
    if (state.files.length + files.length > maxCount) {
      setState({ ...state, status: FileStatus.count });
      return;
    }

    getFiles(files);
  };

  const onRemove = (file: number) => {
    const list = state.files;
    list.splice(file, 1);

    setState({
      ...state,
      files: list,
    });

    // 변경이 되었을 때 초기화
    setState({ ...state, status: FileStatus.none });
  };

  useEffect(() => {}, [state]);

  useEffect(() => {}, [items]);

  return (
    <InputFileView
      status={state.status}
      label={label}
      placeholder={placeholder}
      preview={preview}
      accept={accept}
      items={state.files}
      errorEmpty={errorEmpty}
      errorCount={errorCount}
      onPropChangeFiles={onChangeFiles}
      onPropRemove={onRemove}
    />
  );
};

export default InputFileContainer;
