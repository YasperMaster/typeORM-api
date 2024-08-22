import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity, Unique } from "typeorm";

@Entity()
@Unique(["name"])
export class Event extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    generalTickets!: string;

    @Column()
    description!: string;

    @Column()
    dateTime!: string;
}