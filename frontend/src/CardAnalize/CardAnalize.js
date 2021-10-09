import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import s from './CardAnalize.module.css'
import Tag from '../Tag/Tag'

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
);

export default function CardAnalize() {
    return (
        <Card sx={{ minWidth: 275}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                   Название данных
                </Typography>
                <Typography  variant="h5" component="div">
                    <div className={s.tag}>
                        <Tag text={"Теги"}/>
                        {/*Теги <br/>*/}
                        {/*Ценность данных<br/>*/}
                        {/*Платформа<br/>*/}
                        {/*Свойства<br/>*/}
                        {/*Владелец<br/>*/}
                        {/*Статус<br/>*/}
                        {/*Статиска пользователя<br/>*/}
                        {/*Отношения<br/>*/}
                        {/*Схема<br/>*/}
                        {/*Источник<br/>*/}
                        {/*Описание*/}
                    </div>
                </Typography>
            </CardContent>
        </Card>
    );
}
