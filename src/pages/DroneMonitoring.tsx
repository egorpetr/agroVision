import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  CardHeader,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
} from '@mui/material';
import {
  Flight as DroneIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';

const drones = [
  {
    id: 1,
    name: 'Дрон #1',
    status: 'Активен',
    battery: 85,
    currentTask: 'Сканирование поля А',
    lastUpdate: '10:30',
  },
  {
    id: 2,
    name: 'Дрон #2',
    status: 'На зарядке',
    battery: 20,
    currentTask: 'Ожидание',
    lastUpdate: '10:15',
  },
  {
    id: 3,
    name: 'Дрон #3',
    status: 'Активен',
    battery: 65,
    currentTask: 'Анализ почвы',
    lastUpdate: '10:45',
  },
];

const DroneMonitoring: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Мониторинг дронами
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2, height: '400px' }}>
            <Typography variant="h6" gutterBottom>
              Карта полей
            </Typography>
            <Box
              sx={{
                width: '100%',
                height: '300px',
                bgcolor: '#e8f5e9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography color="textSecondary">
                Здесь будет интерактивная карта с данными дронов
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader title="Статус дронов" />
            <CardContent>
              <List>
                {drones.map((drone) => (
                  <ListItem key={drone.id}>
                    <ListItemIcon>
                      <DroneIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={drone.name}
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                          >
                            {drone.currentTask}
                          </Typography>
                          <br />
                          Батарея: {drone.battery}% | Последнее обновление:{' '}
                          {drone.lastUpdate}
                        </>
                      }
                    />
                    <Chip
                      label={drone.status}
                      color={drone.status === 'Активен' ? 'success' : 'default'}
                      size="small"
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardHeader title="Последние обнаруженные проблемы" />
            <CardContent>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <WarningIcon color="warning" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Зона с повышенной влажностью"
                    secondary="Поле B, сектор 3 | Обнаружено в 10:30"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WarningIcon color="warning" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Возможное заболевание растений"
                    secondary="Поле A, сектор 1 | Обнаружено в 10:15"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Все показатели в норме"
                    secondary="Поле C | Проверено в 10:45"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardHeader
              title="Планировщик задач"
              action={
                <Button variant="contained" color="primary">
                  Добавить задачу
                </Button>
              }
            />
            <CardContent>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <ScheduleIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Полное сканирование поля A"
                    secondary="Запланировано на 14:00"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ScheduleIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Анализ почвы в секторе B2"
                    secondary="Запланировано на 15:30"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DroneMonitoring; 