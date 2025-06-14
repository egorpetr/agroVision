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
  LinearProgress,
} from '@mui/material';
import {
  School as SchoolIcon,
  PlayCircle as PlayCircleIcon,
  Assignment as AssignmentIcon,
  Star as StarIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';

const courses = [
  {
    id: 1,
    title: 'Основы работы с дронами',
    description: 'Изучите базовые принципы управления дронами и их применения в сельском хозяйстве',
    image: 'https://source.unsplash.com/random/300x200?drone',
    progress: 75,
    lessons: 12,
    completed: 9,
  },
  {
    id: 2,
    title: 'Анализ почвы и удобрения',
    description: 'Научитесь проводить анализ почвы и правильно применять удобрения',
    image: 'https://source.unsplash.com/random/300x200?soil',
    progress: 30,
    lessons: 8,
    completed: 2,
  },
  {
    id: 3,
    title: 'Управление урожайностью',
    description: 'Оптимизация процессов выращивания и повышение урожайности',
    image: 'https://source.unsplash.com/random/300x200?agriculture',
    progress: 0,
    lessons: 10,
    completed: 0,
  },
];

const currentLessons = [
  {
    title: 'Управление дроном в сложных погодных условиях',
    course: 'Основы работы с дронами',
    duration: '45 мин',
    completed: true,
  },
  {
    title: 'Анализ данных с датчиков почвы',
    course: 'Анализ почвы и удобрения',
    duration: '30 мин',
    completed: false,
  },
  {
    title: 'Планирование маршрутов дронов',
    course: 'Основы работы с дронами',
    duration: '60 мин',
    completed: false,
  },
];

const Training: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Обучение
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title="Текущие курсы"
              action={
                <Button variant="contained" color="primary">
                  Все курсы
                </Button>
              }
            />
            <CardContent>
              <Grid container spacing={3}>
                {courses.map((course) => (
                  <Grid item xs={12} md={4} key={course.id}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="140"
                        image={course.image}
                        alt={course.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6">
                          {course.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          gutterBottom
                        >
                          {course.description}
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                          <Typography variant="body2" color="textSecondary">
                            Прогресс: {course.progress}%
                          </Typography>
                          <LinearProgress
                            variant="determinate"
                            value={course.progress}
                            sx={{ mt: 1 }}
                          />
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mt: 2,
                          }}
                        >
                          <Typography variant="body2" color="textSecondary">
                            {course.completed}/{course.lessons} уроков
                          </Typography>
                          <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<PlayCircleIcon />}
                          >
                            Продолжить
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card>
            <CardHeader title="Следующие уроки" />
            <CardContent>
              <List>
                {currentLessons.map((lesson, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      {lesson.completed ? (
                        <CheckCircleIcon color="success" />
                      ) : (
                        <AssignmentIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={lesson.title}
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                          >
                            {lesson.course}
                          </Typography>
                          {` — ${lesson.duration}`}
                        </>
                      }
                    />
                    <Chip
                      label={lesson.completed ? 'Завершено' : 'Начать'}
                      color={lesson.completed ? 'success' : 'primary'}
                      size="small"
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader title="Достижения" />
            <CardContent>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <StarIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Быстрый старт"
                    secondary="Завершите первый урок"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <StarIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Эксперт по дронам"
                    secondary="Завершите курс по дронам"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <StarIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Агроном-профессионал"
                    secondary="Завершите все курсы"
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

export default Training; 