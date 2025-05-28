import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm"
import { User } from "./User"

@Entity()
export class Message {

    @PrimaryGeneratedColumn()
    id: number | undefined

    @Column({ type: 'varchar', nullable: true })
    title: string | undefined

    @Column({ type: 'varchar', nullable: true })
    content: string | undefined

    @CreateDateColumn()
    createTime: Date | undefined

    @UpdateDateColumn()
    updateTime: Date | undefined

    @ManyToOne((type) => User, (user) => user.message)
    user: User | undefined

}
