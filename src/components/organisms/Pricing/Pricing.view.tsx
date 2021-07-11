import React from 'react';
import { Card, CardActions, CardContent, CardHeader, Grid, Container, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/StarBorder';
import InputButton from '@/atoms/InputButton';
import { useTranslation } from 'next-i18next';

const PricingView = () => {
  const { t } = useTranslation('common');

  const tiers = [
    {
      title: t('pricing.tires.basic.title'),
      price: '9900',
      description: t('pricing.tires.basic.descriptions').split(','),
      buttonText: t('pricing.tires.basic.process'),
      buttonVariant: 'outlined',
    },
    {
      title: t('pricing.tires.plus.title'),
      price: '19000',
      description: t('pricing.tires.plus.descriptions').split(','),
      buttonText: t('pricing.tires.plus.process'),
      buttonVariant: 'outlined',
    },
    {
      title: t('pricing.tires.premium.title'),
      subheader: t('pricing.tires.premium.subTitle'),
      price: '29000',
      description: t('pricing.tires.premium.descriptions').split(','),
      buttonText: t('pricing.tires.premium.process'),
      buttonVariant: 'contained',
    },
    {
      title: t('pricing.tires.business.title'),
      price: '-',
      description: t('pricing.tires.business.descriptions').split(','),
      buttonText: t('pricing.tires.business.process'),
      buttonVariant: 'outlined',
    },
  ];

  return (
    <React.Fragment>
      <Container maxWidth="sm" component="main">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          {t('pricing.title')}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          {t('pricing.description')}
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={6} md={3}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                />
                <CardContent>
                  <div>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map(line => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <InputButton variant={tier.buttonVariant} color="primary" fullWidth>
                    {tier.buttonText}
                  </InputButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default PricingView;
