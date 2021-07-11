import React from 'react';
import * as S from './AccordionArticle.style';
import * as T from './AccordionArticle.type';
import { InputLabel, TextField, Typography } from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

const AccordionArticleView = ({ categories, rows }: T.AccordionArticleViewProps) => {
  return (
    <div>
      {categories && (
        <div>
          {categories.map(({ title }, index) => (
            <span>{title}</span>
          ))}
        </div>
      )}
      <div>
        {rows.map(({ id, title, description, date, expand }, index) => (
          <MuiAccordion key={id} square>
            <MuiAccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>{title}</Typography>
            </MuiAccordionSummary>
            <MuiAccordionDetails>
              <Typography>{description}</Typography>
            </MuiAccordionDetails>
          </MuiAccordion>
        ))}
      </div>
    </div>
  );
};

export default AccordionArticleView;
