import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import s from './CardAnalize.module.css'
import Tag from '../Tag/Tag'


export default function CardAnalize(props) {

    return (
        <Card sx={{ minWidth: 275}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                   Название: {props.title}
                </Typography>
                <Typography  variant="h5" component="div">
                    <div className={s.tag}>
                        <Tag text={"Тип"}/>
                        <Tag text={"Платформа"}/>
                        <Tag text={"Владелец"}/>
                        <Tag text={"Статус"}/>
                        <Tag text={"Тэг"}/>
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
