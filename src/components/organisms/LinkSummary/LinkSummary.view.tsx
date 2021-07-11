import React from 'react';
import * as T from './LinkSummary.type';
import * as S from './LinkSummary.style';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const LinkSummaryView = () => {
  return (
    <div>
      <Card variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              사용
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              테스트
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              해제
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              만료
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default LinkSummaryView;
