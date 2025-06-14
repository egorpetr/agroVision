import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Янв', урожайность: 65, затраты: 40 },
  { name: 'Фев', урожайность: 70, затраты: 45 },
  { name: 'Мар', урожайность: 75, затраты: 50 },
  { name: 'Апр', урожайность: 80, затраты: 55 },
  { name: 'Май', урожайность: 85, затраты: 60 },
  { name: 'Июн', урожайность: 90, затраты: 65 },
];

const Dashboard: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Панель управления
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Общая площадь
              </Typography>
              <Typography variant="h5">1,200 га</Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Текущая урожайность
              </Typography>
              <Typography variant="h5">85%</Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Экономия ресурсов
              </Typography>
              <Typography variant="h5">30%</Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Активные дроны
              </Typography>
              <Typography variant="h5">5/5</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Динамика урожайности и затрат
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="урожайность"
                    stroke="#2e7d32"
                    name="Урожайность"
                  />
                  <Line
                    type="monotone"
                    dataKey="затраты"
                    stroke="#ff9800"
                    name="Затраты"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Последние события" />
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                • Дрон #3 завершил сканирование поля А
              </Typography>
              <Typography variant="body2" color="textSecondary">
                • Обнаружена зона с повышенной влажностью
              </Typography>
              <Typography variant="body2" color="textSecondary">
                • Запланирован полив на 15:00
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Рекомендации ИИ" />
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                • Увеличить полив в секторе B2
              </Typography>
              <Typography variant="body2" color="textSecondary">
                • Проверить уровень азота в почве
              </Typography>
              <Typography variant="body2" color="textSecondary">
                • Оптимизировать маршруты дронов
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard; 