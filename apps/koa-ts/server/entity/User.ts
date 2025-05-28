import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm"
import { Message } from "./Message"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number | undefined

    @Column({ type: 'varchar', nullable: true })
    firstName: string | undefined

    @Column({ type: 'varchar', nullable: true })
    lastName: string | undefined

    @Column({ type: 'int', nullable: true })
    age: number | undefined

    @Column({ type: 'datetime',  nullable: false})
    createTime: string | undefined

    @OneToMany((type) => Message, message => message.user)
    message: Message[] | undefined

}
