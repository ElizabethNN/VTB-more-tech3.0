import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import s from './CardAnalize.module.css'
import Tag from '../Tag/Tag'


export default function CardAnalize(props) {

    return (
        <Card sx={{ minWidth: 275, height: "auto"}} >
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                   Название: {props.title}
                </Typography>
                <Typography component="div">
                    <div className={s.tag}>
                        <Tag text={"Тип"} inf={props.type}/>
                        <Tag text={"Платформа"} inf={props.platform}/>
                        <Tag text={"Владелец"} inf={props.owner}/>
                        <Tag text={"Статус"} inf={props.status}/>
                        <Tag text={"Тэг"} inf={props.tag}/>
                        <Tag text={"Статус"} inf={props.status}/>
                        <Tag text={"Тэг"} inf={props.tag}/>
                        <Tag text={"Статус"} inf={props.status}/>
                        <Tag text={"Тэг"} inf={props.tag}/>
                        <Tag text={"Статус"} inf={props.status}/>
                        <Tag text={"Тэг"} inf={props.tag}/>
                        <Tag text={"Статус"} inf={props.status}/>
                        <Tag text={"Тэг"} inf={props.tag}/>
                        <Tag text={"Статус"} inf={props.status}/>
                        <Tag text={"Тэг"} inf={props.tag}/>
                        <Tag text={"Статус"} inf={props.status}/>
                        <Tag text={"Тэг"} inf={props.tag}/>
                        {/*Теги <br/>*/}
                        {/*Ценность данных<br/>*/}
                        {/*Свойства<br/>*/}
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
