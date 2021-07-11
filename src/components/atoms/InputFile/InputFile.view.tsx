import React from 'react';
import { FormControl, FormHelperText, Button, IconButton, Typography } from '@material-ui/core';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { bytesToSize } from '@/helpers/UnitHelpers';
import { useStyles } from './InputFile.style';
import { InputFileViewProps, FileStatus } from './InputFile.type';

const InputFileView = ({
  status,
  label,
  placeholder,
  preview,
  accept,
  items,
  errorEmpty,
  errorCount,
  onPropChangeFiles,
  onPropRemove,
}: InputFileViewProps) => {
  const style = useStyles();

  const makeLabelId = () => {
    return `input-file`;
  };

  const helperText = () => {
    switch (status) {
      case FileStatus.count:
        return errorCount;
      default:
        return '';
    }
  };

  return (
    <div>
      <FormControl error={status !== FileStatus.none}>
        <div className={style.container}>
          <input
            type="file"
            accept={accept}
            id={makeLabelId()}
            className={style.input}
            multiple
            onChange={event => {
              event.preventDefault();

              const target = event.target as HTMLInputElement;
              if (target.files && target.files.length) {
                onPropChangeFiles(Array.from(target.files));
              }
            }}
          />
          <label htmlFor={makeLabelId()}>
            <Button variant="contained" color="primary" component="span">
              {label}
            </Button>
          </label>
          <Typography variant="overline" className={style.placeholder}>
            {placeholder}
          </Typography>
        </div>
        <FormHelperText>{helperText()}</FormHelperText>
      </FormControl>
      {items && (
        <div className={style.previewContainer}>
          {items.length === 0 ? (
            <p>{errorEmpty}</p>
          ) : (
            items.map(({ file, url }, index) => (
              <div key={url} className={style.previewWrapper}>
                {preview === 'image' && (
                  <>
                    <img src={url} alt="" className={style.image} />
                    <IconButton className={style.imageRemove} onClick={() => onPropRemove(index)}>
                      <RemoveCircleOutlineIcon />
                    </IconButton>
                  </>
                )}
                {preview === 'file' && (
                  <>
                    <span className={style.file}>{`${file.name} (${bytesToSize(file.size)})`}</span>
                    <IconButton className={style.fileRemove} onClick={() => onPropRemove(index)}>
                      <RemoveCircleOutlineIcon />
                    </IconButton>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default InputFileView;
