import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  LinearProgress,
} from '@mui/material';
import {
  Science as ScienceIcon,
  Water as WaterIcon,
  Grass as GrassIcon,
  Thermostat as ThermostatIcon,
} from '@mui/icons-material';

const soilData = {
  moisture: 65,
  nitrogen: 45,
  phosphorus: 60,
  potassium: 75,
  ph: 6.5,
  temperature: 22,
};

const recommendations = [
  {
    title: 'Уровень влажности',
    description: 'Оптимальный уровень влажности для текущей культуры',
    icon: <WaterIcon />,
    value: soilData.moisture,
    unit: '%',
  },
  {
    title: 'Содержание азота',
    description: 'Требуется дополнительное внесение азотных удобрений',
    icon: <ScienceIcon />,
    value: soilData.nitrogen,
    unit: 'ppm',
  },
  {
    title: 'Содержание фосфора',
    description: 'Уровень фосфора в пределах нормы',
    icon: <ScienceIcon />,
    value: soilData.phosphorus,
    unit: 'ppm',
  },
  {
    title: 'Содержание калия',
    description: 'Высокое содержание калия, рекомендуется снизить внесение',
    icon: <ScienceIcon />,
    value: soilData.potassium,
    unit: 'ppm',
  },
];

const SoilAnalysis: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Анализ почвы
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2, height: '400px' }}>
            <Typography variant="h6" gutterBottom>
              Карта анализа почвы
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
                Здесь будет интерактивная карта с данными анализа почвы
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader title="Общие показатели" />
            <CardContent>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <ThermostatIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Температура почвы"
                    secondary={`${soilData.temperature}°C`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ScienceIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="pH почвы"
                    secondary={soilData.ph}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {recommendations.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardHeader
                title={item.title}
                avatar={item.icon}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {item.description}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                  <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={item.value}
                      color={
                        item.value > 70
                          ? 'success'
                          : item.value > 40
                          ? 'warning'
                          : 'error'
                      }
                    />
                  </Box>
                  <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="textSecondary">
                      {`${item.value}${item.unit}`}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Grid item xs={12}>
          <Card>
            <CardHeader title="Рекомендации по удобрениям" />
            <CardContent>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <GrassIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Азотные удобрения"
                    secondary="Рекомендуется внести 30 кг/га в течение недели"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GrassIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Фосфорные удобрения"
                    secondary="Текущий уровень достаточен, внесение не требуется"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GrassIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Калийные удобрения"
                    secondary="Снизить внесение на 20% в следующем цикле"
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

export default SoilAnalysis; 