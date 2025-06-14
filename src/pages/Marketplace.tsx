import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  TextField,
  InputAdornment,
} from '@mui/material';
import {
  Search as SearchIcon,
  ShoppingCart as CartIcon,
  LocalShipping as ShippingIcon,
  Star as StarIcon,
} from '@mui/icons-material';

const products = [
  {
    id: 1,
    title: 'Органические удобрения',
    description: 'Экологически чистые удобрения для повышения урожайности',
    price: '2,500 ₽/кг',
    image: 'https://source.unsplash.com/random/300x200?fertilizer',
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    title: 'Семена пшеницы',
    description: 'Высокоурожайный сорт пшеницы',
    price: '1,800 ₽/кг',
    image: 'https://source.unsplash.com/random/300x200?wheat',
    rating: 4.5,
    reviews: 89,
  },
  {
    id: 3,
    title: 'Сельскохозяйственный дрон',
    description: 'Профессиональный дрон для мониторинга полей',
    price: '450,000 ₽',
    image: 'https://source.unsplash.com/random/300x200?drone',
    rating: 4.9,
    reviews: 56,
  },
];

const services = [
  {
    title: 'Анализ почвы',
    description: 'Профессиональный анализ почвы с рекомендациями',
    price: '5,000 ₽',
    duration: '2-3 дня',
  },
  {
    title: 'Консультация агронома',
    description: 'Индивидуальная консультация по повышению урожайности',
    price: '3,000 ₽/час',
    duration: '1 час',
  },
  {
    title: 'Аренда дрона',
    description: 'Аренда дрона с оператором для мониторинга полей',
    price: '15,000 ₽/день',
    duration: '1 день',
  },
];

const Marketplace: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Маркетплейс
      </Typography>

      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Поиск товаров и услуг..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Товары
          </Typography>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} md={4} key={product.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      {product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      gutterBottom
                    >
                      {product.description}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 2,
                      }}
                    >
                      <Typography variant="h6" color="primary">
                        {product.price}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <StarIcon sx={{ color: '#ffc107', mr: 0.5 }} />
                        <Typography variant="body2">
                          {product.rating} ({product.reviews})
                        </Typography>
                      </Box>
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      startIcon={<CartIcon />}
                      sx={{ mt: 2 }}
                    >
                      В корзину
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Услуги
          </Typography>
          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      gutterBottom
                    >
                      {service.description}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 2,
                      }}
                    >
                      <Typography variant="h6" color="primary">
                        {service.price}
                      </Typography>
                      <Chip
                        icon={<ShippingIcon />}
                        label={service.duration}
                        size="small"
                      />
                    </Box>
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      sx={{ mt: 2 }}
                    >
                      Заказать
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardHeader title="Популярные категории" />
            <CardContent>
              <Grid container spacing={2}>
                {['Семена', 'Удобрения', 'Техника', 'Инструменты', 'Сервисы'].map(
                  (category) => (
                    <Grid item key={category}>
                      <Chip
                        label={category}
                        onClick={() => {}}
                        color="primary"
                        variant="outlined"
                      />
                    </Grid>
                  )
                )}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Marketplace; 