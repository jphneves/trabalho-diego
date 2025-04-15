//import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Perdiachei {
    //@PrimaryGeneratedColumn()
    id: number;

    //@Column('json')
    detalhes: string;
    
    localizacao: string;

    data: Date;

    status: boolean;

    tipo: string;
}