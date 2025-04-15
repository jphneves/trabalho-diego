//import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator'

export class CreatePerdiacheiDto {
    @IsNumber()
    id: number;

    @IsString()
    detalhes: string;
    
    @IsString()
    localizacao: string;

    @IsDate()
    data: Date;

    @IsBoolean()
    status: boolean;

    @IsString()
    tipo: string;
}

